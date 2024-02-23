"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[7767,1052],{"./src/pages/ProfilePage/ui/ProfilePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ProfilePage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/ProfilePage/ui/ProfilePage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"pages/ProfilePage",component:_ProfilePage__WEBPACK_IMPORTED_MODULE_0__.default,argTypes:{backgroundColor:{control:"color"}}};var Normal=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ProfilePage__WEBPACK_IMPORTED_MODULE_0__.default,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))}.bind({});Normal.args={},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <ProfilePage {...args} />",...Normal.parameters?.docs?.source}}};const __namedExportsOrder=["Normal"]},"./src/entitiess/User/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q5:()=>UserRole,Go:()=>getUserAuthData,C6:()=>isUserAdmin,_5:()=>isUserManager,By:()=>userActions,If:()=>userReducer});var getUserAuthData=function getUserAuthData(state){return state.user.authData},es=__webpack_require__("./node_modules/reselect/es/index.js"),UserRole=function(UserRole){return UserRole.ADMIN="ADMIN",UserRole.MANAGER="MANAGER",UserRole.USER="USER",UserRole}({}),getUserRole=function getUserRole(state){var _state$user$authData;return null===(_state$user$authData=state.user.authData)||void 0===_state$user$authData?void 0:_state$user$authData.role},isUserAdmin=(0,es.M3)(getUserRole,(function(roles){return Boolean(null==roles?void 0:roles.includes(UserRole.ADMIN))})),isUserManager=(0,es.M3)(getUserRole,(function(roles){return Boolean(null==roles?void 0:roles.includes(UserRole.MANAGER))})),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),const_localStorage=__webpack_require__("./src/shared/const/localStorage.ts"),userSlice=(0,redux_toolkit_esm.is)({name:"user",initialState:{_inited:!1},reducers:{setAuthData:function setAuthData(state,action){state.authData=action.payload},initAuthData:function initAuthData(state){var user=localStorage.getItem(const_localStorage.a2);user&&(state.authData=JSON.parse(user)),state._inited=!0},logout:function logout(state){state.authData=void 0,localStorage.removeItem(const_localStorage.a2)}}}),userActions=userSlice.actions,userReducer=userSlice.reducer},"./src/pages/ProfilePage/ui/ProfilePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var features_EditableProfileCard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/EditableProfileCard/index.ts"),react_i18next__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router/dist/index.js"),shared_ui_Stack__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/Stack/index.ts"),shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/Text/Text.tsx"),widgets_Page_Page__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/widgets/Page/Page.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=function ProfilePage(_ref){var className=_ref.className,id=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.W4)().id,t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.G)().t;return id?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_3__.K,{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_ui_Stack__WEBPACK_IMPORTED_MODULE_1__.y,{wide:!0,gap:"16",justify:"spaceBetween",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(features_EditableProfileCard__WEBPACK_IMPORTED_MODULE_0__.cp,{id})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_2__.a,{text:t("error-occured")})}},"./src/shared/const/localStorage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a2:()=>USER_LOCALSTORAGE_KEY,cr:()=>USER_COUNTER_KEY,sL:()=>ARTICLE_VIEW_LOCALSTORAGE_KEY});var USER_LOCALSTORAGE_KEY="user",ARTICLE_VIEW_LOCALSTORAGE_KEY="article_view",USER_COUNTER_KEY="counter"},"./src/shared/ui/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Avatar,K:()=>AvatarSizes});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.c,options);const Avatar_Avatar_module=Avatar_module.c&&Avatar_module.c.locals?Avatar_module.c.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AvatarSizes=function(AvatarSizes){return AvatarSizes[AvatarSizes.BIG=300]="BIG",AvatarSizes[AvatarSizes.SMALL=50]="SMALL",AvatarSizes[AvatarSizes.PRIMARY=100]="PRIMARY",AvatarSizes[AvatarSizes.EXTRA_SMALL=30]="EXTRA_SMALL",AvatarSizes}({}),Avatar=function Avatar(_ref){var src=_ref.src,alt=_ref.alt,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?100:_ref$size,addStyle=(0,react.useMemo)((function(){return{width:size,height:size}}),[size]);return(0,jsx_runtime.jsx)("img",{className:(0,classNames.g)(Avatar_Avatar_module.Avatar,{},[className]),alt,src,style:addStyle})}},"./src/shared/ui/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Text,Ml:()=>TextAlign,gV:()=>TextSize,IN:()=>TextTheme});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.c,options);const Text_Text_module=Text_module.c&&Text_module.c.locals?Text_module.c.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TextTheme=function(TextTheme){return TextTheme.PRIMARY="primary",TextTheme.INVERTED="inverted",TextTheme.ERROR="error",TextTheme.CORRECT="correct",TextTheme}({}),TextAlign=function(TextAlign){return TextAlign.CENTER="center",TextAlign.RIGHT="right",TextAlign.LEFT="left",TextAlign}({}),TextSize=function(TextSize){return TextSize.M="size_m",TextSize.L="size_l",TextSize.S="size_s",TextSize}({}),mapSizeToHeaderTag=_defineProperty(_defineProperty(_defineProperty({},TextSize.S,"h3"),TextSize.M,"h2"),TextSize.L,"h1"),Text=(0,react.memo)((function(props){var text=props.text,title=props.title,className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?TextTheme.PRIMARY:_props$theme,_props$align=props.align,align=void 0===_props$align?TextAlign.LEFT:_props$align,_props$textSize=props.textSize,textSize=void 0===_props$textSize?TextSize.M:_props$textSize,_props$dataTestid=props["data-testid"],dataTestId=void 0===_props$dataTestid?"Text":_props$dataTestid,HeaderTag=mapSizeToHeaderTag[textSize],mods=_defineProperty(_defineProperty(_defineProperty({},Text_Text_module[theme],!0),Text_Text_module[align],!0),Text_Text_module[textSize],!0);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.g)(Text_Text_module.Text,mods,[className]),children:[title&&(0,jsx_runtime.jsx)(HeaderTag,{"data-testid":"".concat(dataTestId,".Header"),className:Text_Text_module.title,children:title}),text&&(0,jsx_runtime.jsx)("p",{"data-testid":"".concat(dataTestId,".Text"),className:Text_Text_module.text,children:text})]})}))},"./src/widgets/Page/Page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PAGE_ID,K:()=>Page});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),useInitialEffect=__webpack_require__("./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Page_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Page_module.c,options);const Page_Page_module=Page_module.c&&Page_module.c.locals?Page_module.c.locals:void 0;var ScrollSaver=__webpack_require__("./src/widgets/Page/ScrollSaver/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PAGE_ID="PAGE_ID",Page=(0,react.memo)((function(props){var children=props.children,className=props.className,onScrollEnd=props.onScrollEnd,wrapperRef=(0,react.useRef)(),triggerRef=(0,react.useRef)(),dispatch=(0,useAppDispatch.A)(),pathname=(0,dist.IT)().pathname,scrollPosition=(0,es.w1)((function(state){return(0,ScrollSaver.uE)(state,pathname)}));!function useInfiniteScroll(_ref){var callback=_ref.callback,wrapperRef=_ref.wrapperRef,triggerRef=_ref.triggerRef;(0,react.useEffect)((function(){var wrapperElement=wrapperRef.current,triggerElement=triggerRef.current,observer=null;return callback&&(observer=new IntersectionObserver((function(_ref2){_slicedToArray(_ref2,1)[0].isIntersecting&&callback()}),{root:wrapperElement,rootMargin:"0px",threshold:1})).observe(triggerElement),function(){observer&&triggerElement&&observer.unobserve(triggerElement)}}),[callback,triggerRef,wrapperRef])}({wrapperRef,triggerRef,callback:onScrollEnd}),(0,useInitialEffect.w)((function(){wrapperRef.current.scrollTop=scrollPosition}));var onScroll=function useThrottle(callback,delay){var throttleRef=(0,react.useRef)(!1);return(0,react.useCallback)((function(){throttleRef.current||(callback.apply(void 0,arguments),throttleRef.current=!0),setTimeout((function(){throttleRef.current=!1}),delay)}),[callback,delay])}((function(e){dispatch(ScrollSaver._y.setScrollPosition({position:e.currentTarget.scrollTop,path:pathname}))}),500);return(0,jsx_runtime.jsxs)("main",{onScroll,ref:wrapperRef,className:(0,classNames.g)(Page_Page_module.Page,{},[className]),id:PAGE_ID,children:[children,onScrollEnd?(0,jsx_runtime.jsx)("div",{ref:triggerRef}):null]})}))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw{max-width:100px;max-height:100px;border:1px solid var(--primary-color);padding:2px;border-radius:50%}","",{version:3,sources:["webpack://./src/shared/ui/Avatar/Avatar.module.scss"],names:[],mappings:"AAAA,mDACE,eAAA,CACA,gBAAA,CACA,qCAAA,CACA,WAAA,CACA,iBAAA",sourcesContent:[".Avatar {\n  max-width: 100px;\n  max-height: 100px;\n  border: 1px solid var(--primary-color);\n  padding: 2px;\n  border-radius: 50%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Avatar:"src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-l);color:var(--primary-color)}.src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-m);color:var(--secondary-color)}.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__title--ikI7V{color:var(--error-color)}.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__text--uNJee{color:var(--error-secondary-color)}.src-shared-ui-Text-Text-module__correct--hDQpt .src-shared-ui-Text-Text-module__text--uNJee{color:green}.src-shared-ui-Text-Text-module__inverted--fgY32 .src-shared-ui-Text-Text-module__title--ikI7V{color:var(--inverted-primary-color)}.src-shared-ui-Text-Text-module__inverted--fgY32 .src-shared-ui-Text-Text-module__text--uNJee{color:var(--inverted-secondary-color)}.src-shared-ui-Text-Text-module__left--dBqPI{text-align:left}.src-shared-ui-Text-Text-module__right--j4UBr{text-align:right}.src-shared-ui-Text-Text-module__center--iJw6m{text-align:center}.src-shared-ui-Text-Text-module__size_m--AOVZB .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-l)}.src-shared-ui-Text-Text-module__size_m--AOVZB .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-m)}.src-shared-ui-Text-Text-module__size_l--U6JpO .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-xl)}.src-shared-ui-Text-Text-module__size_l--U6JpO .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-l)}.src-shared-ui-Text-Text-module__size_s--JVXO2 .src-shared-ui-Text-Text-module__title--ikI7V{font:var(--font-m)}.src-shared-ui-Text-Text-module__size_s--JVXO2 .src-shared-ui-Text-Text-module__text--uNJee{font:var(--font-s)}","",{version:3,sources:["webpack://./src/shared/ui/Text/Text.module.scss"],names:[],mappings:"AAAA,8CACE,kBAAA,CACA,0BAAA,CAGF,6CACE,kBAAA,CACA,4BAAA,CAIA,4FACE,wBAAA,CAGF,2FACE,kCAAA,CAKF,6FACE,WAAA,CAKF,+FACE,mCAAA,CAGF,8FACE,qCAAA,CAIJ,6CACE,eAAA,CAGF,8CACE,gBAAA,CAGF,+CACE,iBAAA,CAIA,6FACE,kBAAA,CAGF,4FACE,kBAAA,CAKF,6FACE,mBAAA,CAGF,4FACE,kBAAA,CAKF,6FACE,kBAAA,CAGF,4FACE,kBAAA",sourcesContent:[".title {\n  font: var(--font-l);\n  color: var(--primary-color);\n}\n\n.text {\n  font: var(--font-m);\n  color: var(--secondary-color);\n}\n\n.error {\n  .title {\n    color: var(--error-color);\n  }\n\n  .text {\n    color: var(--error-secondary-color);\n  }\n}\n\n.correct {\n  .text {\n    color: green;\n  }\n}\n\n.inverted {\n  .title {\n    color: var(--inverted-primary-color);\n  }\n\n  .text {\n    color: var(--inverted-secondary-color);\n  }\n}\n\n.left {\n  text-align: left;\n}\n\n.right {\n  text-align: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.size_m {\n  .title {\n    font: var(--font-l);\n  }\n\n  .text {\n    font: var(--font-m);\n  }\n}\n\n.size_l {\n  .title {\n    font: var(--font-xl);\n  }\n\n  .text {\n    font: var(--font-l);\n  }\n}\n\n.size_s {\n  .title {\n    font: var(--font-m);\n  }\n\n  .text {\n    font: var(--font-s);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={title:"src-shared-ui-Text-Text-module__title--ikI7V",text:"src-shared-ui-Text-Text-module__text--uNJee",error:"src-shared-ui-Text-Text-module__error--F9oLX",correct:"src-shared-ui-Text-Text-module__correct--hDQpt",inverted:"src-shared-ui-Text-Text-module__inverted--fgY32",left:"src-shared-ui-Text-Text-module__left--dBqPI",right:"src-shared-ui-Text-Text-module__right--j4UBr",center:"src-shared-ui-Text-Text-module__center--iJw6m",size_m:"src-shared-ui-Text-Text-module__size_m--AOVZB",size_l:"src-shared-ui-Text-Text-module__size_l--U6JpO",size_s:"src-shared-ui-Text-Text-module__size_s--JVXO2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Page-Page-module__Page--a83jD{flex-grow:1;padding:20px 20px 15px 50px;height:calc(100vh - var(--navbar-height));overflow-y:auto;overflow-x:hidden}","",{version:3,sources:["webpack://./src/widgets/Page/Page.module.scss"],names:[],mappings:"AAAA,2CACE,WAAA,CACA,2BAAA,CACA,yCAAA,CACA,eAAA,CACA,iBAAA",sourcesContent:[".Page {\n  flex-grow: 1;\n  padding: 20px 20px 15px 50px;\n  height: calc(100vh - var(--navbar-height));\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Page:"src-widgets-Page-Page-module__Page--a83jD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);