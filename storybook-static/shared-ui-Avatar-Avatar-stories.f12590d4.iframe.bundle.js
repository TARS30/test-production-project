"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[2376],{"./src/shared/ui/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BIG:()=>BIG,NoImage:()=>NoImage,Primary:()=>Primary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var Avatar=__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx");const wojak_namespaceObject=__webpack_require__.p+"static/media/wojak.f2958901.jpg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Avatar_stories={title:"shared/Avatar",component:Avatar.C,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Avatar.C,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))},Primary=Template.bind({});Primary.args={src:wojak_namespaceObject,size:Avatar.K.PRIMARY};var BIG=Template.bind({});BIG.args={src:wojak_namespaceObject,size:Avatar.K.BIG};var Small=Template.bind({});Small.args={src:wojak_namespaceObject,size:Avatar.K.SMALL};var NoImage=Template.bind({});NoImage.args={src:"",alt:"avatar"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Avatar {...args} />",...Primary.parameters?.docs?.source}}},BIG.parameters={...BIG.parameters,docs:{...BIG.parameters?.docs,source:{originalSource:"args => <Avatar {...args} />",...BIG.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => <Avatar {...args} />",...Small.parameters?.docs?.source}}},NoImage.parameters={...NoImage.parameters,docs:{...NoImage.parameters?.docs,source:{originalSource:"args => <Avatar {...args} />",...NoImage.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","BIG","Small","NoImage"]},"./src/shared/ui/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Avatar,K:()=>AvatarSizes});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.c,options);const Avatar_Avatar_module=Avatar_module.c&&Avatar_module.c.locals?Avatar_module.c.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AvatarSizes=function(AvatarSizes){return AvatarSizes[AvatarSizes.BIG=300]="BIG",AvatarSizes[AvatarSizes.SMALL=50]="SMALL",AvatarSizes[AvatarSizes.PRIMARY=100]="PRIMARY",AvatarSizes[AvatarSizes.EXTRA_SMALL=30]="EXTRA_SMALL",AvatarSizes}({}),Avatar=function Avatar(_ref){var src=_ref.src,alt=_ref.alt,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?100:_ref$size,addStyle=(0,react.useMemo)((function(){return{width:size,height:size}}),[size]);return(0,jsx_runtime.jsx)("img",{className:(0,classNames.g)(Avatar_Avatar_module.Avatar,{},[className]),alt,src,style:addStyle})}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw{max-width:100px;max-height:100px;border:1px solid var(--primary-color);padding:2px;border-radius:50%}","",{version:3,sources:["webpack://./src/shared/ui/Avatar/Avatar.module.scss"],names:[],mappings:"AAAA,mDACE,eAAA,CACA,gBAAA,CACA,qCAAA,CACA,WAAA,CACA,iBAAA",sourcesContent:[".Avatar {\n  max-width: 100px;\n  max-height: 100px;\n  border: 1px solid var(--primary-color);\n  padding: 2px;\n  border-radius: 50%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Avatar:"src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);