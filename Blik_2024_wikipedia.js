 import {note,each,drop,compose,either,infer,tether,is,record,slip,numeric,collect,provide,combine,wether,when,crop,buffer,pass,refer,colors,expect,wait,exit} from "./Blik_2023_inference.js";
 import {fetch} from "./Blik_2023_interface.js";
 import {merge,search,extract,unfold,prune,sum,extreme} from "./Blik_2023_search.js";
 let wikipedia="https://en.wikipedia.org/w/api.php?";
 let parameters={query:{format:"json",origin:"*"}};

 export default 
 {async get(request)
{let {title,depth=1,height,section,homogeneous=true}=request.query;
 let pages=await expand(title,depth,height,section,homogeneous);
 if(request.path.at(-1)==="wikipedia")
 return {[title]:prune.call(pages,({1:page})=>
 page.title?page.pages?{[page.title]:page.pages||{}}:page.title:page)};
 return unfold.call({title,pages},"pages").filter(page=>page.pages);
},async coedits(request)
{let pages=await this.get(request);
 pages=pages.flatMap(page=>[page,page.pages.filter(page=>!page.pages)].flat());
 let revisions=await Promise.all(pages.map(({title})=>harvest(
 {...parameters.query,action:"query",prop:"revisions",rvlimit:500,rvprop:"user"//"timestamp|user|comment|slotsize|userid|ids|tags"
 ,rvdir:"newer",rvstart:new Date("2020-01-01").toISOString()
 ,formatversion:"2",titles:title
 })));
 let edits=revisions.flat().flatMap(({query:{pages}})=>pages.map(({title,revisions})=>(
 {[title]:Array.from(new Set(revisions?.map(({user})=>user)||[]))}))).reduce(compose(crop(2),0,merge));
 let {implicit}=request.query;
 return compose
(Object.entries,infer("map",([title,editors],index,entries)=>
[title,implicit
?entries.slice(index+1).filter(({1:coeditors})=>coeditors.some(editor=>editors.includes(editor))).map(([title])=>title)
:editors.filter(editor=>entries.some(([cotitle,editors])=>cotitle!==title&&editors.includes(editor)))
]),Object.fromEntries
)(edits);
},async coreference(request)
{let pages=await this.get(request);
 return pages.map(page=>
 merge(page,{pages:page.pages.map(({title})=>title)})).map(({title,pages:links},index,pages)=>(
 {[title]:pages.slice(index+1).filter(({pages:colinks})=>
 colinks.some(link=>links.includes(link))).map(({title})=>title)})).reduce(merge);
},async network(request)
{let pages=await this.get(request);
 return pages.map(page=>
 merge(page,{pages:page.pages.map(({title})=>title)})).map(({title},index,pages)=>(
 {[title]:pages.filter(({title:cotitle,pages})=>
 cotitle!==title&&pages.includes(title)).map(({title})=>title)})).reduce(merge);
}};

 var harvest=record(async function harvest(query,rate=1000,limit=50,history=[])
{let entry=performance.now();
 this.requests=this.requests||new Map(),this.buffer=this.buffer||new Set();
 let throttle=pass(expect(infer((pool,index)=>pool.size<limit||
 (pool.set&&index.pop()&&console.log(colors.busy+"throttling "+JSON.stringify(query)+"..."+colors.steady)),[true]),60000));
 if(!history.length)
 await compose.call(this.requests,throttle,query,entry,"set"),
 console.log(colors.busy+"harvesting wikipedia: "+JSON.stringify(query)+"..."+colors.steady);
 await compose.call(this.buffer,throttle,entry,"add");
 compose(wait(rate),"delete")(this.buffer,entry);
 return compose
(expect(compose(fetch,wether(compose("status",is(200)),infer())),1000,5),"json",result=>result.continue
?harvest.call(this,query,rate,limit,[...history,result]):
[...history
,console.log(colors.ready+"harvested wikipedia: ("+(performance.now()-this.requests.get(query))/1000+"s)"+JSON.stringify(query)+"!"+colors.steady)||
 this.requests.delete(query)&&
 result
]
)(wikipedia+new URLSearchParams([history.at(-1)?.continue,query].reduce(merge,{})));
},JSON.stringify).bind({});

 export function expand(title,depth,height,section,homogeneous)
{// request page with subpages/subcategories. 
 if(depth<1)return;
 if(height>-1)return;
 let namespaces={page:0,category:14};
 let namespace=title.startsWith("Category:")&&!title.includes("|")?"category":"page";
 let query=section==="references"
?{...parameters.query,action:"parse",prop:"extlinks",page:title,redirects:true}
:section
?{...parameters.query,action:"query",prop:"revisions",titles:title,rvprop:"content",rvsection:section,redirects:true}
:height
?{...parameters.query,action:"query",list:"backlinks",bltitle:title,blredirect:true,blfilterredir:"nonredirects"}
:namespaces[namespace]
?{...parameters.query,action:"query",generator:"categorymembers",gcmtitle:title}
 // the "query" action for "links" is magnitudes slower. 
:{...parameters.query,action:"parse",prop:"links",page:title,redirects:true
 //,plnamespace:homogeneous?namespaces[namespace]:Object.values(namespaces).join("|")
 };
 let descend=(depth>1)||(height<-1);
 return compose
(harvest,infer("flatMap",result=>result.parse||result.query?.backlinks||Object.values(result.query?.pages||{}))
,infer("flatMap",page=>page.links||page.revisions||page)
,infer("map",page=>merge(page,{title:page.title||page["*"]}))
,homogeneous?infer("filter",({ns})=>ns===namespaces[namespace]):infer()
,descend?compose
(infer("map",compose(combine(compose("title",infer(expand,depth-1,height+1,section,homogeneous),"pages",refer),infer()),merge))
// ,infer("reduce",record(compose(pass(compose(performance.now(),(pages,{title},index,{length},time)=>
//  colors.ready+(index+1)+"/"+length+" "+title+" ("+(performance.now()-time)/1000+"s)"+colors.steady,console.log)),drop(1,3))),[])
,Promise.all.bind(Promise)
):infer()
)(query);
};
