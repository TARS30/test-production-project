"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[2014],{"./src/pages/AboutPage/ui/AboutPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AboutPage_stories});var theme=__webpack_require__("./src/shared/const/theme.ts"),StoreDecorator=__webpack_require__("./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx"),ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Page=__webpack_require__("./src/widgets/Page/Page.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AboutPage_stories={title:"pages/AboutPage",component:function AboutPage(){var t=(0,useTranslation.B)().t;return document.title="About us",(0,jsx_runtime.jsxs)(Page.Y,{"data-testid":"AboutPage",children:[(0,jsx_runtime.jsx)("div",{children:t("cat")}),(0,jsx_runtime.jsx)("div",{children:t("cat")}),(0,jsx_runtime.jsx)("div",{children:t("cat")})]})},argTypes:{}};var Normal={args:{},decorators:[(0,StoreDecorator.R)({})]},Dark={args:{},decorators:[(0,ThemeDecorator.n)(theme.S.DARK),(0,StoreDecorator.R)({})]};Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [StoreDecorator({})]\n}",...Normal.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","Dark"]},"./src/widgets/Page/Page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PAGE_ID,Y:()=>Page});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),useInitialEffect=__webpack_require__("./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Page_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Page_module.A,options);const Page_Page_module=Page_module.A&&Page_module.A.locals?Page_module.A.locals:void 0;var ScrollSaver=__webpack_require__("./src/widgets/Page/ScrollSaver/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PAGE_ID="PAGE_ID",Page=(0,react.memo)((function(props){var _props$dataTestid,children=props.children,className=props.className,onScrollEnd=props.onScrollEnd,wrapperRef=(0,react.useRef)(),triggerRef=(0,react.useRef)(),dispatch=(0,useAppDispatch.j)(),pathname=(0,dist.zy)().pathname,scrollPosition=(0,es.d4)((function(state){return(0,ScrollSaver.F)(state,pathname)}));!function useInfiniteScroll(_ref){var callback=_ref.callback,wrapperRef=_ref.wrapperRef,triggerRef=_ref.triggerRef;(0,react.useEffect)((function(){var wrapperElement=wrapperRef.current,triggerElement=triggerRef.current,observer=null;return callback&&(observer=new IntersectionObserver((function(_ref2){_slicedToArray(_ref2,1)[0].isIntersecting&&callback()}),{root:wrapperElement,rootMargin:"0px",threshold:1})).observe(triggerElement),function(){observer&&triggerElement&&observer.unobserve(triggerElement)}}),[callback,triggerRef,wrapperRef])}({wrapperRef,triggerRef,callback:onScrollEnd}),(0,useInitialEffect.b)((function(){wrapperRef.current.scrollTop=scrollPosition}));var onScroll=function useThrottle(callback,delay){var throttleRef=(0,react.useRef)(!1);return(0,react.useCallback)((function(){throttleRef.current||(callback.apply(void 0,arguments),throttleRef.current=!0),setTimeout((function(){throttleRef.current=!1}),delay)}),[callback,delay])}((function(e){dispatch(ScrollSaver.wx.setScrollPosition({position:e.currentTarget.scrollTop,path:pathname}))}),500);return(0,jsx_runtime.jsxs)("main",{"data-testid":null!==(_props$dataTestid=props["data-testid"])&&void 0!==_props$dataTestid?_props$dataTestid:"Page",onScroll,ref:wrapperRef,className:(0,classNames.x)(Page_Page_module.Page,{},[className]),id:PAGE_ID,children:[children,onScrollEnd?(0,jsx_runtime.jsx)("div",{ref:triggerRef}):null]})}))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Page-Page-module__Page--a83jD{flex-grow:1;padding:20px 20px 15px 50px;height:calc(100vh - var(--navbar-height));overflow-y:auto;overflow-x:hidden;scrollbar-color:var(--accent-color) var(--inverted-bg-color);scrollbar-width:thin}","",{version:3,sources:["webpack://./src/widgets/Page/Page.module.scss"],names:[],mappings:"AAAA,2CACE,WAAA,CACA,2BAAA,CACA,yCAAA,CACA,eAAA,CACA,iBAAA,CACA,4DAAA,CACA,oBAAA",sourcesContent:[".Page {\n  flex-grow: 1;\n  padding: 20px 20px 15px 50px;\n  height: calc(100vh - var(--navbar-height));\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-color: var(--accent-color) var(--inverted-bg-color);\n  scrollbar-width: thin;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Page:"src-widgets-Page-Page-module__Page--a83jD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);