(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({108:"shared-ui-Stack-Flex-Flex-stories",223:"shared-ui-Text-Text-stories",573:"features-AuthByUsername-ui-LoginForm-LoginForm-stories",639:"entities-Notification-ui-NotificationItem-NotificationItem-stories",919:"entities-Rating-ui-RatingCard-RatingCard-stories",1311:"features-AuthByUsername-ui-LoginModal-LoginModal-stories",1739:"shared-ui-AppLink-AppLink-stories",2014:"pages-AboutPage-ui-AboutPage-stories",2248:"widgets-Sidebar-ui-Sidebar-Sidebar-stories",2724:"shared-ui-Loader-ui-Loader-stories",3055:"shared-ui-Code-Code-stories",3209:"widgets-ErrorPage-ui-ErrorPage-stories",3286:"entities-Article-ui-ArticleList-ArticleList-stories",3447:"features-EditableProfileCard-ui-EditableProfileCard-EditableProfileCard-stories",3490:"features-ArticleTypeTabs-ui-ArticleTypeTabs-ArticleTypeTabs-stories",3769:"shared-ui-Tabs-Tabs-stories",3907:"features-ThemeSwitcher-ui-ThemeSwitcher-stories",4038:"pages-MainPage-ui-MainPage-stories",4279:"shared-ui-Avatar-Avatar-stories",4640:"entities-Article-ui-ArticleDetails-ArticleDetails-stories",5009:"shared-ui-Card-Card-stories",5372:"widgets-PageLoader-PageLoader-stories",5914:"pages-ProfilePage-ui-ProfilePage-stories",5959:"features-AddCommentForm-ui-AddCommentForm-stories",5985:"entities-Profile-ui-ProfileCard-ProfileCard-stories",6425:"shared-ui-Button-Button-stories",6842:"entities-Article-ui-ArticleListItem-ArticleListItem-stories",7007:"shared-ui-Modal-Modal-stories",7436:"shared-ui-Popups-ui-Dropdown-Dropdown-stories",8024:"shared-ui-Popups-ui-MyListbox-MyListbox-stories",8125:"shared-ui-Select-Select-stories",8134:"features-ArticleViewSelector-ui-ArticleViewSelector-ArticleViewSelector-stories",8335:"shared-ui-StarRating-StarRating-stories",8467:"shared-ui-Input-Input-stories",8918:"entities-Country-ui-CountrySelect-CountrySelect-stories",9105:"entities-Comment-ui-CommentList-CommentList-stories",9207:"widgets-Navbar-ui-Navbar-stories",9388:"shared-ui-Skeleton-Skeleton-stories",9466:"pages-NotFoundPage-ui-NotFoundPage-stories",9589:"entities-Comment-ui-CommentItem-CommentItem-stories",9664:"shared-ui-Popups-ui-Popover-Popover-stories",9669:"entities-Currency-ui-CurrencySelect-CurrencySelect-stories",9991:"features-ArticleSortSelector-ui-ArticleSortSelector-ArticleSortSelector-stories"}[chunkId]||chunkId)+"."+{108:"1b1426b9",159:"9f5e470d",223:"1cac61ba",573:"0bcedeb7",639:"afb727bd",688:"4b5cc77d",730:"9463a255",794:"06d10639",857:"a7cb791c",919:"b5c78192",1311:"2360ad2d",1739:"77b561a0",2014:"96984c56",2196:"9d87091c",2248:"5d6c003c",2347:"081b2c1d",2433:"709282a0",2505:"217b73d8",2724:"685eea17",3020:"ac4770f8",3055:"2a7e16fb",3209:"fcbff5d9",3286:"095f6de8",3447:"cf97fd2d",3490:"56eef734",3545:"1c29cab8",3769:"36a843a1",3907:"6018d049",4038:"760daa61",4071:"05db44a0",4279:"476fa50a",4570:"ae9eb571",4640:"077f9eba",4729:"7bf4fd55",5009:"fd1bbbdd",5317:"f1b04a88",5372:"cd01d007",5572:"c151ec9b",5647:"09fe5bcd",5914:"4a7773dd",5953:"a3eed495",5959:"83921ff2",5985:"05a03e06",6291:"d2e24cea",6425:"5516966b",6842:"908631a0",6895:"3228c37f",7007:"a5453162",7306:"f3cc8ce1",7425:"c916bd31",7436:"d57c7f13",7648:"faa2448d",7986:"c86cd886",8024:"ea23a3d3",8125:"f3d5479f",8134:"59f2543a",8307:"08638ca6",8335:"c142a51a",8467:"27633698",8918:"149ab3be",8995:"74e50066",9105:"2e3797c3",9207:"ea9a909f",9388:"e37d7999",9466:"f80bee63",9539:"1356a892",9589:"04ddcb48",9622:"d1f0ebca",9664:"889b2c28",9669:"a42cbcd7",9991:"c33b4fa1"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="production_project_code_course:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","production_project_code_course:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();