"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[6842],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{A:()=>_classCallCheck})},"./node_modules/@babel/runtime/helpers/esm/createClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:String(i)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{A:()=>_typeof})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/entities/Article/ui/ArticleListItem/ArticleListItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SQUARE:()=>SQUARE,WIDE:()=>WIDE,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _model_consts_consts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/entities/Article/model/consts/consts.ts"),article={id:"1",title:"Javascript news aschcnlasnc",subtitle:"Что нового в JS за 2022 год?",img:"",views:1022,user:{id:"1",username:"NAME",avatar:""},createdAt:"26.02.2022",type:["IT","SCIENCE","SHIT","SOMEOTHERSTIH"],blocks:[{id:"1",type:"TEXT",title:"Заголовок этого блока",paragraphs:["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"4",type:"CODE",code:'<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    <\/script>\n  </body>\n</html>;'},{id:"5",type:"TEXT",title:"Заголовок этого блока",paragraphs:["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"2",type:"IMAGE",src:"",title:"Рисунок 1 - скриншот сайта"},{id:"3",type:"CODE",code:"const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"},{id:"7",type:"TEXT",title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"8",type:"IMAGE",src:"",title:"Рисунок 1 - скриншот сайта"},{id:"9",type:"TEXT",title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."]}]};const __WEBPACK_DEFAULT_EXPORT__={title:"entities/Article/ArticleListItem",component:__webpack_require__("./src/entities/Article/ui/ArticleListItem/ArticleListItem.tsx").k,argTypes:{}};var WIDE={args:{article,view:_model_consts_consts__WEBPACK_IMPORTED_MODULE_0__.Uv.WIDE}},SQUARE={args:{article,view:_model_consts_consts__WEBPACK_IMPORTED_MODULE_0__.Uv.SQUARE}};WIDE.parameters={...WIDE.parameters,docs:{...WIDE.parameters?.docs,source:{originalSource:"{\n  args: {\n    article,\n    view: ArticleView.WIDE\n  }\n}",...WIDE.parameters?.docs?.source}}},SQUARE.parameters={...SQUARE.parameters,docs:{...SQUARE.parameters?.docs,source:{originalSource:"{\n  args: {\n    article,\n    view: ArticleView.SQUARE\n  }\n}",...SQUARE.parameters?.docs?.source}}};const __namedExportsOrder=["WIDE","SQUARE"]},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,Mp:()=>ButtonSize,Ox:()=>ButtonTheme});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","theme","children","square","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme=function(ButtonTheme){return ButtonTheme.CLEAR="clear",ButtonTheme.OUTLINE="outline",ButtonTheme.OUTLINE_ACCENT="outline_accent",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted",ButtonTheme}({}),ButtonSize=function(ButtonSize){return ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl",ButtonSize}({}),Button=function Button(props){var className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?ButtonTheme.OUTLINE:_props$theme,children=props.children,square=props.square,_props$size=props.size,size=void 0===_props$size?ButtonSize.M:_props$size,otherProps=_objectWithoutProperties(props,_excluded),mods=_defineProperty(_defineProperty(_defineProperty({},Button_Button_module[theme],!0),Button_Button_module.square,square),Button_Button_module[size],!0);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.x)(Button_Button_module.Button,mods,[className])},otherProps),{},{children}))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color);padding:5px 10px;transition:all .2s ease 0s}.src-shared-ui-Button-Button-module__Button--a4nOa:hover{opacity:.5}.src-shared-ui-Button-Button-module__Button--a4nOa:disabled{opacity:.5;cursor:not-allowed}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none;color:var(--primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);border-radius:3px;color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__outline_accent--w9P0q{border:1px solid var(--accent-color);border-radius:3px;color:var(--accent-color);background:none}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--bg-color);color:var(--primary-color);border:none;border-radius:3px}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none;border-radius:0 3px 3px 0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,cAAA,CACA,mCAAA,CACA,gBAAA,CACA,0BAAA,CAEA,yDACE,UAAA,CAGF,4DACE,UAAA,CACA,kBAAA,CAIJ,kDACE,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,0BAAA,CAGF,oDACE,qCAAA,CACA,iBAAA,CACA,0BAAA,CACA,eAAA,CAGF,2DACE,oCAAA,CACA,iBAAA,CACA,yBAAA,CACA,eAAA,CAGF,uDACE,gCAAA,CACA,0BAAA,CACA,WAAA,CACA,iBAAA,CAGF,+DACE,yCAAA,CACA,mCAAA,CACA,WAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,sGACE,yBAAA,CACA,0BAAA,CAGF,mDACE,SAAA,CAGF,mDACE,kBAAA,CAGF,mDACE,kBAAA,CAGF,oDACE,mBAAA",sourcesContent:[".Button {\n  cursor: pointer;\n  color: var(--inverted-primary-color);\n  padding: 5px 10px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.clear {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  color: var(--primary-color);\n}\n\n.outline {\n  border: 1px solid var(--primary-color);\n  border-radius: 3px;\n  color: var(--primary-color);\n  background: none;\n}\n\n.outline_accent {\n  border: 1px solid var(--accent-color);\n  border-radius: 3px;\n  color: var(--accent-color);\n  background: none;\n}\n\n.background {\n  background-color: var(--bg-color);\n  color: var(--primary-color);\n  border: none;\n  border-radius: 3px;\n}\n\n.backgroundInverted {\n  background-color: var(--inverted-bg-color);\n  color: var(--inverted-primary-color);\n  border: none;\n  border-radius: 0 3px 3px 0;\n}\n\n.square.size_m {\n  width: var(--font-line-m);\n  height: var(--font-line-m);\n}\n\n.square.size_l {\n  width: var(--font-line-l);\n  height: var(--font-line-l);\n}\n\n.square.size_xl {\n  width: var(--font-line-xl);\n  height: var(--font-line-xl);\n}\n\n.square {\n  padding: 0;\n}\n\n.size_m {\n  font: var(--font-m);\n}\n\n.size_l {\n  font: var(--font-l);\n}\n\n.size_xl {\n  font: var(--font-xl);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",outline_accent:"src-shared-ui-Button-Button-module__outline_accent--w9P0q",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",square:"src-shared-ui-Button-Button-module__square--pKS1A",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useTranslation});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=function unescapeHtmlEntity(m){return htmlEntities[m]};var i18nInstance,defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function unescape(text){return text.replace(matchHtmlEntity,unescapeHtmlEntity)}},I18nContext=(0,react.createContext)();var ReportNamespaces=function(){function ReportNamespaces(){(0,classCallCheck.A)(this,ReportNamespaces),this.usedNamespaces={}}return(0,createClass.A)(ReportNamespaces,[{key:"addUsedNamespaces",value:function addUsedNamespaces(namespaces){var _this=this;namespaces.forEach((function(ns){_this.usedNamespaces[ns]||(_this.usedNamespaces[ns]=!0)}))}},{key:"getUsedNamespaces",value:function getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}]),ReportNamespaces}();function getI18n(){return i18nInstance}function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function useTranslation_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function useTranslation_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?useTranslation_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.A)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):useTranslation_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(I18nContext)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||getI18n();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({},function getDefaults(){return defaultOptions}()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState=(0,react.useState)(getT),_useState2=(0,slicedToArray.A)(_useState,2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}}}]);