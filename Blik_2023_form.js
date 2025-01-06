 import {note,crop,swap,is,buffer,provide,compound,collect,same,pass,compose,each,infer,tether,route,record,combine,string,wether,drop,slip,exit,numeric,match,when,has,basic,ascend,fields as inheritance,observe} from "./Blik_2023_inference.js";
 import {document,hypertext,dispose,throttle,capture,form,progress,insert,expose,activate,namespaces,css,fill,annotate,deselect,expand,spell,syndicate,article,demarkup,media,stylerules} from "./Blik_2023_fragment.js";
 import {serialize,proceduralize,parse,mime} from "./Blik_2023_meta.js";
 import layout,{fontface,animation} from "./Blik_2023_layout.js";
 import {merge,search,extract,encrypt} from "./Blik_2023_search.js";
 import {access,resolve,locate,window,sourcemap,fetch,digest,cookie,cookies,script,query,path,scope as modules,module,stage} from "./Blik_2023_interface.js";
 import routes from "./Blik_2023_form.js";
 import network from "./Blik_2024_network.js";
 import editor from "./Blik_2024_script.js";
 import extend from "./Blik_2023_d4.js";
 import wikipedia from "./Blik_2024_wikipedia.js";
 import * as svg from "./Blik_2024_svg.js";
 import local,{persistence,encryption,publish,published,classify,classified,permit} from "./Blik_2024_static.js";
 export {encryption,classify,classified,published,permit};
 export var syndication={rss2json:{key:undefined}};
 var address=new URL(import.meta.url).pathname;
 await publish("./Blik_2024_comments.json",/.*\/author.*[^\/]$/);

 export default
 {...local,wikipedia,modules
 ,svg(){return svg;}
 ,overpass(){return fetch('https://www.overpass-api.de/api/interpreter?'+new URLSearchParams({data:'[out:json];rel[admin_level=2]'/*'convert item ::=::,::geom=geom(),_osm_type=type();'*/+';out geom;'}))}
 ,author:persistence("Blik_2024_author.json")
 ,document:compose(crop(1),{width:50},merge,infer(record,["svg"]),document)
 ,media:compose(crop(1),"toString",media,collect,document)
 ,interface:async function(request)
{let queries=query(request.url);
 let fragment=numeric(this.put)?"fragment/feed":basic(this)?"network":"fragment/media";
 let {controls,...fields}={source:"",fragment,...queries};
 let composer=document({form:
 {id:"composer",style:{"#text":css({"form#composer":
 {position:"fixed","z-index":100,bottom:"0px",left:"0px",margin:0,"padding-right":"1.5em",overflow:"scroll","box-sizing":"border-box","max-width":"calc(100% - 20px)"
 ,background:"var(--isle)","vertical-align":"middle","white-space":"nowrap"
 ,"font-family":"averia","font-size":"var(--size)",transition:"all var(--transition)"
 ,"&:not(:hover)":
 {[Object.entries({send:"message",get:"source"}).map(([method,primary])=>
 "&[method="+method+"]>label:not([for="+primary+"])").join()]:{width:0,display:"none"}
 ,"&>span[role=textbox]#extend":{width:0,display:"none"}
 }
 ,"& label":[layout.form.label,layout.form.dropup,{"&>span:not([role=textbox])":{height:"3em","margin-top":"1.5em"}}].reduce(merge)
 ,"& label[for=message]":
 {"&>span.status":{position:"absolute",left:"-0.5em",top:"-1.5em",color:"black"}
 ,"&,& label[for=source]":
 {"&>ul":
 {"text-align":"left","margin-left":"-1.8em",width:"auto","&>li":{"text-shadow":"black 0px 0px 10px","white-space":"nowrap","&>span":{"white-space":"normal"}}
 //,"background-image":"linear-gradient(to right, rgb(17, 17, 17) 0%, rgba(33, 33, 33, 0) 100%)"
 }
 }
 ,"&>ul":
 {display:"block","margin-left":"-5em","max-height":"50vh","min-width":"150px"
 ,"&>li":
 {...animation.fade.out,opacity:0,animation:"fadeout 6s","padding-left":0,"min-height":"4em","white-space":"normal"
 ,...layout.message
 }
 ,"&>li:not(:last-of-type)":{animation:"fadeout 2s"}
 ,"&>span":{position:"fixed",bottom:"1.5em",left:"5.5em",color:"black"}
 ,"&:hover>li":{opacity:1,animation:"fadein 1s"}
 }
 }
 ,"&:hover label[for=message]>ul>li":{opacity:1,animation:"fadein 1s"}
 ,...Object.fromEntries(["erase","get","put","send"].map((method,index)=>
 ["&[method="+method+"] label:not(."+(index?method:"get")+")",{display:"none"}]))
 ,...layout.pill,...layout.material
 }})}
 ,...form({get:annotate(fields,labels)})
 ,span:{role:"input",contenteditable:true,id:"extend",type:"text","#text":"..."}
 }});
 buffer(capture)(composer,"/composer");
 toggle.call(composer,"get");
 let body=
 {composer
 ,style:{"#text":compose
({"#frame":layout.frame},layout.theme,layout.goo,layout.link
,collect,infer("reduce",merge),css
)(extract.call(layout,["body","a","blockquote","table"]))}
 };
 let scripts=[proceduralize
(serialize({exports:{fragment:"data:text/javascript;globalThis",actions:"/actions",ascend,fields:inheritance}}),capture,expose
)];
 let {averia,oswald,ranger}=fontface;
 let style=css(
 {"@font-face":[averia,oswald,ranger]
 ,"@keyframes wave":{"0%":{height:0,transform:"translate(0,-100%)",opacity:0},"50%":{opacity:0.25},"100%":{transform:"translate(0,100%)",opacity:0}}
 ,...animation.dotdot
 });
 let url=request.url.replace(/\/($|\?.*)/g,"");
 let title=url.split("/").reverse().find(Boolean)||"JSInterface";
 fragment=compose.call(body,title,"/svg/object/node/document",scripts,style,hypertext,0,document);
 merge(fields
 // root needs explicit /get method to reach json representation. 
,{source:path(window.origin+(this===routes?"/get":request.url))
 ,resource:this!==routes&&compose(stage,digest)(this
,{url,headers:request.headers})
 },1);
 await buffer(compose(tether(submission.get),throttle))(composer,fields);
 if(String(controls)==="false")
 composer.remove();
 return fragment;
},actions(request){return module(body,request.url);}
 ,composer(request){return module(composer,request.url);}
 ,feed(request){return module(feed,request.url);}
 ,network:compose
(crop(1),{spread:"force"},network.bind(null),throttle,{style:"background:#222222"},tether(document)
),sourcemap:compose(drop(1),address,sourcemap)
 ,peer()
{return compose.call(peer,serialize,["body"],record,{type:mime("js")},Object.assign);
},manifest()
{return {name:"JS Interface",short_name:"interface",theme_color:"#ffcbe4",background_color:"#fa99ca"
 ,display:"standalone",scope:"/",start_url:"https://jsinterface.org/",description:"public js interface"
 ,orientation:"any",icons:[{src:"/svg/object/node/document",sizes:"1024x1024"}]
 };
},async rss(request)
{when(has(["pub","put"]))(this);
 let queries=query(request.url);
 let item=await Object.keys(this.pub).reduce(record(async item=>
{let description=item;
 let pubDate=await compose(access,"birthtime","toString")(item);
 let content=await compose(fetch,"text",queries.augment?media
:infer("replace",/[<>]/g,match=>"&"+{"<":"l",">":"g"}[match]+"t;"))(item);
 return prune.call({description,pubDate,content}
,([field,value])=>({"#text":value}),0,1);
}),[]);
 //let xml=await import("./dylang_2017_xml.js").then(module=>module.default);
 let channel=prune.call({title:"",description:""}//link:request.url}
,([field,value])=>({"#text":value}),0,1);
 let {outerHTML:body}=document({rss:{version:"2.0",channel:{...channel,item}}});
//,{declaration:true,indent:" "})
 return {status:200,type:"rss+xml",body:'<?xml version="1.0" encoding="UTF-8" ?>'+body};
},"robots.txt":function(){return "User-agent: *\nDisallow: "}
 ,rss2json:request=>compose(fetch,"json",["body"],record)("https://api.rss2json.com/v1/api.json?"+new URLSearchParams(
 {rss_url:string(request)?request:query(request.url).url
 ,api_key:syndication.rss2json.key
 }))
 //,wordpress:request=>compose.call("./wordpress_2019_wpcom.js","WPCOM",resolve,request.url.split("/").slice(2).join("/"),"site",{number:15},"postsList",request.url.split("/").slice(2),record,note)
 //,facebook:source=>compose(fetch,"json")("/facebook/"+source)
 // new Promise(resolve=>!window.FB?featurefacebook().then(f=>
 // insert(f,"after",window.document.body)).then(f=>
 // feed.face(source)).then(resolve):FB.api("/"+/*source*/"10210793350908906"+"/feed","GET",{},response=>resolve(response)))
 // ,google(request){"https://www.googleapis.com/drive/v3/files/"+"?alt=media&key="+keys.googleapi}
 //,facebook(){FB.api("/"+subject.getAttribute("source"),"GET",{fields:'id,name,from,created_time,message,type,timeline_visibility,link,object_id'},response=>resolve(response)).then(response=>{return response.object_id?new Promise(resolve=>FB.api("/"+response.object_id,"GET",{fields:'id,title,format,source,embed_html'},responseobject=>resolve(responseobject))).then(responseobject=>{return responseobject.embed_html+" \n"+response.message}):deform(response.message+" \n "+(response.name&&response.link?response.name.replace(/ /g,"_")+"@"+response.link:""))});
 // ,"https:":source=>compose(fetch,"json")("https:/"+source)
 // ,"http:":source=>compose(fetch,"json")("http:/"+source)
 ,medium:request=>compose(fetch,"text",note,slip(new DOMParser()),"text/xml","parseFromString","item","querySelectorAll")("https://medium.com/feed/"+new URL(request.url).pathname.split("/").slice(2).join("/"))
 };

 async function toggle(method)
{let filter=wether(this.contains.bind(this),infer(),swap(undefined));
 let active=filter(this.ownerDocument.activeElement);
 let {source,message,name,code}=fill.call(this);
 let icon=
 {get:"node",put:code?"fingerprint":"plus"
 ,erase:"plus",send:message?"paperplane":"chat"
 }[method];
 let style=document({style:{class:"icon","#text":css(
 {"#toggle":
 {height:"3em",width:"3em",cursor:"pointer",fill:"var(--isle)","vertical-align":"middle","background-color":"black"
 ,"clip-path":"circle(50%)",padding:"1em",transform:"scale(0.8)",position:"sticky",left:0
 ,...["node","fingerprint"].includes(icon)&&{padding:0,width:"5em",height:"5em"}
 ,"&>path":{erase:{transform:"rotate(45deg)","transform-origin":"center center"}}[method]
 }
 })}});
 let fields=
 {send:{message:[],code:message||cookie("author")?undefined:""}
 ,put:{name:message,code:code}
 ,code:method==="put"||{[code?"name":"message"]:code?message:name}
 }[method]||{};
 form.call(this,{[method]:annotate(fields,labels)});
 document.call(this,{method:method});
 if(active)
 focus(this.querySelector(qualify(active)));
 let control=this.querySelector("#toggle");
 insert(style,control?"over":"after",control?this.querySelector("style.icon"):this.lastChild);
 insert(document({svg:{...svg.object[icon],title:method,id:"toggle"}}),control?"over":"before",control||this.firstChild);
 let room=[path(this.ownerDocument.defaultView.location.href),fill.call(this).source].join("/");
 if(method==="send"&&!defined(message))
 this.dispatchEvent(new MessageEvent("message",{data:{action:"join",room},bubbles:true}));
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

 function defer(event)
{if(!this.dataset.subject)
 return;
 let subject=JSON.parse(this.dataset.subject);
 compose(combine(compose("source",fetch,digest),infer()),transform,"over",this,insert)(subject);
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
 },namespaces.svg).next().value).querySelector("form");
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

 export function profile(resource)
{let source=basic(resource)&&{source:resource};
 let fragment={fragment:"media",script:null,chart:"plot",network:null};
 return {...source,fragment};
};

 export async function transform(resource,{fragment,incumbent,...fields})
{let [module,feature]=await locate(fragment);
 let fail=compose(crop(1),note.bind(1),"message",document);
 return buffer(resolve,fail)(module,feature,resource,fields,incumbent||window);
};

 var labels=
 {message:"",source:"",fragment:"as",title:"of"
 ,category:"on",spread:"by",matrix:"from",relations:"with"
 };

 var submission=
 {get({source,resource,...fields})
{let {origin,pathname:path}=this.ownerDocument.defaultView.location;
 let query=new URLSearchParams(prune.call(fields
,({1:value})=>value||undefined,0,1)).toString().replace(/^(.)/,"?$1");
 if(globalThis.window)
 this.ownerDocument.defaultView.history.pushState({},null,[origin,path.replace(/(^\/*|\/*$)/g,""),source,query].filter(Boolean).join("/"));
 let route=[path,source||(path==="/"?"get":"")].join("").replace(/\/+$/,"");
 resource=resource||compose(fetch,digest)(route);
 compose(profile,labels,annotate,["get"],record,form.bind(this))(resource);
 let frame=this?.ownerDocument.defaultView.frame||insert(document({div:{id:"frame"}}),"before",this);
 let fragment=infer(transform)(resource,{source:route,...fields});
 return compose.call(each.call(fragment
,async fragment=>insert(fragment,"after",frame.lastChild)
,insert(document(progress),"under",frame))
,pass(compose(swap(frame),"firstChild","remove")));
},async put(fields)
{let {method}=demarkup(this,"method");
 let {name}=fields;
 let action="/author/"+name;
 let request={method,body:JSON.stringify(fields),headers:{"Content-Type":"application/json"}};
 let [status,author]=await compose(fetch,combine("status","text"))(action,request);
 if(status!==200)
 return toggle.call(this,"send"),
 this.ownerDocument.defaultView.socket.dispatchEvent(new MessageEvent("message"
,{data:JSON.stringify({action:"message",message:author})}));
 let expires=new Date(Date.now()+1000*60*60).toUTCString();
 this.ownerDocument.cookie=cookie({author:name,path:"/",expires});
 if(author.rank)
 this.ownerDocument.cookie=cookie({rank:author.rank,path:"/",expires});
 let address=this.ownerDocument.defaultView.location.href;
 let room=[path(address),query(address).source].join("/");
 this.dispatchEvent(new MessageEvent("message",{data:{action:"sign",name,room},bubbles:true}));
 fill.call(this,{name:"",code:""});
 toggle.call(this,"send");
},erase()
{let {method}=demarkup(this,"method");
 let active=this.ownerDocument.activeElement;
 let input=[this.contains(active)?active
:Array.from(this.querySelectorAll("span[role=input]:not([id=source])")).filter(({textContent:text})=>!text)].flat();
 input.forEach(input=>demarkup(input,"role").role!=="input"||input.textContent
?console.error("erasure called on non-empty field:",input)
:input.closest("label").remove());
 toggle.call(this,"get");
},send({message})
{if(!message)return;
 let address=this.ownerDocument.defaultView.location.href;
 let room=[path(address),query(address).source].join("/");
 this.dispatchEvent(new MessageEvent("message",{data:{action:"message",room,message,put:Date.now()},bubbles:true}));
 form.call(this,{send:{message:""}});
 toggle.call(this,"send");
}};

 export var composer=
 {imports:
 {"./Blik_2023_interface.js":["","path","resolve","locate","digest","cookie","cookies","query"]
 ,"./Blik_2023_inference.js":";note;expect;compose;combine;pass;route;record;trace;drop;crop;slip;infer;tether;wether;wait;observe;buffer;swap;when;array;has;each;differ;provide;collect;is;match;basic;defined".split(";")
 ,"./Blik_2023_fragment.js":";* as fragment;document;form;progress;image;canvas;demarkup;insert;navigate;activate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;consume;syndicate;article;destroy;reference;fill;annotate;qualify;focus;capture".split(";")
 ,"./Blik_2023_layout.js":["layout"]
 ,"./Blik_2023_search.js":["","merge","unfold","search","prune","extract"]
 ,"./Blik_2024_svg.js":"* as svg"
 }
 ,exports:
 {default:
 {"#composer":
 {click({target})
{if(target.nodeName.toLowerCase()!=="li")
 return;
 let field=target.closest("label");
 if(!field||field.getAttribute("for")==="message")
 return;
 let input=field.querySelector("span[role=input]");
 input.textContent=["",target.closest("li")].reduce(function prepend(path,item)
{path=item.childNodes[0].nodeValue+(path?"/"+path:"");
 item=item.parentNode.parentNode;
 return item.nodeName=="LI"?prepend(path,item):path;
});
 input.dispatchEvent(new Event("blur",{bubbles:true})); 
 input.closest("form").dispatchEvent(new Event("submit",{bubbles:true}));
},message(event)
{let {data:message}=event;
 console.info("send",message);
 this.ownerDocument.defaultView.socket.send(JSON.stringify(message));
},submit(event)
{// Important to prevent default to avoid unintended url-encoded requests. 
 event?.preventDefault();
 let form=this;
 let {method}=demarkup(form,"method");
 let fields=fill.call(form,method);
 if(fields.source)
 fill.call(form,{[method]:{source:""}});
 return submission[method].call(form,fields);
},focusin({isTrusted:genuine,target})
{if(target.nodeName==="#text")
 target=target.parentNode;
 if(target.role!=="input")
 return;
 let [form,label]=["form","label"].map(tag=>target.closest(tag));
 let {name,type}=demarkup(target,["name","text"]);
 let value=target.textContent;
 let {method}=demarkup(form,"method");
 if(!genuine&&method==="erase")
 toggle.call(form,"get");
 if(method==="get"&&name!=="source"&&!value)
 toggle.call(form,"erase");
 let singular=Array.from(form.querySelectorAll("span[role=input]")).filter(input=>input.type=="text");
 if(singular.length>1)
 form.style.setProperty("--scroll","-"+form.scrollLeft);
 if(type=="text")
 focus(target);
 if(label)
 label.setAttribute("focused",label.getAttribute("focused")!=="true");
},focusout({target}){return target.dispatchEvent(new Event("focusin",{bubbles:true}));}
 ,keydown(event)
{let {target,keyCode}=event;
 let {enter,updown,leftright}=keyboard(keyCode);
 let list=target.parentNode.querySelector("ul");
 let selection=list?.querySelector("li.hover");
 if(enter)
 return event.preventDefault(),selection?selection.click():this.dispatchEvent(new Event("submit",{bubbles:true}));
 if(escape)
 return target.dispatchEvent(new Event("blur",{bubbles:true}));
 if(!list||target.id==="message")return;
 if(updown||leftright)
 return [Array.from(list.querySelectorAll("li")),[38,39].includes(keyCode)||-1].reduce((list,step)=>
 list.at((list.indexOf(selection)+step)%list.length)?.classList.toggle('hover'));
},input({target})
{let form=target.closest("form");
 let value=target.textContent;
 let {name}=demarkup(target,"name");
 let address=this.ownerDocument.defaultView.location.href;
 let room=[path(address),query(address).source].join("/");
 if(name==="message"&&value)
 form.dispatchEvent(new MessageEvent("message",{data:{action:"signal",room},bubbles:true}));
 let list=target.parentNode.querySelectorAll("li");
 if(name!=="message")
 Array.from(list).map(li=>
[li,value&&!unfold.call(li,li=>li.parentNode.closest("li")).map(li=>
 li.firstChild?.nodeValue||"").join("/").includes(value)?"setProperty":"removeProperty"
]).forEach(([li,term])=>li.style[term]("display","none"));
 let {message,code}=fill.call(form);
 let method=
 {put:!code&&"send"
 ,get:name!=="source"&&!value&&"erase"
 ,erase:value&&"get"
 ,send:code?"put":message?.length<2?"send":undefined
 }[form.getAttribute("method")];
 if(method)
 toggle.call(form,method);
},change({target})
{let {method}=demarkup(this.closest("form"),"method");
 if(target.type!=="text"&&method==="get")
 return target.form.dispatchEvent(new target.ownerDocument.defaultView.Event("submit",{bubbles:true}));
}}
 ,"#toggle":
 {async click({isTrusted:genuine}={})
{let form=this.closest("form");
 let method=form.getAttribute("method");
 let {message}=fill.call(form,method);
 if({erase:true,send:message,put:true}[method])
 return form.dispatchEvent(new Event("submit",{bubbles:true}));
 toggle.call(form,{get:"send",send:"get"}[method]);
}}
 }
 ,toggle,submission,labels,profile,transform
 }
 };

 export var peer=
 {imports:
 {"./Blik_2023_inference.js":["","note","each","infer","provide","collect","compose","record","wait","has","clock"]
 ,"./Blik_2023_fragment.js":["","demarkup","document","fill","image","canvas","message as entry"]
 }
 ,exports:
 {default: 
 {check(){this.send(JSON.stringify({action:"check"}));}
 ,async message({message,put,author:{name,icon}={name:"system",icon:"/svg/object/cog/document"}},window)
{let form=window.document.querySelector("#composer");
 let fields=fill.call(form,form.getAttribute("method"));
 if(!has.call(fields,"message"))
 return;
 message=document({li:await entry(
 {icon:icon||"/svg/animal/deer/document",name:name||"anonymous",put,message
 })
 });
 form.querySelector("#message").parentNode.querySelector("ul").append(message);
 if(name==="system")
 compose(wait(10000),{style:"opacity:0;transition:all 1s;"},Object.assign,wait(1000),"remove")(message);
},signal({author},window)
{let form=window.document.querySelector("form#composer");
 let fields=Array.from(form.querySelectorAll("span[role=input]"));
 let input=fields.find(input=>demarkup(input,"id").id==="message");
 let label=input.closest("label");
 let list=label.querySelector("ul")||label.appendChild(document({ul:{}}));
 let node=list.querySelector("span#signal");
 let entry=document({span:{id:"signal","#text":author.name+" is typing..."}});
 list[node?"replaceChild":"appendChild"](entry,node);
 compose(wait(3000),node=>node.parentNode&&node.remove())(entry);
},history({messages},window)
{collect(each.call(provide(messages),async event=>entry(event,window)));
},save({author,subject,updates})
{if(author==window.subject.labels.message)
 return window.Tone.Transport.start();
 let {state}=this.subject.content.viewState;
 import("./haverbeke_2020_codemirror.js").then(({ChangeSet,receiveUpdates})=>
 receiveUpdates(state,updates.map(({changes})=>
 Array.isArray(changes)
?ChangeSet.fromJSON(changes)
:changes.toJSON()).map((changes,index)=>
 Object.assign(updates[index],{changes})))).then(updates=>
 this.subject.content.update([updates]));
}}
 }
 };

 export var actions=
 {check(event,peer){peer.connected=true;}
 ,join({room},peer)
{this.rooms[room]=this.rooms[room]||{messages:[]};
 let {author}=merge(peer,{room},0);
 let event={action:"message",message:author.name+" joined.",room};
 actions.broadcast.call(this,event,peer);
 let {messages}=this.rooms[room];
 if(messages.length)
 peer?.send(JSON.stringify({action:"history",messages}));
 return this.rooms[room];
},async sign({name},peer)
{let author=await compose(fetch,"json",extract(["name","icon"]))("/author/"+name);
 Object.assign(peer,{author});
 peer.send(JSON.stringify({action:"message",author,message:"signed in as "+author.name}));
},signal({room},peer)
{let event={action:"signal",author:peer.author,room};
 actions.broadcast.call(this,event,peer);
},message({message,room,put},peer)
{let event={action:"message",author:peer.author,message,room,put};
 this.rooms[room].messages.push({message,author:peer.author,put});
 actions.broadcast.call(this,event);
},broadcast(event,peer)
{let message=JSON.stringify(event);
 this.clients.forEach(client=>
 client.readyState===1&&client!==peer&&client.room===event.room&&
 client.send(message));
},save:async function({room,content,updates,version},peer)
{peer.room=this.rooms[room]||broadcast.join.call(...arguments);
 let {EditorState,collab,receiveUpdates,getSyncedVersion,ChangeSet}=await import("./haverbeke_2020_codemirror.js");
 if(!peer.room.track)
 peer.subject.track=await fetch(subject).then(doc=>
 EditorState.create({doc:doc.toString(),extensions:[collab()]}));
 //if(note([version,getSyncedVersion(this.subject.content)]).reduce((next,past)=>next>past))
 await update(peer.subject.track,updates);
 let body=this.subject.track.doc.toString();
 let headers={"Content-Type":"text/plain"};
 let message=await fetch(subject+"?force=overwrite",{method:"put",body,headers});
 if(message instanceof Error)
 return this.emit("message",{message});
 else message=this.author+" edited "+subject;
[["save",{author:this.author,subject,updates}]
,["message",{message}]
].map(event=>
 this.server.sockets.in(room).emit(...event));
},disconnect(text)
{Object.keys(this.rooms).forEach(subject=>
 this.leave(subject)&&
 this._events.message.bind(this)({message:this.author+" left "+subject,subject}));
},put:async function({subject,content},peer)
{peer.subject=this.subjects[subject]||actions.join.call(...arguments);
 peer.subject.content=content;
 let body=Buffer.from(content,"base64").toString("utf8");
 let message=await fetch(subject+"?force=overwrite",{method:"put",body,headers:{"Content-Type":"text/plain"}});
 if(message.status!==200)
 return peer.send("message",{message:await message.text()});
[{action:"put",body:content}
,{action:"message",message:this.author+" updated "+subject}
].forEach(event=>actions.broadcast.call(this,event));
}};

 var feed=
 {imports:
 {"./Blik_2023_interface.js":["","resolve","locate","digest","cookie","cookies","query"]
 ,"./Blik_2023_inference.js":";note;clock;expect;compose;combine;pass;route;record;trace;drop;crop;slip;infer;tether;either;wether;wait;observe;buffer;swap;when;array;has;each;differ;provide;collect;is;match;basic;defined".split(";")
 ,"./Blik_2023_fragment.js":";* as fragment;document;form;image;canvas;demarkup;insert;navigate;activate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;consume;syndicate;article;destroy;reference;fill;annotate;qualify;focus;capture;message;stylerules".split(";")
 ,"./Blik_2023_layout.js":["layout"]
 ,"./Blik_2024_svg.js":"* as svg"
 }
 ,exports:
 {default:
 {".author":
 {click()
{let description=this.nextSibling;
 if(this.parentNode.nextSibling)
 return [this.parentNode,"nextSibling"].reduce(function trim(node,next){destroy(node[next])&&trim(...arguments);})
,merge(description,{style:"display:none"});
 if(description)
 spell(description);
 let {source:icon}=this.querySelector("canvas").dataset;
 let {textContent:name}=this.querySelector("span");
 let source=this.closest(".feed").getAttribute("source");
 compose(collect,consume,syndicate,provide,each(article)
,each(fragment=>insert(fragment,"after",this.parentNode))
,collect)(source,{icon,author:{name}});
}}
 ,".article":
 {async click()
{let feed=this.closest(".feed");
 let multiple=Array.from(feed.querySelectorAll(".article")).filter(node=>
 node!==this).some(node=>node.nextSibling);
 let expanded=this.nextSibling;
 feed.style.setProperty("max-width",!expanded||multiple?"calc(100% - 2em)":"revert");
 if(expanded)
 return [this,"nextSibling"].reduce(function trim(node,next){destroy(node[next])&&trim(...arguments);});
 let source=feed.getAttribute("source");
 let title=this.getAttribute("source");
 let index=this.getAttribute("index");
 let article=await compose(consume,syndicate,index)([source]);
 let media=article?.media&&reference("",article?.media);
 let progress=insert(document({span:{style:"display:inline-block;white-space:nowrap;overflow:hidden;font-family:monospace;animation:dotdot 3s infinite normal;","#text":"..."}}),"after",this);
 let content=defined(article?.content)
?[this.ownerDocument.createRange().createContextualFragment(article.content),/#.*$/].reduce((fragment,hash)=>
 Array.from(fragment.querySelectorAll("a")).map(link=>[link,link.getAttribute("href")]).forEach(([link,href])=>
 hash.test(href)&&link.setAttribute("href",href.replace(/[^#]*/,"")))||fragment)
:await compose(fetch,wether(compose("headers","Content-Type","get",is("text/html"))
,compose("text",text=>this.ownerDocument.createRange().createContextualFragment(text))
,compose("text",semiotics,parse)))([source,title,this.dataset?.fragment].filter(Boolean).join("/"));
 let entry=insert(document({span:{media}}),"after",this);
 await collect(each.call(content,async function add(fragment,index,entry)
{if(!index)
 progress.remove();
 return compose.call(fragment
,infer(insert,...entry.lastChild?["after",entry.lastChild]:["under",entry]));
},entry));
 if(article?.link)
 insert(reference(this.querySelector("span").textContent,article?.link),entry.lastChild?"after":"under",entry.lastChild||entry);
 note(await stylerules(".comments"));
 let section=document({span:
 {class:"comments"
 ,span:
 {class:"comment",...form(annotate({name:cookie("author")||"",comment:""},{comment:""}))
 ,span:{role:"button",canvas:await compose(image,canvas)("/svg/object/paperplane/document")}
 }
 ,style:{"#text":css(
 {".comments":
 {display:"inline-block"
 ,"&>span.history":{display:"table-cell","border-spacing":"0 1em","text-align":"left"}
 ,"&>span.comment":
 {...layout.material,display:"inline-block","border-radius":"2.1em"
 ,"& label":
 {...layout.form.label
 ,"&[for=name]":{"margin-right":0,"border-radius":"2.1em 0 0 2.1em","padding":"0 .5em"}
 ,"&[for=comment]":
 {"max-width":"100%","word-break":"break-all"
 ,"&>span[role=textbox]":{"min-width":0,"text-align":"left","white-space":"pre"}
 }
 }
 ,"& span[role=button]":
 {"border-radius":"0 2.1em 2.1em 0","margin-left":0,padding:".5em","vertical-align":"middle",overflow:"hidden",cursor:"pointer"
 ,"&>canvas":{width:"1.2em",height:"1.2em"}
 }
 ,"&>label,&>span":{display:"table-cell","align-content":"center","min-height":"2.5em"}
 ,"&:hover>label[for=comment]>span[role=textbox]":{"min-width":"5em"}
 }
 }
 ,"@keyframes warn":{from:{"box-shadow":"#880e4f 0px 0px 5px inset"},to:{"box-shadow":"revert"}}
 })}
 }});
 insert(section,"after",entry);
 let comments=await compose
(fetch,either("json",swap([])),provide,each(comment
,insert(document({span:{class:"history"}}),"after",section.firstChild))
,collect
)("/Blik_2024_comments.json/scope/default/"+title);
}}
 ,".comment":
 {keydown({target,keyCode:code})
{let feed=target.closest(".feed");
 let article=feed.closest(".comments").parentNode.querySelector(".article");
 let source=[feed,article].map(node=>node.getAttribute("source")).join("/");
 let {enter}=keyboard(code);
 if(!enter)
 return;
 if(target.getAttribute("name")==="name")
 return arguments[0].preventDefault();
},async click({target})
{if(!target.closest("[role=button]"))
 return;
 let fields=fill.call(this);
 let empty=Object.keys(fields).find(field=>!fields[field]);
 if(empty)
 return ["warn 1s","unset"].forEach((animation,index)=>
 compose(wait(1000*index),Object.assign)(this.querySelector("label[for="+empty+"]").style,{animation}));
 let source=this.closest(".comments").parentNode.querySelector(".article").getAttribute("source");
 let comments=target.closest(".comments").querySelector(".history");
 let message={put:Date.now(),...fields};
 let body=JSON.stringify({[source]:[message]});
 let {status}=await fetch("/Blik_2024_comments.json",{method:"put",body});
 if(status!==200)
 return ["warn 1s","unset"].forEach((animation,index)=>
 compose(wait(1000*index),Object.assign)(target.closest(".comment").style,{animation}));
 await comment(message,comments.childNodes.length,comments);
 fill.call(this,{comment:""});
 if(cookie("author")===fields.name)
 return;
 this.ownerDocument.cookie=cookie({author:fields.name,path:"/"});
 let rank=await fetch("/author/"+fields.name+"/rank");
 let expires=rank.status===200?undefined:new Date().toUTCString();
 this.ownerDocument.cookie=cookie({rank:await rank.text(),path:"/",expires});
}}
 ,".message>span:first-of-type":
 {...observe({hover({isTrusted:hover,target})
{if(!hover)
 return [target.firstChild.nextSibling].forEach(function remove(node){node&&remove(node.nextSibling),node?.remove();});
 let name=this.closest(".message").querySelector(".name").textContent;
 if(name!==cookie("author")&&cookie("rank")!=="ranger")
 return;
 let actions=document({span:{class:"actions",style:"width:0",svg:
 {role:"button",viewBox:"0 0 448 512"
 ,...svg.effect.shadow_amber
 ,path:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}
 }}});
 this.firstChild.after(actions);
 actions.style.width="auto";
}})
 //,touchstart(event){event.preventDefault();}
 }
 ,".message svg[role=button]":
 {async pointerout()
{let source=this.closest(".comments").parentNode.querySelector(".article").getAttribute("source");
 let message=this.closest(".message");
 let {index}=message.dataset;
 let body=JSON.stringify({[source]:{[index]:null}});
 let comments=await fetch("/Blik_2024_comments.json?override=true",{method:"put",body});
 if(comments.status!==200)return;
 let style=message.querySelector("style");
 if(style)
 (message.nextSibling||message.previousSibling)?.append(style);
 [message.previousSibling].forEach(function decrement(node){if(!node)return;decrement(node.previousSibling);node.dataset.index-=1;});
 message.remove();
}}
 },async comment({put,name,comment},index,comments)
{return compose
(fetch,buffer("json",swap({name})),{comment},merge
,async({name,icon,comment,put})=>insert(document({span:
 {class:"comment",...await message({icon,name,put,message:comment},index)
 }}),comments.firstChild?"before":"under",comments.firstChild||comments)
)("/author/"+name);
}}
 };

 var body=
 // under isolation to event capture islands. 
 {imports:
 {"./Blik_2023_interface.js":["","resolve","locate","digest","cookie","cookies","query"]
 ,"./Blik_2023_search.js":["","merge","unfold","search","prune","extract"]
 ,"./Blik_2023_inference.js":";note;expect;compose;combine;pass;route;record;trace;drop;crop;slip;infer;tether;wether;wait;observe;buffer;swap;when;array;has;each;differ;provide;collect;is;match;basic;defined".split(";")
 ,"./Blik_2023_fragment.js":";* as fragment;document;form;image;canvas;demarkup;insert;navigate;activate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;consume;syndicate;article;destroy;reference;fill;annotate;qualify;focus;capture".split(";")
 ,"./Blik_2023_layout.js":["layout"]
 }
 ,exports:
 {default:
 {body:
 {load:activate
 ,popstate(event)
{//note(event);this.document.forms[0]?.dispatchEvent(new Event("submit"));
}}
 ,"canvas[role=img]":
 {contextrestored(event)
{let [src,alt]=["data-source","aria-label"].map(this.getAttribute.bind(this));
 compose(image,canvas,infer(insert,"over",this))(src,alt);
}}
 ,"span[role=link]":
 {click(){this.ownerDocument.defaultView.open(this.getAttribute("source"),this.classList.contains("redirect")?undefined:"_blank")}
 }
 ,"#extend":
 {keydown(event)
{event.stopPropagation();
 event.preventDefault();
 let {target,keyCode}=event;
 let {enter}=keyboard(keyCode);
 if(!enter)return;
 let value=target.textContent;
 if(Array.from(value).every(is(".")))
 return this.dispatchEvent(new Event("submit",{bubbles:true}));
 let form=this.closest("form");
 let method=form.getAttribute("method");
 fragment.form.call(form,{[method]:annotate({[value]:""},labels)});
 target.textContent="...";
}}
 ,".spell":{click(){spell(this);}}
 ,".field":{click({target}){form.call(target.closest("form"),{extend:{key:"",value:""}})}}
 ,".carousel":{scroll}
 ,".defer":{load:defer}
 ,".reference":{click(){expand.call(this,...arguments);}}
 ,"#Interface":
 {async mousedown({target})
{let circle=this.querySelector("circle");
 if(target!==circle)
 return;
 let icon=this.querySelector("g").lastChild;
 circle.style.transition="0s";
 circle.style.transform="scale(1)";
 icon.style.transform="scale(1)";
 let pulse=circle.cloneNode(true);
 pulse.style.opacity=0.1;
 pulse.style.pointerEvents="none";
 pulse.style.transition="1.5s ease-out";
 circle.insertAdjacentElement("afterEnd",pulse);
 await wait(100)();
 icon.style.transform="scale(1.1)";
 circle.style.transition="0.1s";
 circle.style.removeProperty("transform");
 pulse.style.transform="scale(16)";
 pulse.style.opacity=0;
 compose(wait(3000),"remove")(pulse);
 //await wait(5000)();
 //this.dispatchEvent(new Event("mousedown",{bubbles:true}))
}}
 ,".editor":
 {submit(event)
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
},keydown({keyCode})
{if(keyCode!=27)return;
 let label=target.parentNode.querySelector("text.label");
 label.style.display="block";
 delete node.selected;
 this.remove();
}}
 }
 ,path,edit,proceduralize,peer:peer.exports
 }
 };

