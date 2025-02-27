 import * as layout from "./Blik_2023_layout.js";
 import {color} from "./Blik_2023_layout.js";
 import {search,merge,extreme,sum,extract,unfold,prune} from "./Blik_2023_search.js";
 import {document,demarkup,namespaces,deselect,css,capture,destroy,ascend,form,fill,annotate} from "./Blik_2023_fragment.js";
 import {infer,tether,simple,swap,wait,numeric,drop,pass,note,has,collect,compose,combine,whether,record,each,slip,differ,buffer,observe,ascending,defined,compound,array,string,clock,revert,provide,plural,when} from "./Blik_2023_inference.js";
 import {window,fetch,digest,resolve,path} from "./Blik_2023_interface.js";
 import * as d3 from './Bostock_2011_d3.js';
 import {select,selectAll} from './Bostock_2011_d3_select.js';
 import extend from "./Blik_2023_d4.js";
 var {default:vectors}=await resolve("./Blik_2020_svg.json");
 var browser=Boolean(globalThis.window);
 let location=new URL(import.meta.url).pathname.replace(/.*\//,"");

 export default compose
(drop(1),combine(sprawl,drop(1)),combine(spread,drop(1)),chart,simulate
,pass(tether(capture,["",location,"actions"].join("/"))),pass(report)
);

 export function sprawl(resource,options={})
{// parse object as a nodes. 
 // {node:{node:[{node:"node",relations:["node"]},"node"]}} or [{name,relations}]
 if(typeof resource==="string")
 return compose(fetch,digest,infer(sprawl,options))(resource);
 if(options.source)
 resource=record(resource,[options.source==="/get"?window.location.origin:options.source]),options.linear=true;
 if(resource.constructor.name==="Node")
 return resource;
 let {relations,spread,title,monospace=10,still,source,gradual,depth}=options;
 if(resource.nodeName)
 return Graph(resource);
 let {resource:{nodes}}=prune.call({resource},split,false,"value");
 prune.call(nodes,crosslink,false,["source","value"]);
 let cluster=unfold.call(note({nodes}),childfold).slice(1);
 if(!options.linear)
 cluster.forEach(deduplicate);
 return nodes;
//  note(unfold.call(nodes[0],childfold));
//  if(depth)nodes.forEach(node=>node.depth===depth&&delete node.children);
//  nodes.forEach((node,index,{length})=>Object.assign(node
// ,{title:title&&node.data[title]||(string(node.data)?node.data:Object.keys(node.data).slice(0,2).map((field,index)=>index?"":field).join("..."))
//  }));
//  let [min,max]=extreme(nodes.flatMap(period).filter(Boolean).sort(ascending));
//  let time=d3.scaleLinear().domain([min-(max-min)/5,max+(max-min)/5]).range([0,(max-min)/14000000])
//  Object.assign(node,{matrix,spread,monospace,still,cluster,gradual,time});
//  return node;
};

 function split([name,value],path=[])
{// split entries into nodes. 
 let fields="value,name,nodes,depth".split(",");
 let node=compound(this)&&has.call(this||{},fields)&&Object.keys(this).length===fields.length;
 if(node)return value;
 let entry=path.at(-1)==="nodes";
 if(entry&&array(this))
 return provide((compound(value)?Object.entries(value):[[value]]).map(entry=>split.call(value,entry,path)));
 let nodes=compound(value)?[value].flat():undefined;
 // search.prune collects array indices in path, which doubles the depth. 
 // first entries only serve to expose resource entries, which increments depth. 
 let depth=path.length/2-1;
 return {name,value,nodes,depth};
};
 function crosslink([field,value],path)
{if(!path.length)return value;
 let {nodes,depth}={[field]:true};
 if(nodes&&array(value))
 value.forEach(entry=>merge(entry,{source:[this]},0));
 let terminal=depth&&!this.nodes?.length;
 if(terminal)
 unfold.call(this,"source").reverse().forEach((node,index)=>
 merge(node,{height:Math.max(node.height||0,value-index)}));
 return value;
};
 function deduplicate(node,index,cluster)
{cluster.slice(index+1).filter(({name})=>name===node.name).map(duplicate=>
 cluster.splice(cluster.indexOf(duplicate),1).flatMap(({source,nodes})=>
 [source,nodes].flatMap((list,index)=>list?.map(node=>node[index?"source":"nodes"]||[])||[])).reduce((node,list)=>
 list.splice(list.indexOf(duplicate),1,node)[0]
,merge(node,duplicate,0))
,node);
};

 function spread(nodes,{spread="force",monospace=10,matrix}={})
{let {force,radial,up,down,left,right}={[spread]:true};
 if(force)
 return nodes;
//  nodes.reverse().reduce(({x,y},node)=>Object.assign(node,{x,y})
// ,[breadth,length].map(size=>size*monospace/2).reduce((x,y)=>({x,y})));
 let horizontal=left||right;
 let vertical=down||up;
 let inverse=up||left;
 nodes=unfold.call({nodes},childfold).slice(1);
 let {breadth,length}=measure(nodes[0]);
 let [width,height]=[breadth,length].map(size=>size*monospace).sort(size=>horizontal?-1:1);
 if(radial)
 d3.tree().size([Math.PI*2,height/2]).separation(({depth,source},next)=>(source==next.source?1:2)/depth)(nodes[0]);
 else
 nodes.forEach(node=>Object.assign(node,
[[-breadth/2,measure(node).breadth/2,unfold.call(node,"source").flatMap(offset)]
,[-length/2,node.nodes?10:20,unfold.call(node,"source").slice(node.nodes?1:2).map(indent)]
].map(size=>sum(...size)*monospace).sort(size=>horizontal?-1:1).reduce((x,y)=>({x,y}))));
 if(inverse)
 nodes.forEach(node=>Object.assign(node,horizontal?{x:-node.x}:{y:-node.y}));
 return nodes;
};

 function offset(node)
{return [node.source].flat().flatMap(node=>node?.nodes||[]).flatMap((child,index,nodes)=>
 child===node?nodes.splice(index)&&[]:child).map(node=>measure(node).breadth);
};

 function indent(node)
{return extreme([node.source?.nodes||node].flat().map(({name})=>name?.length||0))[1];
};

 function chart(nodes,options,fragment)
{merge(options,{spread:"force"},0);
 return compose.call
(fragment?.nodeName?.toLowerCase()==="svg"?fragment
:{svg:
 {"xmlns:xlink":namespaces.xlink,preserveAspectRatio:"xMidYMid meet"
 ,class:"d3"
 ,style:{"#text":css({".d3":layout.media})}
 ,defs:{filter:[vectors.shadow.defs.filter,vectors.shadow_white.defs.filter]}
 }
 }
,document,{datum:Object.assign(nodes,options),...svg},tether(extend)
);
};

 var svg=
 {fold:false,call(fragment)
{if(!browser||fragment.datum().still)return;
 observe.call(d3.zoom().scaleExtent([0.1,100]),{zoom({transform}){extend.call(this,{fold:false,g:{fold:false,class:"graph",transform}});}})(fragment);
},id:({source})=>deselect(source||"get"),class:"d3"
 ,"data-options":(nodes)=>JSON.stringify(prune.call(nodes,([field,value])=>isNaN(field)?value:undefined,1,0))
 ,title(concept){return trace(concept,[])[0];}
 ,viewBox({monospace=10,spread="force"})
{let {up,down,force,radial}={[spread]:true},vertical=Boolean(up||down);
 let {breadth,length}=measure(arguments[0]);
 let [nodes,links]=forage(this);
 let density=links.size()/(nodes.size()*(nodes.size()-1)/2);
 let [width,height]=force
?Array(2).fill(scale(nodes.size()/density||0))
:[breadth,length].map(size=>size*monospace).sort(size=>vertical?1:-1);
 let viewBox=radial?[-width,-height,width*2,height*2]:[-width/2,-height/2,width,height];
 return viewBox.join(" ");
},g:
 {update:true,class:"graph",transform({monospace,spread})
{let [width,height]=demarkup(ascend.call(this)[0],"viewBox").viewBox.split(" ").map((side,index,sides)=>sides[index+2]-side);
 let translate={radial:[width/2,height/2],right:[10,0],left:[-10,0],down:[0,10],up:[0,-10]}[spread]||[0,0];
 return "translate("+translate+")";
},g:
[{update:true,class:"network",fill:"none",stroke:"#555","stroke-width":1.5,g:
 {class:"link"
 ,fold(node){return connect(node);}
 ,match:linkindex
 ,update(links){if(select(ascend.call(links)[0]).datum().spread==="force")links.each(link.each).call(drag);}
 ,call(links){links.remove();}
 }
 }
,{update:true,class:"cluster","stroke-linejoin":"round","stroke-width":1,g:
 {class:"node"
 ,fold(node){return unfold.call({nodes:node},childfold).slice(1);}
 ,match:nodeindex
 ,update(nodes){if(select(ascend.call(nodes)[0]).datum().spread==="force")nodes.each(locate).call(drag);}
 ,call(nodes){nodes.remove();}
 }
 }
]}
 };

 var node=
 {fold:false,match:nodeindex
 ,class:"node",id:nodeindex,filter:"url(#shadow)"
 ,update(nodes)
{let fragment=select(ascend.call(nodes)[0]);
 let {gradual}=fragment.datum();
 extend.call(nodes
,{fold:false,...extract.call(node,["transform"])
 ,...gradual&&
 {circle:{update:true,...extract.call(node.circle[0],["class","r"])}
 ,text:{fold:false,update:true,...extract.call(node.text,"font-size")}
 }
 });
},each(node)
{if(trace(node,[])?.[0]?.includes?.("image"))
 pattern(node);
},call(nodes){if(browser)drag(nodes);}
 ,fill:node=>paint(node)
 ,transform({x,y})
{let {spread}=select(ascend.call(this)[0]).datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 return force?"translate("+[x,y]+")"
:radial?"rotate("+(x*180/Math.PI-90)+") translate("+y+",0)"
:"translate("+[x,y]+") rotate("+(right?0:down?90:up?-90:0)+")";
},title:{text:({name})=>name}
 ,circle:
[{name({name,source,nodes}){return source&&!nodes?source.name+"_"+name:null;}
 ,r(node){return select(ascend.call(this)[0]).datum().spread==="force"?scale(size(node)):5;}
 ,fill:node=>paint(node)
 ,title:{text({value,name}){return value?.progress?.concat("%")||this.remove();}}
 }
,{fold(node){return trace(node,[])?.[0]?.includes("image")?[node]:[];}
 ,class:"label"
 ,r(node){return this.previousSibling.getAttribute("r")*0.9;}
 ,fill({name}){return "url(#"+name?.replace(/ /g,"_")+")"}
 }
],text:
 {fold:wrap,update:false,class:"label"
 ,fill()
{let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 return force?"black":undefined;
},stroke:"black",opacity:0.5
 ,"text-anchor":function()
{let {spread}=select(ascend.call(this)[0]).datum();
 let {force,left,up}={[spread]:true};
 let {nodes}=select(ascend.call(this,1)[0]).datum();
 return force?"middle":["start","end"][sum([Boolean(nodes?.length),left])%2];
},"stroke-width":function()
{let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 return this.parentNode.querySelector("circle").getAttribute("r")*0.02+"px";
},"font-size":function()
{let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 let node=select(ascend.call(this,1)[0]).datum();
 let size=this.parentNode.querySelector("circle").getAttribute("r");
 return size/2+"px";
},dx()
{let {spread}=select(ascend.call(this)[0]).datum();
 let {force,left,up}={[spread]:true};
 let {nodes}=select(ascend.call(this,1)[0]).datum();
 return !force?[7,-7][sum([Boolean(nodes?.length),left])%2]:null;
},dy(text,index,wrap)
{let force=select(ascend.call(this)[0]).datum().spread==="force";
 return force?scale(index+1-(wrap.length)/2)+"em":".25em";
},transform()
{let radial=select(ascend.call(this)[0]).datum().spread==="radial";
 return radial?left(this)?"rotate(180)":null:null;
},text(text){return text;}
 }
 };

 var link=
 {fold:false,match:linkindex
 ,update(links)
{let force=select(ascend.call(links)[0]).datum().spread==="force";
 let fields=force?["path"]:["transform","path"];
 extend.call(links,{fold:false,...extract.call(link,fields)});
},drop(links)
{extend.call(links,{fold:false,each(link)
{let detached=degree(link,-1).filter(node=>!node.degree);
 detached.forEach(infer("remove"));
}});
 return links;
},call(links){if(browser)drag(links)}
 ,each(link)
{degree(link);
 let fragment=ascend.call(this)[0];
 let {gradual}=select(fragment).datum();
 let unlocated=[link.source,link.target].filter(node=>
 ["x","y"].some(axis=>isNaN(node[axis])));
 if(!gradual||!unlocated.length)
 return;
 let parent=[node.parent].flat()[0];
 if(["x","y"].some(axis=>isNaN(parent?.[axis])))
 parent=demarkup(fragment,"viewBox").viewBox.split(" ").map((side,index,sides)=>
 Number(side)+(sides.splice(2,1)[0])/2).reduce((x,y)=>({x,y}));
 unlocated.forEach(node=>[parent,node].reduce(({x,y},node)=>Object.assign(node,{x,y})));
},id:linkindex,class:"link",opacity:0.5
 ,title:{text:(link)=>[link,link.source,link.target].map(({value,name},index)=>
 index?name:{R:"responsible",A:"accountable",C:"consulted",I:"informed"}[value]||value).join("\n")}
 ,transform(link,index,links)
{let twins=selectAll(links).select(function(twin){return ["source","target"].every(key=>twin[key]==link[key])&&this}).data();
 let twinindex=twins.indexOf(link);
 return "translate(0,"+(scale(!link.value||isNaN(link.value)?1:link.value)/7/twins.length)*Math.ceil(twinindex/2)*(twinindex%2||-1)+")";
},path:
[{update(path){extend.call(path,{fold:false,...extract.call(link.path[0],["d"])});}
 ,stroke({value,source}){return paint(value&&isNaN(value)?value:source);}
 ,"stroke-width":({value})=>scale(!value||isNaN(value)?1:(value*(value<0?10:1)))/2
 ,d:line
 }
//,{update(path){extend.call(path,{fold:false,...extract.call(link.path[1],["d"])});}
//  ,class:"arrow"
//  ,d:buffer(function({source,target})
// {if(!this.previousSibling.getPointAtLength)
//  return null;
//  let curve=[source,source,this.previousSibling.getPointAtLength?.(scale(size(source)))||target];
//  return curve.map(({x,y},index)=>["M","S"," "][index]+[x,y]).join("");
//},swap(undefined))
//  ,"stroke-width"(){return this.previousSibling.getAttribute("stroke-width")/2}
//  ,"marker-end":function({source})
// {let [fragment]=ascend.call(this);
//  let marker=trace(source,[]).pop()?.replace(/[^a-zA-Z0-9]/g,"").replace(/^[0-9]+/,number=>
//  number.split("").map(number=>String.fromCharCode(65+number))).replace(/,/g,"")||"none";
//  if(!fragment.querySelector("marker#"+marker))
//  extend.call(fragment,{fold:false,defs:
//  {fold:false,marker:
//  {id:marker,orient:"auto",markerWidth:"2",refX:"0.1",refY:"1"
//  ,path:{d:"M0,0 V2 L2,1 Z",fill:paint(source)}
//  }
//  }});
//  return "url(#"+marker+")";
// }}
]};

 function line(link,index,paths)
{let fragment=select(ascend.call(this)[0]);
 let {spread}=fragment.datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 let [vertical,horizontal]=[up||down,left||right];
 let [field]=Object.entries({vertical,horizontal,radial}).find(({1:value})=>value)||[];
 let line=d3["link"+field?.replace(/./,initial=>initial.toUpperCase())];
 if(line)
 return line()[radial?"angle":"x"](({x})=>x)[radial?"radius":"y"](({y})=>y)(link);
 let {source,target:{x,y}}=link;
 let curve=!horizontal&&!vertical?""
://"C"+source.x+","+(source.y+y)/2+" "+x+","+(source.y+y)/2:
 compose.call(
 {distance:Math.sqrt((source.x-x)**2+(source.x-x)**2),middle:(y+source.y)/2,ascent:Math.sqrt(Math.abs(y*source.y))
 ,side:(size[0]/2<source.x?1:-1)
 ,steer:Math.abs(source.x-size[0]/2)
 ,feedback:trace(source)=="stakeholder",scope:0,descent:0
 }
,({steer,...curve})=>({...curve,steer,descent:y+source.y-ascent,scope:((size[0]/2/steer)*Math.sqrt(steer*steer/4))})
,({distance,middle,side,steer,scope,feedback,ascent,descent})=>
 "C"+(feedback?source.x+","+(source.y-scope/3):source.x+","+ascent)
    +(feedback?" "+(source.x+scope*side)+","+(source.y-scope/3):"")
+" "+(feedback?source.x+scope*side+","+middle:x+","+descent)
    +(feedback?" "+(source.x+scope*side)+","+(y+distance):"")
    +(feedback?" "+(x)+","+(y+scope/3):"")
);
 let end=radial?Math.cos(x-Math.PI/2)*y+","+Math.sin(x-Math.PI/2)*y:[x,y];
 return "M"+[source.x,source.y]+curve+" "+end;
};

 function pattern(node)
{extend.call(ascend.call(this)[0]
,{fold:false,defs:{fold:false,pattern:
 {fold(){return select(this).selectAll("pattern").data().concat(node);}
 ,match:patternindex
 ,id:patternindex,name({value,name}){return value||name;}
 ,x:0,y:0,width:1,height:1,viewBox({centrality:size}){return [0,0,size,size];}
 ,each(node,index,patterns)
{let {id}=this,name=this.getAttribute("name"),pattern=this,color=paint(node);
 (name!="image"
?fetch("https://www.googleapis.com/customsearch/v1/"
+(name=="wiki image"?"siterestrict":"")
+"?q="+label(node)+"&searchType=image&cx="
+(name==="wiki image"?"014735265259933203879:xaftz2zw4io":"014735265259933203879:qgusnjqnuxk")
+"&key="+keys.google.api).then(response=>response.json()).then(json=>(json.items||[{link:undefined}])[0].link)
:new Promise(done=>done(name.startsWith("http")?name:name=="image"
?vectors[name]?"vector/"+name:("icon/"+label(node)+".png")
:"icon/"+name.replace(/ /g,"_")+".png"))).then(canvas).then(canvas=>
{pattern.appendChild(document(
 {image:
 {width:scale(node.centrality)
 ,height:!src.endsWith("png")&&canvas.height>canvas.width?null:scale(node.centrality)
 ,y:label(node)=="desertification"||(color=["hazard","stakeholder"].includes(color))?scale(node.centrality)*.2:undefined
 ,[color=canvas.width>canvas.height&&color?"width":"height"]:color?undefined:scale(node.centrality)*(color=="width"?1:label(node)=="desertification"?1:.6)
 }
 },"svg")).setAttributeNS("http://www.w3.org/1999/xlink","href",canvas.toDataURL("image/"+src.slice(-3)));
})
}}}
 });
};

 var drag=observe.call(d3.drag()
,{start(drag,node)
{["x","y"].forEach(dimension=>node["s"+dimension]=node[dimension]);
 this.dispatchEvent(new Event("mouseout"));
 //setTimeout(tick=>event.target.editing&&this.window.subject.reform({delete:{name:node.title}}),event.target.editing=1000);
},drag(drag,node)
{["x","y"].forEach(dimension=>node["f"+dimension]=drag[dimension]);
 this.style.zIndex=0;
 let fragment=this.closest("svg");
 let {spread}=select(fragment).datum();
 let {force}={[spread]:true};
 if(force)
 return;
 let parents=[node.parent||{}].flat();
 let siblings=parents.flatMap(({children})=>children||[]);
 let index=siblings.indexOf(node);
 let [sort,sibling]=[-1,1].map(sort=>
 [sort,siblings[index+sort]]).find(({1:sibling},next)=>
 sibling&&(node.y-sibling.y<0)!==Boolean(next))||[];
 if(!sibling)
 return;
 let source=["data","title"].map(key=>parent[key]).reduce(Reflect.get);
 node.edited=true;
 parent.children=siblings.sort(({title})=>title==node.title&&sort);
 Object.assign(source,Object.fromEntries(Object.entries(source).sort(([key])=>key==node.title&&sort)));
 ["x","y"].forEach(dimension=>[node["s"+dimension],sibling[dimension]]=[sibling[dimension],node["s"+dimension]]);
 let {1:links}=forage(fragment);
 links.filter(({source,target})=>[source,target].includes(node.datum())).remove();
 // [this,this[(sort<0?"previous":"next")+"Sibling"]].filter(Boolean).map(select).forEach(node=>
 // node.update(node)||
 // link.update(links.filter(({source,target})=>[source,target].includes(node.datum()))));
},end(drag,node)
{let fragment=this.closest("svg");
 let radius=Number(this.querySelector("circle").getAttribute("r"));
 let source=fragment.simulation.find(node.x,node.y,radius);
 //["x","y"].map(dimension=>node[dimension]=node["s"+dimension]);
 let {1:links}=forage(fragment);
 //node.update(select(this));
 //links.filter((link)=>[link.source,link.target].includes(node)).remove();
 fragment.simulation.alpha(fragment.simulation.alpha()+0.1);
 //link.update(links.filter((link)=>[link.source,link.target].includes(node)))
 this.dispatchEvent(new Event("mouseover"));
 ["fx","fy","sx","sy"].forEach(track=>delete node[track]);
 delete this.style.zIndex;
 let title=fragment.getAttribute("title");
 if(node.edited)
 delete node.edited&&
 Object.entries({join:title,put:{room:title,body:node}}).forEach(([emit,body])=>
 window.subject?.room.emit(emit,body));
 if(!source)return;
 let force=fragment.simulation.force("link");
 force.links(force.links().concat({source,target:node}));
 //simulation.restart();
}});

 function nodeindex(node){return node?trace(node,[]).join("/"):this.getAttribute("id");};
 function linkindex(link){return link?[link.source,link.target].map(nodeindex).join("_"+link.value+"_"):this.getAttribute("id");};
 function patternindex({title}){return title.replace(/[^\d\w]/g,"");};
 function size(node){return Math.cbrt(node.value?.weight)||node.centrality||1;};
 function scale(value){return value};
 function period(node){return ["start","end"].map(field=>search.call(node.value,field));};

 var childfold=["nodes",node=>Array.from(node.relations?.keys()||[])];

 export var trace=(node,path)=>!path&&color[node.name]?node.name:!node.source
?[node.name,...path||[]]
:trace(node.source,path?[node.name,...path]:path);

 function paint(node,scale)
{if(typeof node=="string")
 return {R:color.red,A:color.yellow,C:color.green}[node]||color.indigo;
 let {progress}=node.value||{};
 return defined(progress)
?Number(progress)?color.health(Number(progress)/100):"#616161"
:node.color||color[trace(node)]||
 (scale||color.rainbow).call(color,node.height/(node.depth+node.height));
};

 function wrap({name,source})
{if(trace(arguments[0],[])?.[0]?.includes("image"))
 return [];
 let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 return force?!name||(name.toString().match(/.+?(_|\/|$)/g)||[]).reduce((wrap,split,index,splits)=>
 wrap.concat(index&&(split.length+wrap[wrap.length-1].length<18)
?wrap.pop()+split
:split.match(new RegExp(".{1,"+18+"}","g"))),[])
:[name];
};

 function locate(node)
{return compose.call
(this.transform?.baseVal[0]?.matrix||{}
,combine(swap(node),compose(["e","x"],record),compose(["f","y"],record)),collect,infer("reduce",merge)
);
};

 function left(node)
{let {width,spread}=select(ascend.call(node)[0]).datum();
 let {x,parent}=select(ascend.call(node,1)[0]).datum();
 let {radial}={[spread]:true};
 return radial?x<Math.PI||!parent:(x<width/2?parent:!parent);
};

 export function forage(node)
{if(!node.ownerDocument)
 throw Error("can't "+forage.name+node);
 return [["cluster","node"],["network","link"]].map(([group,name],index)=>
 select(node).select("g."+group).selectAll("g."+name));
};

 function connect(node,sources=new Set())
{return [node].flat().filter(source=>source&&!sources.has(source)&&sources.add(source)).flatMap(source=>
[[source.nodes?.map(node=>[node])||[],Array.from(source.relations||[])].flat().flatMap(([target,value])=>
 [{source,target,value},connect(target,sources)].flat())
].flat());
};

 function neighbors({target})
{let node=select(target).datum();
 let {source,nodes}=node;
 let {1:links}=forage(target.closest("svg"));
 let cluster=[node,source,nodes].flat().filter(Boolean).map();
 return links.filter(({source,target})=>[source,target].every(node=>cluster.includes(node)));
};

 var measure=node=>
[unfold.call({nodes:node},childfold).slice(1).filter(node=>!node?.nodes).length
,(node.name?.length||0)+
 extreme(unfold.call({nodes:node},childfold).filter(node=>!node.nodes).map(node=>
 sum(unfold.call(node,"source").map((node,index)=>
 extreme(node.nodes?.map(node=>node.name?.length))[1]))))[1]
].reduce((breadth,length)=>({breadth,length}));

 function degree(link,rate=1)
{if(!link)return [];
 let {source,target,value}=link;
 return [source,target].map((concept,vertex)=>
 ["imposure","exposure","outdegree","indegree"].map((score,index)=>
 concept[score]=index%2==vertex?(concept[score]||0)+(index<2&&value||1)*rate:concept[score]||0)&&
 Object.assign(concept
,{degree:concept.indegree+concept.outdegree
 ,centrality:concept.exposure+concept.imposure
 ,complexity:concept.exposure/concept.imposure
 }));
};

 export function serialize(concept)
{let children=Array.isArray(concept.children)?concept.children.map(subceive):[];
 Object.assign(concept.data[concept.title]||{},...children);
 return concept.data;
};

 function report(fragment)
{note(select(fragment).datum().source,fragment.parentNode?"tethered.":"ready.");
};

 function simulate(fragment)
{//let {requestAnimationFrame:frame}=fragment.ownerDocument.defaultView;
 //let throttle=frame?revert((tick,simulation)=>frame(time=>tick(simulation))):infer();
 let {force}={[select(fragment).datum().spread]:true};
 return compose
(0.01,"alphaTarget"
,infer("force","link",d3.forceLink([]).strength(0))
,infer("force","charge",d3.forceManyBody().strength(0))
,infer("force","collision",d3.forceCollide().radius(0))
,{fragment,clock:0},Object.assign
,tether(observe,{tick:buffer(compose(populate,force&&charge),note.bind(1))})
,"fragment"
)(fragment.simulation=fragment.simulation||merge(d3.forceSimulation(),{fragment}));
};

 function populate(simulation)
{// reflect changes to simulation on chart. 
 let {fragment,clock=0}=simulation;
 if(!fragment.parentNode)
 return note({detached:simulation.stop().fragment}),simulation;
 let datum=select(fragment).datum();
 if(!browser&&datum.gradual)
 return simulation.alpha(0).stop();
 let [cluster,network]=forage(fragment);
 let nodes=unfold.call({nodes:datum},"nodes").slice(1);
 let links=connect(nodes);
 let complete=cluster.size()===nodes.length;
 if(datum.gradual)
 links=links.slice(0,network.size()+!clock)
,nodes=Array.from(new Set(links.flatMap(({source,target})=>[source,target])));
 extend.call(fragment
,{fold:false,g:
 {fold:false,class:"graph",g:
[{fold:false,class:"network",g:{...link,fold:links}}
,{fold:false,class:"cluster",g:{...node,fold:nodes}}
]}
 ,viewBox:svg.viewBox
 });
 let {force}={[datum.spread]:true};
 if(!force&&complete)
 return simulation.alpha(0).stop();
 return Object.assign(simulation,{clock:(clock+1)%2});
 //form.style.backgroundImage=nodes.size()==this.nodes()[0].value?"":"linear-gradient(to right,"+[...this.nodes(),...new Array(this.nodes()[0].value-this.nodes().length)].map(node=>!node?"var(--isle)":paint(node).replace(")",",0.3)")).join(",")+")";
};

 function charge(simulation)
{let [cluster,network]=forage(simulation.fragment);
 let [population,connections]=[cluster,network].map(selection=>selection.size());
 let [nodes,links]=[simulation.nodes(),simulation.force("link").links()];
 let change=[population,connections].some((size,index)=>size!==[nodes,links][index].length);
 if(!change||!simulation.alpha())return simulation;
 [nodes,links]=[cluster.data(),network.data()];
 let density=connections/(population*(population-1)/2)||0;
 let [width,height]=["width","height"].map(dimension=>scale(population**2/(density||1)));
 let [exposure,imposure,internal,balance]=nodes.reduce((metric,{exposure,imposure,complexity},internal)=>
[exposure,imposure,internal=complexity?(complexity!==Infinity):0,internal?complexity:0
].map((value,index)=>metric[index]+value)
,[0,0,0,0]);
 let complexity=balance/internal||0;
 let hierarchy=nodes.reduce((hierarchy,node,index,{length})=>
 hierarchy+(((node.imposure-imposure)/length)**2),0);
 let dominance=(12/(population**3-population))*hierarchy;
 //let charge=-population/complexity||1;
 let tension=complexity;
 let spacing=scale(population/complexity||1);
 combine
(infer(),infer("alpha",1)//,infer("alphaDecay",0.3)
,infer("nodes",nodes,nodeindex)
,infer("force","center",d3.forceCenter(0,0).strength(0.25))
,infer("force","x",d3.forceX(0).strength(0))
,infer("force","y",d3.forceY(0).strength(0))
,compose("charge","force",infer("strength",node=>scale(node.centrality)*-3))
,compose("collision","force",infer("radius",node=>scale(size(node))+1))
,compose("link","force"
,infer("links",links,linkindex)
,infer("strength",({value})=>value||tension)
,infer("distance",({source,target})=>scale(size(source)*3+size(target)*3)||spacing)
))(simulation);
 return simulation;
};

/* function conceptualise()
{return Object.entries(seed).reduce(function latch(concepts,[name,concept])
{path.push(name);
 let passive=!concept||["string","number"].includes(typeof concept)||["/awesome","/vectors","/d3"].includes(name);
 let relations=passive?[]:!concept[reference]?reference?[]:concept
:Array.isArray(concept[reference])||!Object.values(concept[reference]).some(isNaN)?concept[reference]:[concept[reference]];
 relations=Object.entries(relations).map(([key,relation],index)=>
 parseInt(key)==index&&!relation.length&&!reference
?Object.entries(relation).reduce(latch,concepts)
&&Object.keys(relation).map(relation=>[relation,1])
:latch(concepts,[key=parseInt(key)==index?typeof relation.name=="string"?relation.name:relation:key,relation])
&&[[key,typeof relation=="number"?relation:1]]).flat();
 console.log(concept,relations);
 relations=Object.fromEntries([...concepts[name]&&concepts[name].relations?concepts[name].relations.length?concepts[name].relations.map(relation=>[relation,1]):Object.entries(concepts[name].relations):[],...relations]);
 concepts[path.pop()]=Object.assign({data:{name,path:[...path]},parent:concepts[path.slice(-1)[0]]},concept.length||concept,concepts[name],{relations});
 if(!reference&&!path.length&&Object.keys(seed)[1])
 concepts[seed.name||""]={data:{relations:{...(concepts[seed.name||""]||{}).relations,[name]:1}}};
 return concepts;
},{})
};*/

 export function Graph(xml)
{let graph=xml.getElementsByTagName('graph')[0];
 let meta=xml.getElementsByTagName('meta')[0];
 let hasViz=Boolean(xml.getAttribute("xmlns:viz")??xml.getAttributeNS("xmlns","viz")??xml.getAttribute("viz"));
 let version=xml.getAttribute('version')||'1.0';
 let mode=graph.getAttribute('mode')||'static';
 let defaultEdgetype=graph.getAttribute('defaultedgetype')||'undirected';
 let attributes=Array.from(xml.getElementsByTagName('attribute')).filter(node=>node.nodeName!=="#text").map(node=>(
 {defaultValue:Array.from(node.childNodes).filter(node=>node.nodeName!=="#text")[0]?.textContent
 ,id:node.getAttribute('id')||node.getAttribute('for')
 ,type:node.getAttribute('type')||'string'
 ,title:node.getAttribute('title')||''
 }));
 let model=Object.fromEntries(attributes.map(model=>[model.title.toLowerCase(),model.defaultValue]));
 let nodes=Array.from(xml.getElementsByTagName('node')).filter(node=>node.nodeName!=="#text").map(n=>(
 {id:n.getAttribute('id'),label:n.getAttribute('label')||''
 ,attributes:[{},model
,Object.fromEntries(Array.from(n.getElementsByTagName('attvalue')).filter(node=>
 node.nodeName!=="#text").map(node=>
 Array.from(node.attributes).map(node=>node.value)).map(([field,value])=>
 [attributes.find(model=>model.id===field),value].reduce((model,value)=>
[model.title.toLowerCase()
,[model.type,value].reduce((type,value)=>type==="boolean"?value===true
:'integer/long/float/double'.split('/').includes(type)?+value:value)
])))].reduce(merge)
 ,viz:hasViz?
 {color:[getFirstElementByTagNS(n,'viz','color'),"rgba"].reduce((color,fields)=>
 color?fields.split("").map(field=>color.getAttribute(field)).filter(Boolean).reduce((color,hue,index,{length})=>
 color+(!index?length>3?"a(":"(":",")+hue,"rgb")+")":undefined)
 ,position:[getFirstElementByTagNS(n,'viz','position'),"xyz"].reduce((position,fields)=>
 position?Object.fromEntries(fields.split("").map(p=>[p,+position.getAttribute(p)])):undefined)
 ,size:[getFirstElementByTagNS(n,'viz','size')?.getAttribute('value')].map(size=>size&&Number(size)).shift()
 ,shape:getFirstElementByTagNS(n,'viz','shape')?.getAttribute('value')
 }:{}
 })).map(({id,label,viz,attributes})=>({id,name:label,...viz,value:attributes}));
 let links=Array.from(xml.getElementsByTagName('edge')).filter(node=>node.nodeName!=="#text").map(e=>(
 {type:defaultEdgetype||"undirected",label:'',weight:1.0
 ,...Object.fromEntries(Array.from(e.attributes).map(node=>[node.name,node.value]).map(([field,value])=>
 [field,field==="weight"?Number(value):value]))
 ,viz:hasViz?
 {shape:getFirstElementByTagNS(e,'viz','shape')?.getAttribute('value')
 ,thickness:Number(getFirstElementByTagNS(e,'viz','thickness')?.getAttribute('value'))
 ,color:[getFirstElementByTagNS(e,'viz','color'),"rgba"].reduce((color,fields)=>color?fields.split("").map(field=>
 color.getAttribute(field)).filter(Boolean).reduce((color,hue,index,{length})=>
 color+(!index?length>3?"a(":"(":",")+hue,"rgb")+")":undefined)
 }:{}
 }));
 links.forEach(({source,target,weight})=>[source,target].map(name=>
 nodes.find(({id})=>id===name)).forEach((node,index,nodes)=>merge(node
,{[index?"source":weight?"relations":"nodes"]
 :new (!index&&weight?Map:Set)(!index&&weight?[[nodes[(index+1)%2],weight]]:[nodes[(index+1)%2]])
 },0)));
 return nodes.map(node=>merge(node,Object.fromEntries(["nodes","source"].map(field=>
 [field,node[field]?Array.from(node[field]):undefined])),1));
 //return {nodes,edges:links,version: version,mode: mode,defaultEdgeType: defaultEdgetype
 //,meta:meta&&{lastmodifieddate:meta.getAttribute('lastmodifieddate'),...Object.fromEntries(Array.from(meta.childNodes).filter(node=>node.nodeName!=="#text").map(child=>[child.tagName.toLowerCase(), child.textContent]))}
 // ,model: attributes
 // };
 function getFirstElementByTagNS(node, ns, tag)
{return node.getElementsByTagName(ns+':'+tag)[0]||
 node.getElementsByTagNameNS(ns,tag)[0]||
 node.getElementsByTagName(tag)[0];
};
};

//  function descend(value,{relations,title,routed})
// {// split data structure into node hierarchy. cyclical references 
//  if(!value)return [];
//  if(array(value))return value;
//  if(string(value))return {[value]:undefined};
//  if(value[relations])return value[relations];
//  if(relations)return [];
//  let flatten=array(value);
//  let children=Object.entries(value);
//  return children.flatMap(([field,value],index,{length})=>
//  flatten||(length==1)
// ?!value||Object.keys(value).length>1
// ?descend(value,{relations,title,routed})
//  // routed records refer to terminal objects, which shouldn't be strings. 
// :(routed&&Object.values(value).every(value=>string(value)||array(value)))
// ?[]:value
// :{[field]:value})
// };

//  function records(resource)
// {// extract matrix definitions as {domain,range,matrix:{[domain]:[...range]}}.
//  if(resource.constructor.name!=="Object")return [];
//  let records=Object.entries(resource).filter(([field,records])=>
//  array(records)&&records.some(record=>
//  array(record)&&record.every(vector=>!isNaN(vector))));
//  if(records.length)
//  return records;
//  if(Object.entries(resource).length==2)
//  // they may also be referential values by title or index 
//  // with uniform "record" keys as {scope,matrix:{path:{in:{scope:{record:[[...fields]]}}}}}.
//  // WARNING binary trees may contain such arrays intended as children, not records. 
//  return Object.entries(resource).map(([field,value])=>[[field],value]).reduce(function trace(matrix,[path,value])
// {if(!compound(value))return matrix;
//  let references=Object.entries(value||[]).map(([field,references])=>
// [field,Object.entries(references||[]).find(({1:record})=>
//  array(record)&&!record.flat().some(field=>!string(field)&&field))||[]
// ]);
//  let records=references.every(({1:{0:field}},index,[{1:{length,0:first}}])=>length&&field===first);
//  if(records)
//  return references.reduce((matrix,[field,{1:record}])=>Object.assign(matrix
// ,{[matrix.length]:[[...path,field],[record]]})
// ,matrix);
//  return Object.entries(value).reduce((matrix,[field,value])=>trace(matrix,[[...path,field],value]),matrix);
// },[]);
//  return records;
// };

//  function relate(node)
// {if(array(node))return node;
//  [node,...node.matrix].reduce((node,[path,records])=>
//  records.reduce((node,vectors,record)=>vectors.reduce((node,vector,field)=>
// {if(!vector||!node)return;
//  let [domain,range]=[0,1].map(index=>node.children[index].leaves());
//  let [source,target]=array(path)?
// [[node,...path].reduce(({children},field)=>children.find(({title})=>title==field))
// ,domain[field]
// ]:[domain,range].map((nodes,index)=>nodes[[field,record][index]]);
//  // clear child node representing these relation records. 
//  let [referral]=Object.entries(source.data[source.title]||{}).find(({1:value})=>value==records[0])||[];
//  if(source.children?.find(({title})=>title==referral)||!source.children?.length)
//  delete source.children;
//  let domains=["stakeholder"];
//  let ranges=["service","provider"];
//  [source,target]=[source,target].sort((source,target)=>
//  // parent title indicates the direction of the relationship. 
//  [source,target].map(({parent:{title}})=>title).reduce((independent,title)=>
//  [ranges,domains][Number(independent)].includes(title),false)-1);
//  [source,target].forEach(node=>merge(node,{occurence:new Set([path])},0));
//  merge(source,{adjacency:{[target.title]:new Set([path])}},0);
//  let relation=source.relations?.get(target);
//  relation=isNaN(vector)?[...relation||[],...[vector].flat()]:((relation||0)+vector)/source.adjacency[target.title].size;
//  merge(source,{relations:new Map([[target,relation]])},0);
//  return node;
// },node),node));
//  return node;
// };

 export var actions=
 {"svg.d3":
 {async contextrestored()
{let options=JSON.parse(this.dataset.options);
 let {default:network}=await import(import.meta.url);
 return compose(options,this,network.bind(this))(options.source);
}}
 ,"g.link":
 {...observe({touch({target})
{target=target.closest(".link");
 target.style.removeProperty("filter");
 target.setAttribute("opacity",target.getAttribute("opacity")<1?1:0.5);
}//,mouseout({target}){target.dispatchEvent(new Event("mouseover",{bubbles:true}));}
 })
 }
 ,"g.node":
 {...observe({touch({target})
{compose
(combine(compose("svg","closest",forage),compose(select,"datum"))
,when(array,has(["x","y"]))
,combine("0",compose
(each(["1",compose
(combine
(infer()
,buffer(differ("source"),drop())
,buffer(differ("nodes"),drop())
,buffer(compose(differ("relations"),"keys",Array.from),drop())
),collect,"flat",collect,slip(Set),Reflect.construct
)
])
,(links,nodes)=>links.each(dim).filter(({source,target})=>[source,target].every(node=>nodes.has(node)))
,infer("each",infer("dispatchEvent",new Event("pointerover",{bubbles:true})))
,links=>new Set(links.data().flatMap(({source,target})=>[source,target]))
))
,(nodes,cluster)=>nodes.each(dim).filter(node=>cluster.has(node)).each(highlight)
)(target.closest(".node"));
}//,pointerout({target}){target.dispatchEvent(new Event("pointerover",{bubbles:true}));}
 ,click:interact
 })
 }
 };

 function dim()
{let mode=this.style.filter?"remove":"set";
 this.style[mode+"Property"]("filter","brightness(0.2)");
};

 function highlight(node)
{this.style.removeProperty("filter");
 let filter="url(#shadow"+(this.getAttribute("filter")==="url(#shadow)"?"_white)":")");
 extend.call(this,{fold:false,filter});
};

 function interact({target})
{target=target.closest(".node");
 if(target.editing)
 return;
 let composer=target.closest("body").querySelector("#composer");
 let node=select(target).datum();
 let source=compose(tether(unfold,"source"),provide,each("name"),collect,"reverse")(node);
 return form.call(composer
,{get:annotate({source:"",gradual:true},{source:""})})
,fill.call(composer,{source:source.length>1?source.slice(1).join("/"):"..",gradual:true})
,composer.dispatchEvent(new Event("submit"));
 //if(!node.parent)return retreat();
 //let simulation=target.closest("svg").simulation.force("link");
 //let linked=simulation.links().length-
 //note(simulation.links(simulation.links().filter(link=>
 //!node.descendants().includes(link.source)||
 //!fuse(link,-1))).links()).length
 //if(linked)return;
 //let links=node.descendants().slice(1).map(target=>(
 //{source:(target[0]||target).parent
 //,target:target[0]||target
 //,value:target[1]||1
 //}));
 //simulation.links(simulation.links().concat(links));
 edit(target);
};

 function update(node,body,root)
{let presence=[node.parent.data[node.parent.title],node.data];
 if(!body)return presence.forEach(place=>place[node.title]=undefined);
 let related=root.descendants().filter(({relations})=>relations);
 let domain=root.children[0];
 let relations=related.map(({relations})=>relations.filter(({target})=>target==node))
 relations=relations.flat().reduce((relations,{source:{title},value})=>Object.assign(relations
,{[title]:!relations[title]?value
:(Array.isArray(relations[title])?relations[title]:[relations[title]]).concat(value)}),{});
 node[domain.title]=domain.leaves().map(({title})=>relations[title]);
 Object.entries(body).forEach(function([key,value])
{if(key==node.title)
 return value?node.data[body.name][value]={roles:[],progress:0}:null;
 note(key,value)
 if(key!="name"||node.data[node.title][key])
 return (value||confirm("delete "+key+"?"))&&
 (node.data[body.name][key]=!value?undefined:
 Array.isArray(node.data[node.title][key])?value.split(","):value);
 if(value==node.title)return;
 value={[value]:node.data[node.title],[node.title]:undefined};
 presence.forEach(data=>Object.assign(data,value));
});
 note(node.data)
};

 export var tests=
 {sprawl:compose.call
({a:{b:"c"}},{name:"a",height:2,depth:0,nodes:[{name:"b",depth:1,height:1,nodes:[{name:"c",depth:2,height:0}]}]},(context,term)=>(
 {context:[context]
 ,terms:[[merge(term,{value:context.a,nodes:[{source:[term],value:context.a.b,nodes:[{source:[term.nodes[0]]}]}]})]]
 ,condition:"deepEqual"
 })
)};
