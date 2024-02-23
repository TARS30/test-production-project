"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[2036],{"./src/shared/ui/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,CircleDark:()=>CircleDark,Normal:()=>Normal,NormalDark:()=>NormalDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),_Skeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/Skeleton/Skeleton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Skeleton",component:_Skeleton__WEBPACK_IMPORTED_MODULE_2__.W,args:{}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Skeleton__WEBPACK_IMPORTED_MODULE_2__.W,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))},Normal=Template.bind({});Normal.args={width:"100%",height:200};var Circle=Template.bind({});Circle.args={border:"50%",height:100,width:100};var NormalDark=Template.bind({});NormalDark.args={width:"100%",height:200},NormalDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.So.DARK)];var CircleDark=Template.bind({});CircleDark.args={border:"50%",height:100,width:100},CircleDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.So.DARK)],Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <Skeleton {...args} />",...Normal.parameters?.docs?.source}}},Circle.parameters={...Circle.parameters,docs:{...Circle.parameters?.docs,source:{originalSource:"args => <Skeleton {...args} />",...Circle.parameters?.docs?.source}}},NormalDark.parameters={...NormalDark.parameters,docs:{...NormalDark.parameters?.docs,source:{originalSource:"args => <Skeleton {...args} />",...NormalDark.parameters?.docs?.source}}},CircleDark.parameters={...CircleDark.parameters,docs:{...CircleDark.parameters?.docs,source:{originalSource:"args => <Skeleton {...args} />",...CircleDark.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","Circle","NormalDark","CircleDark"]},"./src/shared/ui/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Skeleton});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/Skeleton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.c,options);const Skeleton_Skeleton_module=Skeleton_module.c&&Skeleton_module.c.locals?Skeleton_module.c.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Skeleton=(0,react.memo)((function(props){var className=props.className,height=props.height,style={width:props.width,height,borderRadius:props.border};return(0,jsx_runtime.jsx)("div",{className:(0,classNames.g)(Skeleton_Skeleton_module.Skeleton,{},[className]),style})}))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Skeleton/Skeleton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.src-shared-ui-Skeleton-Skeleton-module__Skeleton--ucKJo{width:100%;height:50px;position:relative;box-shadow:0 2px 5px 0 var(--skeleton-shadow);overflow:hidden}.src-shared-ui-Skeleton-Skeleton-module__Skeleton--ucKJo::before{content:"";display:block;position:absolute;left:-100%;top:0;height:100%;width:50%;background:linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);animation:src-shared-ui-Skeleton-Skeleton-module__load--enVUx 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite}@keyframes src-shared-ui-Skeleton-Skeleton-module__load--enVUx{0%{left:-100%}50%{left:100%}100%{left:-100%}}',"",{version:3,sources:["webpack://./src/shared/ui/Skeleton/Skeleton.module.scss"],names:[],mappings:"AAAA,yDACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,6CAAA,CACA,eAAA,CAEA,iEACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,UAAA,CACA,KAAA,CACA,WAAA,CACA,SAAA,CACA,iGAAA,CACA,wGAAA,CAIJ,+DACE,GACE,UAAA,CAGF,IACE,SAAA,CAGF,KACE,UAAA,CAAA",sourcesContent:['.Skeleton {\n  width: 100%;\n  height: 50px;\n  position: relative;\n  box-shadow: 0 2px 5px 0 var(--skeleton-shadow);\n  overflow: hidden;\n\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: -100%;\n    top: 0;\n    height: 100%;\n    width: 50%;\n    background: linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);\n    animation: load 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n}\n\n@keyframes load {\n  0% {\n    left: -100%;\n  }\n\n  50% {\n    left: 100%;\n  }\n\n  100% {\n    left: -100%;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Skeleton:"src-shared-ui-Skeleton-Skeleton-module__Skeleton--ucKJo",load:"src-shared-ui-Skeleton-Skeleton-module__load--enVUx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);