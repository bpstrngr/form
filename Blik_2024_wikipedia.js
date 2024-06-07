 import {note,each,drop,compose,either,infer,tether,record,collect,provide,combine,crop,remember,refer} from "./Blik_2023_inference.js";
 import {fetch} from "./Blik_2023_interface.js";
 import {merge,search,extract,unfold,prune} from "./Blik_2023_search.js";
 let wikipedia="https://en.wikipedia.org/w/api.php?";
 let parameters={query:{action:"query",format:"json"}};

 export default 
 {async get(request)
{let {title,depth,homogeneous}=request.query;
 let pages=await expand(title,depth,homogeneous);
 if(request.path.at(-1)==="wikipedia")
 return {[title]:prune.call(pages,({1:page})=>
 page.title?page.pages?{[page.title]:page.pages||{}}:page.title:page)};
 return unfold.call({title,pages},"pages").filter(page=>!page.pages&&page.ns!==14);
},async coedits(request)
{let pages=await this.get(request);
 let revisions=await pages.reduce(record(({title})=>
 harvest(
 {...parameters.query,prop:"revisions",rvlimit:500,rvprop:"timestamp|user|comment|slotsize|userid|ids|tags"
 ,rvdir:"newer",rvstart:new Date("2000-01-01").toISOString()
 ,formatversion:"2",titles:title
 })),[]);
 let editors=revisions.flat().flatMap(({query:{pages}})=>pages.map(({title,revisions})=>(
 {[title]:Array.from(new Set(revisions.map(({user})=>user)))}))).reduce(compose(crop(2),0,merge));
 let {implicit}=request.query;
 return compose
(Object.entries,infer("map",([title,editors],index,entries)=>
[title,implicit
?entries.slice(index+1).filter(({1:coeditors})=>coeditors.some(editor=>editors.includes(editor))).map(([title])=>title)
:editors.filter(editor=>entries.some(([cotitle,editors])=>cotitle!==title&&editors.includes(editor)))
])
,Object.fromEntries)(editors);
},async coreference(request)
{let pages=await this.get(request);
 return pages
 return Object.entries(pages).map(([title,links],index,entries)=>(
 {[title]:entries.slice(index+1).filter(({1:colinks})=>
 colinks.some(link=>links.includes(link))).map(([title])=>title)}));
},async network(request)
{let pages=await this.get(request);
 return pages
 return Object.entries(pages).map(([title],index,entries)=>(
 {[title]:entries.filter(([cotitle,links])=>
 cotitle!==title&&links.includes(title)).map(([title])=>title)}));
}};

 var harvest=remember(function harvest(query,history=[])
{if(!history.length)
 console.log("harvesting wikipedia: "+JSON.stringify(query)+"...");
 return compose
(fetch,"json",result=>result.continue
?harvest(query,[...history,result])
:[...history,result]
)(wikipedia+new URLSearchParams([history.at(-1)?.continue,query].reduce(merge,{})));
},JSON.stringify);

 function expand(title,depth,homogeneous)
{// request page with subpages/subcategories. 
 if(depth<1)return;
 let category=title.startsWith("Category:")&&!title.includes("|");
 let query=category
?{...parameters.query,generator:"categorymembers",gcmtitle:title}
:{...parameters.query,prop:"links",titles:title};
 let namespace=category?14:0;
 return compose
(harvest,infer("map",result=>Object.values(result.query?.pages||{})),"flat"
,homogeneous&&infer("filter",({ns})=>ns===namespace)
//,infer("flatMap",page=>page.links||page)
 // split pages into batches to avoid requesting too many at once. 
//,infer("map",(page,index,pages)=>pages.splice(index,10,pages.slice(index,index+10)))
,infer("reduce",record(page=>//pages=>Promise.all(pages.map(page=>
 compose(infer(expand,depth-1,homogeneous),"pages",refer,page,merge)(//page.title)))
 page.links?.filter(({ns})=>!homogeneous||ns===namespace).map(({title})=>title).join("|")||page.title)
 ),[])
//,"flat"
 // link requests return with the origin pages since they may be plural, unlike categorymembers. 
,infer("flatMap",page=>page.links?page.pages||page.links.filter(({ns})=>!homogeneous||ns===namespace):page)
)(query);
};
