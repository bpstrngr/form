 import {note,crop,swap,is,buffer,provide,compose,infer,tether,refer,route,record,combine,wether,drop,slip,exit,numeric} from "./Blik_2023_inference.js";
 import {document,hypertext,dispose,throttle,charge,form,transform,insert,expose,activate,namespaces,stylesheet,fill,deselect} from "./Blik_2023_fragment.js";
 import {serialize,proceduralize,coordinates,parse} from "./Blik_2023_meta.js";
 import layout,{fontface} from "./Blik_2023_layout.js";
 import {merge,search} from "./Blik_2023_search.js";
 import {access,resolve,modularise,window,fetch,mime,digest} from "./Blik_2023_interface.js";
 import local from "./Blik_2024_static.js";
 import source from "./Blik_2023_form.js";
 import network from "./Blik_2024_network.js";
 import extend from "./Blik_2023_d4.js";
 import wikipedia from "./Blik_2024_wikipedia.js";
 var {default:svg}=await resolve("./Blik_2020_svg.json");
 var address=new URL(import.meta.url).pathname;

 export default
 {...local,rss,svg,wikipedia
 ,overpass(){return fetch('https://www.overpass-api.de/api/interpreter?'+new URLSearchParams({data:'[out:json];rel[admin_level=2]'/*'convert item ::=::,::geom=geom(),_osm_type=type();'*/+';out geom;'}))}
 // ,google,mongo,economy,asana
 // ,signature:{...store("Blik_2020_signature.json","author")}
 // ,mind:{...store("Blik_2020_mind.json","code",digest)}
 ,document:compose(crop(1),{width:50},merge,infer(refer,"svg"),document)
 ,interface:async function(request)
{if(!request.query)request.query={};
 let {controls,...fields}={source:"get",...request.query};
 let icon={id:"switch",title:"get",...svg.node};
 let input={id:"extend",type:"text",value:"..."};
 let labels={message:"",source:"",layout:"as",title:"of",category:"on",spread:"by",matrix:"from",relations:"with"};
 let control=document({form:
 {id:"composer",method:"get",svg:icon,...form(fields,labels),input,dataset:{labels}
 ,style:{"#text":stylesheet({"#composer":styles.composer})}
 }});
 let body=
 {control
 ,style:{"#text":stylesheet([layout.theme,layout.goo].reduce(merge,Object.fromEntries(["a","blockquote","body","table"].map(tag=>[tag,layout[tag]]))),true)}
 };
 let fragment=compose.call(body,"concept","svg/node/document",[proceduralize(expose)],["./style"],hypertext,0,document);
 await compose(submission.get.bind(control),throttle)(fields).catch(note);
 if(String(controls)==="false")
 control.remove();
 return activate(fragment,actions);
},style:async function()
{let {averia,oswald,ranger}=fontface;
 let font=await stylesheet({"@font-face":[averia,oswald,ranger]});
 return {type:mime("css"),body:font};
},actions()
{return compose.call
({exports,imports},serialize,"\n//# sourceMappingURL=sourcemap","concat","body",refer
,{type:mime("js"),headers:{"SourceMap":"/sourcemap","X-SourceMap":"/sourcemap"}},Object.assign
);
},async sourcemap(request)
{let module="./actions";
 let namespace={["./"+await resolve("path","basename",address)]:[exports,submission,...Object.values(actions)].flatMap(names=>Object.entries(names).map(([field,value])=>is(Function)(value)&&value.name||field))};
 let names=Object.values(namespace).flat();
 let sources=await [Object.keys(namespace),module].flat().reduce(record(source=>compose(fetch.bind(this),"text")(source)),[]);
 let grammars=await Object.entries({...namespace,[module]:names}).reduce(record(function([module,[...names]],index,namespaces)
{// find node with same source text as first name match in source files (names are more likely shadowed in output, but source may still be mistaken). 
 let reference=this.slice(0,namespaces[index+1]?0:index).flatMap(Object.values);
 return compose(buffer(parse,swap(null)),tether(search,({1:value})=>names.includes(value?.id?.name)&&
 [value,reference?.find(node=>node.id.name===value.id.name)].filter(Boolean).map(node=>
 (sources[node===value?index:this.findIndex(grammar=>Object.values(grammar).includes(node))]).slice(node.start,node.end)).reduce((text,reference)=>text===reference)&&
 names.splice(names.indexOf(value.id.name),1),true))(sources[index]);
}),[]);
 let [source,grammar]=[sources,grammars].map(list=>list.pop());
 let locations=grammars.map((nodes,index)=>Object.values(nodes).map(node=>
[coordinates(sources[index],node.id.start)
,coordinates(source,Object.values(grammar).find(({id})=>id.name===node.id.name)?.id.start)
,node.id.name
]).filter(({0:source,1:target})=>
 // filter locations not matched due to transformation. 
 [source,target].flat().every(numeric)));
 let entries=locations.flatMap((locations,source)=>
 locations.map(([[sourceline,sourcecharacter],[line,character],name],index,locations)=>[line,[
 // zero-based character, file, sourceline, sourcecharacter and name index relative to previous value. 
[character-(locations[index-1]?.[1][0]===line?locations[index-1][1][1]:0)
,index?0:source?1:0
,sourceline-(locations[index-1]?.[0][0]??0)
,sourcecharacter-(locations[index-1]?.[0][1]??0)
,[locations[index-1]?.[2],name].filter(Boolean).map(name=>names.indexOf(name)).reduce((past,next)=>next-past)
]]]));
 let vlq='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
 let quantifiers=entries.map(entry=>Object.fromEntries([entry])).reduce((quantifiers,quantifier)=>merge(quantifiers,quantifier,0));
 let mappings=Object.assign(Array(),quantifiers).map(entries=>
 entries.map(entry=>entry.map(quantifier=>
 // https://github.com/Rich-Harris/vlq/blob/master/src/index.js
 [quantifier<0?(-quantifier<<1)|1:quantifier<<1].reduce(function clamp(stack,shifted)
{return (!stack.length||shifted>0)&&(shifted>>>5>0)?clamp([...stack,(shifted&31)|32],shifted>>>5):[...stack,shifted&31];
},[]).map(quantifier=>vlq[quantifier]).join("")).join("")).join(",")).join(";");
 let {origin}=new URL("http"+(request.client.encrypted?"s":"")+"://"+request.headers.host);
 let report=locations.flatMap((locations,index)=>locations.map(([source,target,name])=>name+": "+
[[Object.keys(namespace)[index],source.map(index=>index+1)].flat().join(":")
,[module,target.map(index=>index+1)].flat().join(":")
].map(path=>path.replace(/^\.{0,1}/,origin)).join(" -> "))).join("; \n");
 return {version:3,file:"/actions",sources:Object.keys(namespace),names,mappings,report};
},routes:compose
(crop(1),"get",{spread:"force"},network.bind(null),throttle,{style:"background:#222222"},tether(document)
)};

 var script=compose
(combine(fetch.bind(source),infer()),wether
(compose("status",200,Object.is)
,compose(combine(compose(crop(1),"text"),drop(1,2)),modularise)
,compose(crop(1),"text",Error,exit)
)
);

 async function rss(input)
{let title="ranger";
 let link="https://blikpatrik.net/rss";
 let description="publishing";
 let feed=Object.keys(await this.get(".")).reduce(record(async item=>
{let description=item;
 let pubDate=await compose(access,"birthtime","toString")(item);
 let content=await compose(fetch,"text",input.query.augment?media:infer())(item);
 return ({item:[{description},{pubdate},{content}]})
}),[]);
 let xml=await import("./dylang_2017_xml.js").then(module=>module.default);
 let body=xml(
 {rss:[{channel:[{title},{link},{description},...feed]}]}
,{declaration:true,indent:" "})
 return {status:200,type:"rss+xml",body}
};

 var actions=
 {body:{load,popstate}
 ,"#composer":
 {click:function({target})
{if(target.nodeName.toLowerCase()!=="li")
 return;
 let field=target.closest("label");
 if(!field)return;
 let input=field.querySelector("input");
 input.value=["",target.closest("li")].reduce(function prepend(path,item)
{path=item.childNodes[0].nodeValue+(path?"/"+path:"");
 item=item.parentNode.parentNode;
 return item.nodeName=="LI"?prepend(path,item):path
});
 ["input","blur"].forEach(event=>
 input.dispatchEvent(new Event(event,{bubbles:true}))); 
 input.form.dispatchEvent(new Event("submit"));
},submit:async function submit(event)
{// Important to prevent default to avoid unintended url-encoded requests. 
 // Only get/put submissions should go through, as defined. 
 event.preventDefault();
 let form=event.target;
 let method=form.getAttribute("method");
 let fields=Object.fromEntries(Array.from(form.elements).filter(input=>
 input.parentNode.classList.contains(method)).map(({id,value})=>[id,value]));
 let location=this.ownerDocument.defaultView.location.pathname.split("/").slice(0,-1);
 if(!fields.source)
 fields.source="get";
 submission[method].call(form,fields);
},focusin:function({isTrusted:genuine,target})
{let [form,label]=["form","label"].map(tag=>target.closest(tag));
 if(!target.value)
 form.querySelector("#switch").dispatchEvent(new Event("click"));
 let singular=Array.from(form.elements).filter(input=>input.type=="text");
 if(singular.length>1)
 form.style.setProperty("--scroll","-"+form.scrollLeft);
 if(target.type=="text")
 target.setSelectionRange(...Array(2).fill(target.value.length));
 if(label)
 label.setAttribute("focused",label.getAttribute("focused")!=="true");
},focusout:function({target}){return target.dispatchEvent(new Event("focusin",{bubbles:true}));}
 ,keydown:function({target,keyCode})
{let {enter,updown,leftright}=keyboard(keyCode);
 let list=target.parentNode.querySelector("ul");
 let selection=list?.querySelector("li.hover");
 if(enter)
 return selection?selection.click():this.dispatchEvent(new Event("submit"));
 if(escape)
 return target.dispatchEvent(new Event("blur"));
 if(!list)return;
 if(updown||leftright)
 return [Array.from(list.querySelectorAll("li")),[38,39].includes(keyCode)||-1].reduce((list,step)=>
 list.at((list.indexOf(selection)+step)%list.length)?.classList.toggle('hover'));
},input:function({isTrusted:genuine,target})
{let form=target.closest("form");
 if(target.id==="message"&&target.value)
 form.dispatchEvent(new MessageEvent("message",{data:{type:"signal",room:"room"},bubbles:true}));
 let label=target.closest("label");
 let prefix=Array.from(label?.childNodes||[]).find(({nodeName})=>!["span","svg"].includes(nodeName.toLowerCase()));
 let sample=window.document.body.appendChild(document({span:
 {span:[{"#text":prefix?.textContent||""},{"#text":target.value}]
 ,style:"position:absolute;font-family:averia;top:0;font-size:"+window.getComputedStyle(target).fontSize+";max-width:100vw;visibility:hidden;"
 }}));
 compose
(wait(300),each(infer(({style},sample,index)=>
 style.width=Math[index?"max":"abs"](sample.childNodes[index].getBoundingClientRect().width+5,30)
,sample)),drop(),sample,"remove"
)(prefix,target);
 Array.from(target.parentNode.querySelectorAll("li")).map(li=>
[li,target.value&&!unfold.call(li,li=>li.parentNode.closest("li")).map(li=>
 li.firstChild?.nodeValue||"").join("/").includes(target.value)?"setProperty":"removeProperty"
]).forEach(([li,term])=>li.style[term]("display","none"));
 if(genuine)
 this.closest("form").querySelector("#switch").dispatchEvent(new Event("click"));
},change:function({target})
{target.dispatchEvent(new Event("input"));
 if(target.type!=="text")
 return target.form.dispatchEvent(new target.ownerDocument.defaultView.Event("submit"));
}}
 ,"#switch":{click:intend}
 ,"#extend":{keydown:add}
 ,".field":{click({target}){form.call(target.closest("form"),{extend:{key:"",value:""}})}}
 ,".carousel":{scroll}
 ,".defer":{load:defer}
 ,".reference":{click:expand}
 ,".editor":{submit:modify,keydown:write}
 ,"g.network":
 {mouseover:function({target})
{target=target.closest(".link");
 target.style.removeProperty("filter");
 target.setAttribute("opacity",target.getAttribute("opacity")<1?1:0.5);
},mouseout:function({target}){target.dispatchEvent(new Event("mouseover",{bubbles:true}));}
 }
 ,"g.cluster":
 {pointerover:function({target})
{target=target.closest(".node");
 compose
(combine(compose("svg","closest",forage),compose(d3.select,"datum"))
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
,infer("each",infer("dispatchEvent",new Event("mouseover",{bubbles:true})))
,links=>new Set(links.data().flatMap(({source,target})=>[source,target]))
))
,(nodes,cluster)=>nodes.each(dim).filter(node=>cluster.has(node)).each(highlight)
)(target);
},pointerout:function({target}){target.dispatchEvent(new Event("pointerover",{bubbles:true}));}
 ,click:interact
 }
 };

 var styles=
 {composer:
 {"--form":"6em",position:"fixed"
 ,bottom:"0px",left:"0px","max-width":"calc(100% - 20px)"
 ,margin:0,"padding-right":"1.5em",overflow:"scroll"
 ,"box-sizing":"border-box"
 ,"font-family":"averia","vertical-align":"middle","white-space":"nowrap"
 ,transition:"all var(--transition)"
 ,"&:not(:hover)":
 {[Object.entries({room:"message",get:"source"}).map(([method,primary])=>
 "&[method="+method+"]>label:not([for="+primary+"])").join()]:{width:0,display:"none"}
 ,"&>input#extend":{width:0,display:"none"}
 }
 ,...Object.fromEntries(["get","sign","send","room"].map(method=>["&[method="+method+"] label:not(."+method+")",{display:"none"}]))
 ,"&[method=get],&[method=sign]":{"&>svg":{padding:0,width:"5em",height:"5em"}}
 ,"&[method=erase]":{"&>svg>path":{transform:"rotate(45deg)","transform-origin":"center center"}}
 ,"&>svg":
 {height:"3em",width:"3em",cursor:"pointer",fill:"var(--isle)","vertical-align":"middle","background-color":"black"
 ,"clip-path":"circle(50%)",padding:"1em",transform:"scale(0.8)",position:"sticky",left:0
 }
 ,"font-size":"var(--size)"
 ,"& label":
 {position:"relative",display:"inline-block","white-space":"nowrap","vertical-align":"middle",cursor:"pointer"
 ,"&:hover":{"&>svg":layout.glow,"&>input":{"text-shadow":"white 0px 0px 2px,white 0px 0px 2px",transition:"all 0.3s"}}
 ,"&>svg":{float:"left",height:"1em","vertical-align":"middle",cursor:"pointer",overflow:"visible"}
 ,"&>span":{float:"left","&:not(:empty):after":{content:":"}}
 ,"&>ul":
 {position:"fixed","margin-left":"0.6em","max-height":"100%","max-width":"100%","padding-top":"var(--form)",bottom:"var(--form)","box-sizing":"border-box",width:"inherit","overflow":"scroll"//"background-image":"radial-gradient(at center bottom, rgb(17, 17, 17) 0%, rgba(33, 33, 33, 0) 100%)"
 ,"&>li":{display:"block"}
 ,"&:hover":{display:"block"}
 }
 ,"& ul":
 {display:"none","z-index":"2",padding:"0px","margin-bottom":"0px","text-align":"left","pointer-events":"none","list-style-type":"none"
 ,"& ul":{position:"relative",bottom:"initial","max-height":"initial","vertical-align":"top","text-align":"left"}
 ,"& li":
 {position:"relative",display:"inline-block","pointer-events":"all","padding-right":"1em",color:"var(--text)","vertical-align":"top",margin:"auto",left:"0px",right:"0px","white-space":"pre","padding-left":"1em"
 ,"&:hover,&.hover":
 {color:"var(--highlight)"
 ,"& ul":
 {display:"inline-block","white-space":"pre"
 ,"&:hover>li":{display:"block"}
 }
 }
 ,"&>svg":{position:"absolute",height:"1em",left:"0px","margin-left":"0px","margin-right":"0px",transform:"scale(0.9)",fill:"var(--text)"}
 }
 }
 ,"&[focused=true]>ul":{display:"block"}
 ,"&[for=message],&[for=source]":{"&>ul":
 {"text-align":"left",width:"auto","&>li":{"text-shadow":"black 0px 0px 10px","white-space":"nowrap","&>span":{"white-space":"normal"}}
 ,"background-image":"linear-gradient(to right, rgb(17, 17, 17) 0%, rgba(33, 33, 33, 0) 100%)"
 }}
 ,"&[for=message]>ul":
 {display:"block","margin-left":"-5em","max-height":"50vh","min-width":"150px"
 ,"&>li":
 {opacity:0,animation:"fadeout 6s","padding-left":0,"min-height":"4em","white-space":"normal"
 ,"&>img":{...layout.material,margin:"1em",height:"2em",float:"left","border-radius":"50%","background-color":"var(--isle)",padding:".5em",margin:".5em .5em 0 .5em"}
 ,"&>div":{color:"var(--isle)"}
 }
 ,"&>li:not(:last-of-type)":{animation:"fadeout 2s"}
 ,"&>span":{position:"fixed",bottom:"1.5em",left:"5.5em",color:"black"}
 ,"&:hover>li":{opacity:1,animation:"fadein 1s"}
 }
 ,"&:not(:last-of-type):after":{content:","}
 ,"&[for=message]>span":{position:"absolute",left:"-0.5em",top:"-1.5em",color:"black"}
 }
 ,"&:hover label[for=message]>ul>li":{opacity:1,animation:"fadein 1s"}
 ,"& input":
 {height:"1em",transition:"all var(--transition)","text-shadow":"inherit"
 ,"&:focus+ul":{display:"block"}
 ,"&[type=text]":
 {outline:"none","background-color":"transparent",border:"none",width:"20px","box-sizing":"border-box"
 ,color:"inherit","text-align":"center","font-family":"inherit","font-size":"inherit"
 ,"&#code":{"-webkit-text-security":"disc"}
 }
 ,"&[type=radio]":{display:"none"}
 ,"&[type=checkbox]":
 {appearance:"none","font-family":"inherit",cursor:"pointer",width:"auto"
 ,"&:hover":{"text-shadow":"rgb(255,255,255) 0px 0px 10px,rgb(255,255,255) 0px 0px 10px,rgb(255,255,255) 0px 0px 10px"}
 ,"&:after":{content:"' ?'","margin-left":"3px","margin-right":"3px"}
 ,"&:focus:after":{"text-shadow":"rgb(255,255,255) 0px 0px 10px, rgb(255,255,255) 0px 0px 10px, rgb(255,255,255) 0px 0px 10px"}
 ,"&:checked:after":{content:"'✓'",color:"var(--highlight)"}
 }
 ,"&~svg":{"margin-right":"0.5em"}
 }
 ,...layout.pill,...layout.material
 }
 };

 export function path(name){return (window.location.pathname+(name||"")).replace(/^\/*|\/*$/g,"");}

 async function load(event)
{if(this.document===event.target)
 this.dispatchEvent(new Event("popstate"));
};

 function popstate(event)
{this.document.forms[0]?.dispatchEvent(new Event("submit"));
};

 function add({target,keyCode})
{arguments[0].stopPropagation();
 let {enter}=keyboard(keyCode);
 if(!enter)return;
 let {value}=target;
 if(Array.from(value).every(is(".")))
 return;
 let form=this.closest("form");
 let method=form.getAttribute("method");
 fragment.form.call(form,{[method]:{[target.value]:""}});
 target.value="...";
};

 async function intend({isTrusted:genuine,target})
{let form=this.closest("form");
 let method=form.getAttribute("method");
 let focused=this.ownerDocument.activeElement;
 let fields=fragment.fill.call(form);
 let empty=method==="get"&&Object.entries(fields).find(([name,value],index)=>
 !value&&name&&index&&name===focused.id);
 let {source,message,name,code}=fields;
 if(method==="send"&&message&&genuine)
 return form.dispatchEvent(new Event("submit",{bubbles:true}));
 let intent=
 {room:code?"sign":message?"send":genuine?"get":undefined
 ,send:!message&&"room",sign:!code&&"room",author:"room"
 ,erase:!empty&&"get",put:"get",get:genuine?"room":empty?"erase":undefined
 }[method];
 if(!intent)return;
 let action={sign:"author"}[intent]||path();
 document.call(form,{method:intent,action});
 let icon={get:"node",put:"plus",erase:"plus",sign:"fingerprint",room:"chat",send:"paperplane"}[intent];
 this.parentNode.replaceChild(document({svg:{...svg[icon],title:intent,id:"switch"}}),this);
 fields=
 {room:{message:method==="send"?null:[],code:identity()?undefined:""}
 ,send:{message:null}
 ,sign:{name:message,code:code}
 ,code:intent==="put"||{[code?"name":"message"]:form[code?"message":"name"].value}
 }[intent]||{};
 fragment.form.call(form,{[intent]:fields});
 Array.from(form.elements).forEach(input=>input.dispatchEvent(new Event("input")));
 form.elements[focused.id]?.focus();
 if(intent==="room")
 this.dispatchEvent(new MessageEvent("message",{data:{type:"join",room:form.source.value},bubbles:true}));
 activate(form,"./actions");
};

 export var submission={get,put,erase,send,sign:put};

 function get(fields)
{let id=deselect(fields.source||"get");
 let incumbent=this.ownerDocument.querySelector("#"+id)||undefined;
 let query=new URLSearchParams(fields).toString();
 let route=[window.location.pathname,query].filter(Boolean).join("?");
 if(this)
 this.ownerDocument.defaultView.history.pushState({},null,route);
 let fragment=compose
(fetch.bind(globalThis.window||source),digest
,{incumbent,...fields},transform.bind(this),actions,activate
)(fields.source);
 let frame=this?.ownerDocument.defaultView.frame||
 infer(insert,"before",this)(document(
 {center:{id:"frame",style:{"#text":stylesheet({"#frame":layout.frame})}}
 }));
 return insert(fragment,incumbent?"over":"under",incumbent||frame);
};

 async function put(action)
{let signature=identity();
 // manage these with previous events!
[signature?{source:this.labels.message}:{source:this.source.value,code:this.code.value}
,["action",action=signature?"/"+signature[0].replace("=","/"):"mind/"+fields.source]
,["method",method=signature?"erase":"put"]
].forEach((fields,index)=>index
?this.setAttribute(...fields)
:form.call(this,{[method]:fields}));
 let request={method,...{put:{body:JSON.stringify(fields),headers:{"Content-Type":"application/json"}}}[method]};
 let [status,message]=await fetch(action,note(request)).then(response=>
 Promise.all([response.status,response.text()]));
 this.dispatchEvent(new MessageEvent("message",{data:{author:{name:"system",face:"svg/deer"},message},bubbles:true}));
 this.querySelector("#switch").dispatchEvent(new Event("click"));
 if(status!=200)return;
 if(method=="erase"&&this.action.startsWith("/signature"))
 note(window.document.cookie=this.action.substring(1).replace("/","=")+";path=/;expires="+new Date().toUTCString()+";")&&
 this.dispatchEvent(new MessageEvent("message",{data:{type:"leave",room:"room"},bubbles:true}))&&
 this.querySelector("#switch").dispatchEvent(new Event("click"));
 // update custom graphs...
 return this.dispatchEvent(new Event("submit"));
 let nodes=window.frame.childNodes[0].simulation.nodes;
 this.method=="put"
?note(nodes().splice(findIndex(({title})=>title==fields.source),1,conceive(node).concept))
:nodes(nodes().concat(conceive(node).concept));
 let simulation=window.object.childNodes[0].simulation;
 simulation.nodes(simulation.nodes().filter(node=>node.title!=this.source.value));
 simulation.force("link").links(simulation.force("link").links().filter(({source,target})=>![source.title,target.title].includes(this.source.value)))
};

 function erase()
{let method=this.getAttribute("method");
 let input=this.ownerDocument.activeElement;
 if(input.nodeName.toLowerCase()!=="input"||input.value)
 return console.error("erasure called on non-empty field:",input);
 input.closest("label").remove();
 this.dispatchEvent(new Event("switch"));
};

 function send({message})
{if(!message)return;
 this.dispatchEvent(new MessageEvent("message",{data:{room:this.source.value,message},bubbles:true}));
 this.message.value="";
 this.querySelector("#switch").dispatchEvent(new Event("click"));
};

 function scroll({target})
{let timeout=target.timeout=setTimeout(tick=>
{if(target.timeout!==timeout)return;
 delete target.timeout;
 let to=
[target.scrollLeft,target.getBoundingClientRect().width
].reduce((offset,width)=>Math.round(offset/width)*width);
 let duration=500;
 !function animateScroll(start,change,time,increment)
{time+=increment;
 time/=span/2;
 if(time<1) 
 target.scrollLeft=delta/2*time*time+start;
 else
 target.scrollLeft=-delta/2*(--time*(time-2)-1)+start;
 if(currentTime<duration)
 setTimeout(tick=>animateScroll(start,change,currentTime,increment),increment);
}(target.scrollLeft,to-target.scrollLeft,0,20);
},100)
};

 function defer({path:[target]})
{if(target.dataset.subject)
 compose(combine(compose("source",fetch,digest),infer()),transform,"over",target,insert)(JSON.parse(target.dataset.subject));
};

 function dim(){if(!this.style.filter)this.style.filter="brightness(0.2)";else this.style.removeProperty("filter");};

 function highlight(node)
{this.style.removeProperty("filter");
 let filter="url(#shadow"+(this.getAttribute("filter")==="url(#shadow)"?"_white)":")");
 extend.call(this,{fold:false,filter});
};

 function interact({target})
{target=target.closest(".node");
 if(target.editing)
 return;
 let form=target.closest("body").querySelector("#composer");
 let node=d3.select(target).datum();
 let source=trace(node,[]);
 if(source[0]=="get")
 return form.call(form,{get:path.slice(1).join("/"),gradual:true});
 if(!node.parent)return retreat();
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

 function modify(event)
{event.preventDefault();
 let record=Object.fromEntries(Object.values(form.elements).map(({id,value})=>[id,value]));
 for(let [key,value] of Object.entries(record))
 if(form.inputs[key]==Date)
 record[key]=Number(new Date(value));
 if(record.key)
 Object.assign(record,{[record.key]:record.value})&&
 delete record.key&&delete record.value;
 let svg=fragment.querySelector("svg");
 let blank=!record.name&&confirm("delete "+node.title+"?");
 let match=blank?d3.select()
:d3.select(svg).selectAll("g.node").select(function(other){return other!=node&&(other.parent==node.parent)&&(other.title==record.name)&&this});
 let progress=node.data[node.title].progress;
 progress=!progress||[record.progress,progress].map(Number).reduce((was,is)=>was-is);
 if(match.size()||isNaN(progress))
 return [form[isNaN(progress)?"progress":"name"],...match.nodes()].forEach(node=>node.style.animation="pulse 2s");
 let root=[svg.simulation.nodes()[0],0].reduce(function root(node){return node.parent?root(node.parent):node});
 update(node,blank?undefined:record,root);
 let room=fragment.getAttribute("title");
 let body=root.data;
 let report={join:room,put:[]};
 report.put.push({room,body})
 if(progress)
 report.put.push(
 {room:room.replace(/\.json$/,"_log.json"),append:true,body:
 {[Date.now()]:root.children[1].leaves().map(task=>
 task.data[task.title]).filter(Boolean).reduce((progress,task)=>
 progress+Number(task.progress||0)/100,0)
 }
 });
 Object.entries(report).forEach(([emit,body])=>
 (Array.isArray(body)?body:[body]).forEach(body=>
 window.composer.room.emit(emit,body)));
 this.escape();
 //Object.entries({join:this.closest("div").title,put:{room,body}}).forEach(entry=>window.subject.room.emit(...entry));
};

 function write({keyCode})
{if(keyCode!=27)return;
 let label=target.parentNode.querySelector("text.label");
 label.style.display="block";
 delete node.selected;
 this.remove();
};

 function expand(event)
{let {source,title}=demarkup(this,["source","title"]);
 source===title
?insert(this.ownerDocument.createTextNode(source.replace(/_/g,' ')),"under",this).parentNode.removeAttribute('source')
:compose.call(insert(compose(this.getAttribute("src"),fetch,digest,{source:this.getAttribute("src")},transform),"under",this),"parentNode",infer("setAttribute","source",title));
};

 function edit(target)
{let label=target.querySelector("text.label");
 let form=target.querySelector("form");
 label.style.display=form?"block":"none";
 let node=d3.select(target).datum();
 if(form)return delete node.selected&&form.remove();
 node.selected=true;
 let {x,width,y,height}=target.querySelector("circle").getBoundingClientRect();
 form=target.appendChild(document(
 {foreignObject:
 {requiredExtensions:"http://example.com/SVGExtensions/EmbeddedXHTML"
 ,height,width:"400px"
 ,body:{xmlns:namespaces.xhtml
 ,form:
 {class:"editor"
 ,title:node.title
 ,"data-inputs":JSON.stringify({source:"string",start:"date",end:"date"})
 }     }
 }
 },namespaces.svg,actions).next().value).querySelector("form");
 let record=Object.entries(node.data[node.title]);
 record=record.filter(([key,value])=>typeof value=="string"||form.dataset.inputs[key]);
 record.unshift(["source",node.title]);
 note(form)
 form.call(form,{[node.title]:Object.fromEntries(record)});
 form.appendChild(document({span:{class:"field","#text":"+",style:"cursor:pointer"}}).next().value);
 form.source.focus()
 window.room.on("put",function({body,room})
{window.Tone.Transport.start();
 if(fragment.getAttribute("title")==room)
 network(sprawl(body),{fragment,still:true,spread:"left",cluster:true});
 else actions.get({name:room},window.document.querySelector("div[title$='"+room+"']"))
});
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

 function identity(full)
{let signature=window.document.cookie.match(/signature=[^;]+/);
 if(!signature)return;
 signature="/"+signature[0].replace("=","/");
 if(!full)return signature;
 let author=compose(fetch,when(compose("status",is(200))),"json","author");
 return compose(signature,author,"body",refer,{method:"put"},merge,slip(signature),author);
};

 var {exports,imports}=
 {exports:{default:actions,submission,path,edit,update,highlight,dim,identity}
 ,imports:
 {"./Blik_2023_interface.js":["","resolve","digest"]
 ,"./Blik_2023_search.js":["","merge","unfold","search","prune"]
 ,"./Blik_2023_inference.js":";note;compose;combine;pass;route;trace;drop;crop;slip;infer;tether;wait;observe;refer;buffer;swap;when;array;has;each;differ;provide;collect;is".split(";")
 ,"./Blik_2023_fragment.js":";* as fragment;document;form;demarkup;insert;navigate;activate;metamarkup;transform;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard".split(";")
 ,"./Blik_2024_network.js":["","forage"]
 ,"./Blik_2023_d4.js":"extend"
 ,"./Blik_2020_svg.json":"svg"
 ,"./actions":"actions"
 ,"./Bostock_2011_d3.js":"* as d3"
 }
 };
