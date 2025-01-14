 import {color} from "./Blik_2023_layout.js";
 import {extreme,extract,cluster,prune} from "./Blik_2023_search.js";
 import {note,infer,buffer,exit,compose,tether,defined,string,numeric,when,major,wait,pass,observe,slip} from "./Blik_2023_inference.js";
 import extend from './Blik_2023_d4.js';
 import {resolve,window,fetch,digest} from "./Blik_2023_interface.js";
 import {document,css,capture,ascend,keyboard} from "./Blik_2023_fragment.js";
 import * as vectors from "./Blik_2024_svg.js";
 var location=new URL(import.meta.url).pathname;

 export function plot(record,{domain,range}={})
{if(string(record))return compose(fetch,digest,infer(plot,{domain,range}))(record);
 record=cluster(record);
 if(string(domain))domain=JSON.parse(domain);
 if(string(range))range=JSON.parse(range);
 if([domain,range].some(Boolean))
 record=Object.fromEntries(Object.entries(record).filter(entry=>
 [domain||[],range||[]].every((extreme,index)=>extreme.every((extreme,pole)=>
 [extreme,entry[index]].sort(extreme=>pole&&-1).reduce((past,next)=>past<=next)))));
 record[Number(extreme(Object.keys(record))[0])-1]=0;
 let [width,height]=[Object.keys(record).length*50,extreme(Object.values(record))[1]*2];
 let [min,max]=extreme(Object.keys(record));
 let {1:peak}=extreme(Object.values(record));
 let [x,y]=[[min,max],[peak,-10]].map((domain,index)=>
 d3['scale'+(index?'Linear':'Linear')](domain,[0,[width,height][index]]));
 return compose.call({svg:{}},document
,{update:true,datum:{record,x,y}
 ,viewBox({record}){return [-50,-30,width+90,height+50];}
 ,g:
 {class:"chart",update:true
 ,path:
[{class:"line",update:true
 ,fill:"none",stroke:"currentColor"
 ,"stroke-width":2
 ,d({record,x,y})
{let line=d3.line().x(({0:field})=>x(Number(field))).y(({1:value})=>y(value)).curve(d3.curveCatmullRom);
 return line(Object.entries(record));
}}
],g:
[{class:"label"
 ,fold:({x,y,record})=>Object.entries(record).map(([field,value])=>({x:x(field),y:y(value),value}))
 ,circle:
 {r:12,fill:"#ffb300",cx:({x})=>x,cy:({y})=>y
 }
 ,text:
 {fill:"black",x:({x})=>x,y:({y})=>y,text:({value})=>value,"text-anchor":"middle","text-size":5,dy:6
 }
 }
,{class:"x axis",transform:"translate(0,"+height+")",call:axis=>d3.axisBottom(axis.datum().x)(axis),each(){this.firstChild.remove();this.querySelectorAll("text").forEach(n=>n.textContent=n.textContent.replace(",",""));this.querySelectorAll("line").forEach(n=>n.remove())}}
//,{class:"y axis",call:axis=>d3.axisLeft(axis.datum().y)(axis)}
]}
 },tether(extend));
};

 export async function matrix(records,range,domain=1)
{if(string(records))
 records=await compose(note,fetch,digest,note)(records);
 if(records.nodeName)
 return infer
(matrix=>({[matrix.id]:Object.fromEntries(Array.from(matrix.querySelectorAll(".record")).slice(0,-1).map(record))})
)(records.closest(".matrix"));
 if(Array.isArray(Object.values(Object.values(records)[0])[0]))
 domain=1;
 if(domain)
 [[domain,records]]=Object.entries(records);
 records=Object.entries(records).map((record,index)=>record.flat());
 let [top,side]=[records.slice(1).map(([{length}])=>length),records[0].slice(1).map(({length})=>length)].map(range=>Math.max(...range));
 let span=[records,[records[0]]].flat().map(record);
 let style=css({".matrix":
 {display:"inline-block",margin:top+"em "+side+"em"
 ,"&>span.record":
 {display:"table-row",height:"1em"
 ,"&>span":
 {display:"table-cell","white-space":"nowrap","vertical-align":"middle"
 ,"&:first-of-type":{"text-align":"right"}
 ,"&:last-of-type":{"text-align":"left"}
 ,"&>span":{display:"block",outline:"none",width:"1.5em",height:"1.5em","text-align":"center",cursor:"pointer","&:empty:not(:focus):after":{content:"'+'","font-size":"2em","line-height":".75em","font-weight":"800",opacity:0.5}}
 }
 ,"&:not(:first-of-type):not(:last-of-type)>span:not(:first-of-type):not(:last-of-type)>span":{"font-size":"1.5em","caret-color":"transparent",cursor:"crosshair"}
 ,"&:not(:first-of-type)>span:first-of-type>span":{direction:"rtl","transform":"translate(1.25em,1em) rotate(-45deg)","transform-origin":"right",height:"2em"}
 ,"&:not(:last-of-type)>span:last-of-type>span":{"transform":"translate(-.25em,-1em) rotate(-45deg)","transform-origin":"left",opacity:0.5}
 ,"&:first-of-type>span:not(:last-of-type)>span":{direction:"rtl","transform":"translate(-1em,-.5em) rotate(45deg)","transform-origin":"left",width:"2em"}
 ,"&:last-of-type>span:not(:first-of-type)>span":{"transform":"translate(1.25em,-.25em) rotate(45deg)","transform-origin":"right",opacity:0.5}
 }
 }});
 let actions=!globalThis.window?"/"+(await resolve("path","relative",".",location)):location;
 return capture.call(document({span:{class:"matrix",id:domain,style:{"#text":style},span,dataset:{source:string(arguments[0])?arguments[0]:""}}}),actions+"/actions");
};

 function record(record,index,records)
{if(record.nodeName)
 return Array.from(record.childNodes).flatMap((node,field,fields)=>
 [record.dataset.source,fields.splice(0).slice(1,-1).map(node=>node.textContent)]);
 let length=Math.max(...records.map(({length})=>length));
 let span=Object.assign
(Array.from({length},field=>0),record
,(!index||!records[index+1])&&[""]
,{[length]:index&&records[index+1]?record[0]:""}
).map((text,field,fields)=>(
 {span:{"#text":String(text??""),contenteditable:true}
 //!index||!defined(records[index+1])||!field||!defined(fields[field+1])
 }));
 return {span,dataset:{source:record[0]},class:"record"};
};

 export var actions=
 {".matrix":
 {async click({target,detail})
{let {nodeValue:value}=target.firstChild||{};
 let records=Array.from(this.querySelectorAll(".record"))
 if(value&&!isNaN(value)&&records.indexOf(target.closest(".record")))
 return detail<2&&await wait(300)()
,target.textContent===value?target.textContent=Number(value)+(detail>1?-1:1):0
,target.dispatchEvent(new KeyboardEvent("keydown",{keyCode:keyboard("enter"),bubbles:true}))
 buffer(compose
(combine(infer(),compose(marks=>marks.indexOf(value)+1,when(major(0)),index=>index%2))
,Reflect.get,mark=>target.textContent=mark
))(Array.from("✓✗"));
},async input({target})
{let [record,field]=ascend.call(target,".record");
 let fields=Array.from(record.childNodes);
 let records=Array.from(record.parentNode.querySelectorAll(".record"));
 let index=fields.indexOf(field);
 let domain=records.indexOf(record);
 let internal=[[domain,records],[index,fields]].map(([index,range])=>
 [-1,1].every(next=>range[index+next]));
 let vertical=(!records[domain-1]&&field.nextSibling)||(!records[domain+1]&&index);
 let mirror=vertical
?records.at(records[domain+1]?-1:0).childNodes[field.nextSibling?index||fields.length-1:0]
:Array.from(records.at(!records[domain-1]||!records[domain+1]?domain?0:-1:domain).childNodes).at(field.nextSibling?-1:0);
 let value=target.textContent;
 if(!internal.every(Boolean))
 mirror.firstChild.textContent=value;
 if(!internal.some(Boolean))return;
 await wait(3000)();
 if(target.textContent!==value)
 return;
 target.dispatchEvent(new KeyboardEvent("keydown",{keyCode:keyboard("enter"),bubbles:true}))
},keydown({target,keyCode,isTrusted})
{let {enter,backspace}=keyboard(keyCode);
 if(!enter&&!backspace)
 return;
 if(enter)
 arguments[0].preventDefault();
 let [past,record,field]=ascend.call(target,".matrix");
 let fields=Array.from(record.childNodes);
 let records=Array.from(record.parentNode.querySelectorAll(".record"));
 let index=fields.indexOf(field);
 let domain=records.indexOf(record);
 let [horizontal,vertical]=[[domain,records],[index,fields]].map(([index,range])=>
 [-1,1].every(next=>range[index+next]));
 if(horizontal&&vertical&&isTrusted)
 return target.dispatchEvent(new MouseEvent("click",{detail:backspace?2:1,bubbles:true}));
 if(backspace)
 return;
 let internal=horizontal||vertical;
 let value=target.textContent;
 if(internal&&!value&&(!isTrusted||!["y","yes"].includes(prompt("remove "+value+"? (yes)")?.toLowerCase())))
 return value;
 let change={[past.id]:horizontal&&vertical
?{[record.dataset.source]:{[index-1]:value}}
:!internal
?(!records[domain-1]&&!fields[index-1])||(!records[domain+1]&&!fields[index+1])?{[records[0].dataset.source]:[value]}:{[value]:[]}
:horizontal?{[record.dataset.source]:null,...value&&{[value]:fields.slice(1,-1).map(({textContent})=>textContent)}}:value
?{[records[0].dataset.source]:{[index-1]:value}}
:Object.fromEntries(records.map(({dataset})=>[dataset.source,{[index-1]:null}]))};
 note(horizontal,vertical,change)
 return buffer(compose
({method:"put",body:JSON.stringify(note(change))},fetch
,when(compose("status",is(200))),"json"
,pass(message=>this.dispatchEvent(new MessageEvent("message",{data:{action:"broadcast",message,room:past.dataset.source+"/"},bubbles:true})))
,horizontal&&vertical?exit:undefined,0,1,matrix
,{style:past.getAttribute("style"),dataset:{source:past.dataset.source}},merge
,slip(past),note,"replaceWith"
),note)(past.dataset.source+"?override="+internal);
}}
 ,".record":observe({hover({target,srcElement,isTrusted:hover})
{let [record,field]=ascend.call(target,".record");
 let internal=["next","previous"].every(next=>[record,field].every(node=>node[next+"Sibling"]));
 if(!internal||!record.previousSibling.classList.contains("record"))return;
 let index=Array.from(record.childNodes).indexOf(field);
 Array.from(record.parentNode.querySelectorAll(".record")).flatMap((first,index,records)=>
 [first,record,records.splice(0).at(-1)]).flatMap((fields,record)=>
 [fields.childNodes[index],...record%2?[fields.firstChild,fields.lastChild]:[]]).forEach(node=>
 node.style.textShadow=hover?"white 0px 0px 2px,white 0px 0px 2px":"none");
}})
 };

 function set(matrix,[name,term],depth)
{note(...arguments)
 return prune.call(matrix,([field,value],path)=>
 path.length===depth&&field==name?term:value
,0,depth);
};
