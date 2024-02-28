"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[1572],{"./src/shared/ui/AppLink/AppLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,PrimaryDark:()=>PrimaryDark,Secondary:()=>Secondary,SecondaryDark:()=>SecondaryDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),_AppLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/AppLink",component:_AppLink__WEBPACK_IMPORTED_MODULE_3__.q,argTypes:{backgroundColor:{control:"color"}},args:{to:"/"}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppLink__WEBPACK_IMPORTED_MODULE_3__.q,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))},Primary=Template.bind({});Primary.args={children:"Text",theme:_AppLink__WEBPACK_IMPORTED_MODULE_3__.A.PRIMARY};var Secondary=Template.bind({});Secondary.args={children:"Text",theme:_AppLink__WEBPACK_IMPORTED_MODULE_3__.A.SECONDARY};var PrimaryDark=Template.bind({});PrimaryDark.args={children:"Text",theme:_AppLink__WEBPACK_IMPORTED_MODULE_3__.A.PRIMARY},PrimaryDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.So.DARK)];var SecondaryDark=Template.bind({});SecondaryDark.args={children:"Text",theme:_AppLink__WEBPACK_IMPORTED_MODULE_3__.A.SECONDARY},SecondaryDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.So.DARK)],Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <AppLink {...args} />",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <AppLink {...args} />",...Secondary.parameters?.docs?.source}}},PrimaryDark.parameters={...PrimaryDark.parameters,docs:{...PrimaryDark.parameters?.docs,source:{originalSource:"args => <AppLink {...args} />",...PrimaryDark.parameters?.docs?.source}}},SecondaryDark.parameters={...SecondaryDark.parameters,docs:{...SecondaryDark.parameters?.docs,source:{originalSource:"args => <AppLink {...args} />",...SecondaryDark.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","PrimaryDark","SecondaryDark"]},"./src/shared/ui/AppLink/AppLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>AppLink,A:()=>AppLinkTheme});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppLink_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppLink_module.c,options);const AppLink_AppLink_module=AppLink_module.c&&AppLink_module.c.locals?AppLink_module.c.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["to","className","children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var AppLinkTheme=function(AppLinkTheme){return AppLinkTheme.PRIMARY="primary",AppLinkTheme.SECONDARY="secondary",AppLinkTheme}({}),AppLink=(0,react.memo)((function(props){var to=props.to,className=props.className,children=props.children,_props$theme=props.theme,theme=void 0===_props$theme?AppLinkTheme.PRIMARY:_props$theme,otherProps=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsx)(dist.cH,_objectSpread(_objectSpread({to,className:(0,classNames.g)(AppLink_AppLink_module.AppLink,_defineProperty({},AppLink_AppLink_module[theme],!0),[className])},otherProps),{},{children}))}))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{color:var(--inverted-secondary-color);text-decoration:none}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--inverted-secondary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],names:[],mappings:"AAAA,sDACE,qCAAA,CACA,oBAAA,CAGF,sDACE,qCAAA,CAGF,wDACE,mCAAA",sourcesContent:[".AppLink {\n  color: var(--inverted-secondary-color);\n  text-decoration: none;\n}\n\n.primary {\n  color: var(--inverted-secondary-color);\n}\n\n.secondary {\n  color: var(--inverted-primary-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={AppLink:"src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW",primary:"src-shared-ui-AppLink-AppLink-module__primary--lPwbq",secondary:"src-shared-ui-AppLink-AppLink-module__secondary--E8eho"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);