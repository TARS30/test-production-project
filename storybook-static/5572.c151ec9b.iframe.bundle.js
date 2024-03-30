"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[5572],{"./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useAppDispatch});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),useAppDispatch=function useAppDispatch(){return(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.wA)()}},"./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>useInitialEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInitialEffect(callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){0}),[])}},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,Mp:()=>ButtonSize,Ox:()=>ButtonTheme});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","theme","children","square","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme=function(ButtonTheme){return ButtonTheme.CLEAR="clear",ButtonTheme.OUTLINE="outline",ButtonTheme.OUTLINE_ACCENT="outline_accent",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted",ButtonTheme}({}),ButtonSize=function(ButtonSize){return ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl",ButtonSize}({}),Button=function Button(props){var className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?ButtonTheme.OUTLINE:_props$theme,children=props.children,square=props.square,_props$size=props.size,size=void 0===_props$size?ButtonSize.M:_props$size,otherProps=_objectWithoutProperties(props,_excluded),mods=_defineProperty(_defineProperty(_defineProperty({},Button_Button_module[theme],!0),Button_Button_module.square,square),Button_Button_module[size],!0);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.x)(Button_Button_module.Button,mods,[className])},otherProps),{},{children}))}},"./src/shared/ui/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EY:()=>Text,nO:()=>TextAlign,$C:()=>TextSize,$G:()=>TextTheme});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.A,options);const Text_Text_module=Text_module.A&&Text_module.A.locals?Text_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TextTheme=function(TextTheme){return TextTheme.PRIMARY="primary",TextTheme.INVERTED="inverted",TextTheme.ERROR="error",TextTheme.CORRECT="correct",TextTheme}({}),TextAlign=function(TextAlign){return TextAlign.CENTER="center",TextAlign.RIGHT="right",TextAlign.LEFT="left",TextAlign}({}),TextSize=function(TextSize){return TextSize.M="size_m",TextSize.L="size_l",TextSize.S="size_s",TextSize}({}),mapSizeToHeaderTag=_defineProperty(_defineProperty(_defineProperty({},TextSize.S,"h3"),TextSize.M,"h2"),TextSize.L,"h1"),Text=(0,react.memo)((function(props){var text=props.text,title=props.title,className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?TextTheme.PRIMARY:_props$theme,_props$align=props.align,align=void 0===_props$align?TextAlign.LEFT:_props$align,_props$textSize=props.textSize,textSize=void 0===_props$textSize?TextSize.M:_props$textSize,_props$dataTestid=props["data-testid"],dataTestId=void 0===_props$dataTestid?"Text":_props$dataTestid,HeaderTag=mapSizeToHeaderTag[textSize],mods=_defineProperty(_defineProperty(_defineProperty({},Text_Text_module[theme],!0),Text_Text_module[align],!0),Text_Text_module[textSize],!0);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(Text_Text_module.Text,mods,[className]),children:[title&&(0,jsx_runtime.jsx)(HeaderTag,{"data-testid":"".concat(dataTestId,".Header"),className:Text_Text_module.title,children:title}),text&&(0,jsx_runtime.jsx)("p",{"data-testid":"".concat(dataTestId,".Text"),className:Text_Text_module.text,children:text})]})}))},"./src/widgets/Page/ScrollSaver/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wx:()=>ScrollSaverActions,Zz:()=>ScrollSaverReducer,F:()=>getScrollSaverByPath});var getScrollSaverByPath=(0,__webpack_require__("./node_modules/reselect/es/index.js").Mz)((function getScrollSaver(state){return state.scrollSaver.scroll}),(function(state,path){return path}),(function(scroll,path){return scroll[path]||0})),ScrollSaverSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").Z0)({name:"scroll",initialState:{scroll:{}},reducers:{setScrollPosition:function setScrollPosition(state,_ref){var payload=_ref.payload;state.scroll[payload.path]=payload.position}}}),ScrollSaverActions=ScrollSaverSlice.actions,ScrollSaverReducer=ScrollSaverSlice.reducer},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color);padding:5px 10px;transition:all .2s ease 0s}.src-shared-ui-Button-Button-module__Button--a4nOa:hover{opacity:.5}.src-shared-ui-Button-Button-module__Button--a4nOa:disabled{opacity:.5;cursor:not-allowed}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none;color:var(--primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);border-radius:3px;color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__outline_accent--w9P0q{border:1px solid var(--accent-color);border-radius:3px;color:var(--accent-color);background:none}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--bg-color);color:var(--primary-color);border:none;border-radius:3px}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none;border-radius:0 3px 3px 0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,cAAA,CACA,mCAAA,CACA,gBAAA,CACA,0BAAA,CAEA,yDACE,UAAA,CAGF,4DACE,UAAA,CACA,kBAAA,CAIJ,kDACE,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,0BAAA,CAGF,oDACE,qCAAA,CACA,iBAAA,CACA,0BAAA,CACA,eAAA,CAGF,2DACE,oCAAA,CACA,iBAAA,CACA,yBAAA,CACA,eAAA,CAGF,uDACE,gCAAA,CACA,0BAAA,CACA,WAAA,CACA,iBAAA,CAGF,+DACE,yCAAA,CACA,mCAAA,CACA,WAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,sGACE,yBAAA,CACA,0BAAA,CAGF,mDACE,SAAA,CAGF,mDACE,kBAAA,CAGF,mDACE,kBAAA,CAGF,oDACE,mBAAA",sourcesContent:[".Button {\n  cursor: pointer;\n  color: var(--inverted-primary-color);\n  padding: 5px 10px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.clear {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  color: var(--primary-color);\n}\n\n.outline {\n  border: 1px solid var(--primary-color);\n  border-radius: 3px;\n  color: var(--primary-color);\n  background: none;\n}\n\n.outline_accent {\n  border: 1px solid var(--accent-color);\n  border-radius: 3px;\n  color: var(--accent-color);\n  background: none;\n}\n\n.background {\n  background-color: var(--bg-color);\n  color: var(--primary-color);\n  border: none;\n  border-radius: 3px;\n}\n\n.backgroundInverted {\n  background-color: var(--inverted-bg-color);\n  color: var(--inverted-primary-color);\n  border: none;\n  border-radius: 0 3px 3px 0;\n}\n\n.square.size_m {\n  width: var(--font-line-m);\n  height: var(--font-line-m);\n}\n\n.square.size_l {\n  width: var(--font-line-l);\n  height: var(--font-line-l);\n}\n\n.square.size_xl {\n  width: var(--font-line-xl);\n  height: var(--font-line-xl);\n}\n\n.square {\n  padding: 0;\n}\n\n.size_m {\n  font: var(--font-m);\n}\n\n.size_l {\n  font: var(--font-l);\n}\n\n.size_xl {\n  font: var(--font-xl);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",outline_accent:"src-shared-ui-Button-Button-module__outline_accent--w9P0q",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",square:"src-shared-ui-Button-Button-module__square--pKS1A",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-l);color:var(--primary-color)}.src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-m);color:var(--secondary-color)}.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__title--ikI7V{color:var(--error-color)}.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__text--uNJee{color:var(--error-secondary-color)}.src-shared-ui-Text-Text-module__correct--hDQpt .src-shared-ui-Text-Text-module__text--uNJee{color:green}.src-shared-ui-Text-Text-module__inverted--fgY32 .src-shared-ui-Text-Text-module__title--ikI7V{color:var(--inverted-primary-color)}.src-shared-ui-Text-Text-module__inverted--fgY32 .src-shared-ui-Text-Text-module__text--uNJee{color:var(--inverted-secondary-color)}.src-shared-ui-Text-Text-module__left--dBqPI{text-align:left}.src-shared-ui-Text-Text-module__right--j4UBr{text-align:right}.src-shared-ui-Text-Text-module__center--iJw6m{text-align:center}.src-shared-ui-Text-Text-module__size_m--AOVZB .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-l)}.src-shared-ui-Text-Text-module__size_m--AOVZB .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-m)}.src-shared-ui-Text-Text-module__size_l--U6JpO .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-xl)}.src-shared-ui-Text-Text-module__size_l--U6JpO .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-l)}.src-shared-ui-Text-Text-module__size_s--JVXO2 .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-m)}.src-shared-ui-Text-Text-module__size_s--JVXO2 .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-s)}","",{version:3,sources:["webpack://./src/shared/ui/Text/Text.module.scss"],names:[],mappings:"AAAA,8CACE,kBAAA,CACA,0BAAA,CAGF,6CACE,kBAAA,CACA,4BAAA,CAIA,4FACE,wBAAA,CAGF,2FACE,kCAAA,CAKF,6FACE,WAAA,CAKF,+FACE,mCAAA,CAGF,8FACE,qCAAA,CAIJ,6CACE,eAAA,CAGF,8CACE,gBAAA,CAGF,+CACE,iBAAA,CAIA,6FACE,kBAAA,CAGF,4FACE,kBAAA,CAKF,6FACE,mBAAA,CAGF,4FACE,kBAAA,CAKF,6FACE,kBAAA,CAGF,4FACE,kBAAA",sourcesContent:[".title {\n  font: var(--font-l);\n  color: var(--primary-color);\n}\n\n.text {\n  font: var(--font-m);\n  color: var(--secondary-color);\n}\n\n.error {\n  .title {\n    color: var(--error-color);\n  }\n\n  .text {\n    color: var(--error-secondary-color);\n  }\n}\n\n.correct {\n  .text {\n    color: green;\n  }\n}\n\n.inverted {\n  .title {\n    color: var(--inverted-primary-color);\n  }\n\n  .text {\n    color: var(--inverted-secondary-color);\n  }\n}\n\n.left {\n  text-align: left;\n}\n\n.right {\n  text-align: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.size_m {\n  .title {\n    font: var(--font-l);\n  }\n\n  .text {\n    font: var(--font-m);\n  }\n}\n\n.size_l {\n  .title {\n    font: var(--font-xl);\n  }\n\n  .text {\n    font: var(--font-l);\n  }\n}\n\n.size_s {\n  .title {\n    font: var(--font-m);\n  }\n\n  .text {\n    font: var(--font-s);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={title:"src-shared-ui-Text-Text-module__title--ikI7V",text:"src-shared-ui-Text-Text-module__text--uNJee",error:"src-shared-ui-Text-Text-module__error--F9oLX",correct:"src-shared-ui-Text-Text-module__correct--hDQpt",inverted:"src-shared-ui-Text-Text-module__inverted--fgY32",left:"src-shared-ui-Text-Text-module__left--dBqPI",right:"src-shared-ui-Text-Text-module__right--j4UBr",center:"src-shared-ui-Text-Text-module__center--iJw6m",size_m:"src-shared-ui-Text-Text-module__size_m--AOVZB",size_l:"src-shared-ui-Text-Text-module__size_l--U6JpO",size_s:"src-shared-ui-Text-Text-module__size_s--JVXO2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);