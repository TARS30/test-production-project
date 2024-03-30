"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[7007],{"./src/shared/ui/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/Modal/Modal.tsx"),_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/const/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__.a,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))},Primary=Template.bind({});Primary.args={className:"light",isOpen:!0,children:"Lorem ipsum dolor sit amet"},Primary.decorators=[(0,_shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.n)(_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.LIGHT)];var Dark=Template.bind({});Dark.args={className:"dark",isOpen:!0,children:"Lorem ipsum dolor sit amet"},Dark.decorators=[(0,_shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.n)(_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.DARK)],Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Modal {...args} />",...Primary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <Modal {...args} />",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Dark"]},"./src/shared/lib/hooks/useTheme/useTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/lib/context/ThemeContext.ts"),_shared_const_localStorage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/const/localStorage.ts"),_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/const/theme.ts");function useTheme(){var _useContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.D),theme=_useContext.theme,setTheme=_useContext.setTheme;return{theme:theme||_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.LIGHT,toggleTheme:function toggleTheme(){var newTheme=theme===_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.DARK?_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.LIGHT:_shared_const_theme__WEBPACK_IMPORTED_MODULE_2__.S.DARK;null==setTheme||setTheme(newTheme),localStorage.setItem(_shared_const_localStorage__WEBPACK_IMPORTED_MODULE_3__.QL,newTheme)}}}},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,Mp:()=>ButtonSize,Ox:()=>ButtonTheme});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","theme","children","square","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme=function(ButtonTheme){return ButtonTheme.CLEAR="clear",ButtonTheme.OUTLINE="outline",ButtonTheme.OUTLINE_ACCENT="outline_accent",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted",ButtonTheme}({}),ButtonSize=function(ButtonSize){return ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.XL="size_xl",ButtonSize}({}),Button=function Button(props){var className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?ButtonTheme.OUTLINE:_props$theme,children=props.children,square=props.square,_props$size=props.size,size=void 0===_props$size?ButtonSize.M:_props$size,otherProps=_objectWithoutProperties(props,_excluded),mods=_defineProperty(_defineProperty(_defineProperty({},Button_Button_module[theme],!0),Button_Button_module.square,square),Button_Button_module[size],!0);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.x)(Button_Button_module.Button,mods,[className])},otherProps),{},{children}))}},"./src/shared/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),Overlay=__webpack_require__("./src/shared/ui/Overlay/Overlay.tsx"),Portal=__webpack_require__("./src/shared/ui/Portal/Portal.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0;var useTheme=__webpack_require__("./src/shared/lib/hooks/useTheme/useTheme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Modal=function Modal(props){var lazy=props.lazy,isOpen=props.isOpen,onClose=props.onClose,children=props.children,className=props.className,theme=(0,useTheme.D)().theme,_useModal=function useModal(props){var isOpen=props.isOpen,onClose=props.onClose,_useState2=_slicedToArray((0,react.useState)(!1),2),isMounted=_useState2[0],setIsMounted=_useState2[1];(0,react.useEffect)((function(){isOpen&&setIsMounted(!0)}),[isOpen]);var onKeyDown=(0,react.useCallback)((function(e){"Escape"===e.key&&onClose()}),[onClose]);return(0,react.useEffect)((function(){!function escapeButtonCloseHandler(){window.addEventListener("keydown",onKeyDown)}()}),[onKeyDown]),{isMounted,closeHandler:function closeHandler(){onClose&&onClose()}}}({isOpen,onClose}),isMounted=_useModal.isMounted,closeHandler=_useModal.closeHandler,mods=_defineProperty({},Modal_Modal_module.opened,isOpen);return lazy&&!isMounted?null:(0,jsx_runtime.jsx)(Portal.Z,{element:document.body,children:(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(Modal_Modal_module.Modal,mods,[className,theme,"app_modal"]),children:[(0,jsx_runtime.jsx)(Overlay.h,{onClick:closeHandler}),(0,jsx_runtime.jsxs)("div",{className:Modal_Modal_module.content,children:[(0,jsx_runtime.jsx)(Button.$n,{className:Modal_Modal_module.button,theme:Button.Ox.CLEAR,onClick:closeHandler,children:(0,jsx_runtime.jsx)("span",{children:"✖"})}),children]})]})})}},"./src/shared/ui/Overlay/Overlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Overlay});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Overlay_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Overlay/Overlay.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Overlay_module.A,options);const Overlay_Overlay_module=Overlay_module.A&&Overlay_module.A.locals?Overlay_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Overlay=(0,react.memo)((function(props){var onClick=props.onClick,className=props.className;return(0,jsx_runtime.jsx)("div",{onClick,className:(0,classNames.x)(Overlay_Overlay_module.Overlay,{},[className])})}))},"./src/shared/ui/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Portal});var react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function Portal(_ref){var children=_ref.children,element=_ref.element;return(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children,element)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color);padding:5px 10px;transition:all .2s ease 0s}.src-shared-ui-Button-Button-module__Button--a4nOa:hover{opacity:.5}.src-shared-ui-Button-Button-module__Button--a4nOa:disabled{opacity:.5;cursor:not-allowed}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none;color:var(--primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);border-radius:3px;color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__outline_accent--w9P0q{border:1px solid var(--accent-color);border-radius:3px;color:var(--accent-color);background:none}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--bg-color);color:var(--primary-color);border:none;border-radius:3px}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none;border-radius:0 3px 3px 0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,cAAA,CACA,mCAAA,CACA,gBAAA,CACA,0BAAA,CAEA,yDACE,UAAA,CAGF,4DACE,UAAA,CACA,kBAAA,CAIJ,kDACE,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,0BAAA,CAGF,oDACE,qCAAA,CACA,iBAAA,CACA,0BAAA,CACA,eAAA,CAGF,2DACE,oCAAA,CACA,iBAAA,CACA,yBAAA,CACA,eAAA,CAGF,uDACE,gCAAA,CACA,0BAAA,CACA,WAAA,CACA,iBAAA,CAGF,+DACE,yCAAA,CACA,mCAAA,CACA,WAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,sGACE,yBAAA,CACA,0BAAA,CAGF,mDACE,SAAA,CAGF,mDACE,kBAAA,CAGF,mDACE,kBAAA,CAGF,oDACE,mBAAA",sourcesContent:[".Button {\n  cursor: pointer;\n  color: var(--inverted-primary-color);\n  padding: 5px 10px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.clear {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  color: var(--primary-color);\n}\n\n.outline {\n  border: 1px solid var(--primary-color);\n  border-radius: 3px;\n  color: var(--primary-color);\n  background: none;\n}\n\n.outline_accent {\n  border: 1px solid var(--accent-color);\n  border-radius: 3px;\n  color: var(--accent-color);\n  background: none;\n}\n\n.background {\n  background-color: var(--bg-color);\n  color: var(--primary-color);\n  border: none;\n  border-radius: 3px;\n}\n\n.backgroundInverted {\n  background-color: var(--inverted-bg-color);\n  color: var(--inverted-primary-color);\n  border: none;\n  border-radius: 0 3px 3px 0;\n}\n\n.square.size_m {\n  width: var(--font-line-m);\n  height: var(--font-line-m);\n}\n\n.square.size_l {\n  width: var(--font-line-l);\n  height: var(--font-line-l);\n}\n\n.square.size_xl {\n  width: var(--font-line-xl);\n  height: var(--font-line-xl);\n}\n\n.square {\n  padding: 0;\n}\n\n.size_m {\n  font: var(--font-m);\n}\n\n.size_l {\n  font: var(--font-l);\n}\n\n.size_xl {\n  font: var(--font-xl);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",outline_accent:"src-shared-ui-Button-Button-module__outline_accent--w9P0q",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",square:"src-shared-ui-Button-Button-module__square--pKS1A",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Modal-Modal-module__Modal--ESw4g{position:fixed;top:0;bottom:0;right:0;left:0;z-index:var(--modal-z-index);opacity:0;transition:all .2s ease 0s;pointer-events:none;display:flex;justify-content:center;align-items:center}.src-shared-ui-Modal-Modal-module__content--NxhSG{padding:20px;border-radius:10px;transition:transform .3s ease 0s;transform:scale(0.5);max-width:60%;background:var(--bg-color);flex:0 1 400px;margin:0 auto}.src-shared-ui-Modal-Modal-module__opened--RuLiu{opacity:1;pointer-events:auto;z-index:var(--modal-z-index);transition:all .2s ease 0s}.src-shared-ui-Modal-Modal-module__opened--RuLiu .src-shared-ui-Modal-Modal-module__content--NxhSG{transition:all .2s ease 0s;transform:scale(1)}.src-shared-ui-Modal-Modal-module__button--hnotl{position:absolute;top:5px;right:0;padding:0 10px}","",{version:3,sources:["webpack://./src/shared/ui/Modal/Modal.module.scss"],names:[],mappings:"AAAA,gDACE,cAAA,CACA,KAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CACA,4BAAA,CACA,SAAA,CACA,0BAAA,CACA,mBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGF,kDACE,YAAA,CACA,kBAAA,CACA,gCAAA,CACA,oBAAA,CACA,aAAA,CACA,0BAAA,CACA,cAAA,CACA,aAAA,CAGF,iDACE,SAAA,CACA,mBAAA,CACA,4BAAA,CACA,0BAAA,CAEA,mGACE,0BAAA,CACA,kBAAA,CAIJ,iDACE,iBAAA,CACA,OAAA,CACA,OAAA,CACA,cAAA",sourcesContent:[".Modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: var(--modal-z-index);\n  opacity: 0;\n  transition: all 0.2s ease 0s;\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  padding: 20px;\n  border-radius: 10px;\n  transition: transform 0.3s ease 0s;\n  transform: scale(0.5);\n  max-width: 60%;\n  background: var(--bg-color);\n  flex: 0 1 400px;\n  margin: 0 auto;\n}\n\n.opened {\n  opacity: 1;\n  pointer-events: auto;\n  z-index: var(--modal-z-index);\n  transition: all 0.2s ease 0s;\n\n  .content {\n    transition: all 0.2s ease 0s;\n    transform: scale(1);\n  }\n}\n\n.button {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  padding: 0 10px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-shared-ui-Modal-Modal-module__Modal--ESw4g",content:"src-shared-ui-Modal-Modal-module__content--NxhSG",opened:"src-shared-ui-Modal-Modal-module__opened--RuLiu",button:"src-shared-ui-Modal-Modal-module__button--hnotl"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Overlay/Overlay.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Overlay-Overlay-module__Overlay--gCtUB{display:flex;align-items:center;justify-content:center;position:fixed;top:0;bottom:0;right:0;left:0;z-index:var(--overlay-z-index);cursor:pointer;background-color:var(--overlay-color)}","",{version:3,sources:["webpack://./src/shared/ui/Overlay/Overlay.module.scss"],names:[],mappings:"AAAA,sDACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,KAAA,CACA,QAAA,CACA,OAAA,CACA,MAAA,CACA,8BAAA,CACA,cAAA,CACA,qCAAA",sourcesContent:[".Overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: var(--overlay-z-index);\n  cursor: pointer;\n  background-color: var(--overlay-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Overlay:"src-shared-ui-Overlay-Overlay-module__Overlay--gCtUB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);