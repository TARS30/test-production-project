"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[9991],{"./src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArticleSortSelector_stories});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),Select=__webpack_require__("./src/shared/ui/Select/Select.tsx"),Stack=__webpack_require__("./src/shared/ui/Stack/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ArticleSortSelector_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ArticleSortSelector_module.A,options);const ArticleSortSelector_ArticleSortSelector_module=ArticleSortSelector_module.A&&ArticleSortSelector_module.A.locals?ArticleSortSelector_module.A.locals:void 0;var Article=__webpack_require__("./src/entities/Article/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ArticleSortSelector=function ArticleSortSelector(props){var sort=props.sort,order=props.order,className=props.className,onChangeSort=props.onChangeSort,onChangeOrder=props.onChangeOrder,t=(0,useTranslation.B)().t,orderOptions=(0,react.useMemo)((function(){return[{value:"desc",content:t("descending")},{value:"asc",content:t("ascending")}]}),[t]),sortFieldOptions=(0,react.useMemo)((function(){return[{value:Article.N9.CREATED_AT,content:t("date-sozdaniya")},{value:Article.N9.TITLE,content:t("nazvaniyu")},{value:Article.N9.VIEWS,content:t("chislu-prosmotrov")}]}),[t]);return(0,jsx_runtime.jsxs)(Stack.z,{gap:"8",className:(0,classNames.x)(ArticleSortSelector_ArticleSortSelector_module.ArticleSortSelector,{},[className]),children:[(0,jsx_runtime.jsx)(Select.l,{value:sort,onChange:onChangeSort,options:sortFieldOptions,label:t("sort-by")}),(0,jsx_runtime.jsx)(Select.l,{value:order,onChange:onChangeOrder,options:orderOptions})]})};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ArticleSortSelector_stories={title:"entities/Article/ArticleSortSelector",component:ArticleSortSelector,args:{}};var Story=function Template(args){return(0,jsx_runtime.jsx)(ArticleSortSelector,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))}.bind({});Story.args={},Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"args => <ArticleSortSelector {...args} />",...Story.parameters?.docs?.source}}};const __namedExportsOrder=["Story"]},"./src/shared/ui/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select});var react=__webpack_require__("./node_modules/react/index.js"),Stack=__webpack_require__("./src/shared/ui/Stack/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Select_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Select_module.A,options);const Select_Select_module=Select_module.A&&Select_module.A.locals?Select_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Select=function Select(_ref){var value=_ref.value,label=_ref.label,options=_ref.options,readonly=_ref.readonly,onChange=_ref.onChange,optionsList=(_ref.className,(0,react.useMemo)((function(){return null==options?void 0:options.map((function(opt){return(0,jsx_runtime.jsx)("option",{value:opt.value,children:opt.content},opt.value)}))}),[options]));return(0,jsx_runtime.jsxs)(Stack.z,{gap:"4",children:[label&&(0,jsx_runtime.jsx)("span",{className:Select_Select_module.label,children:label}),(0,jsx_runtime.jsx)("select",{value,onChange:function onChangeHandler(e){null==onChange||onChange(e.target.value)},disabled:readonly,children:optionsList})]})}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-features-ArticleSortSelector-ui-ArticleSortSelector-ArticleSortSelector-module__ArticleSortSelector--NPdgT select{border:1px solid var(--inverted-primary-color)}","",{version:3,sources:["webpack://./src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.module.scss"],names:[],mappings:"AACE,uHACE,8CAAA",sourcesContent:[".ArticleSortSelector {\n  & select {\n    border: 1px solid var(--inverted-primary-color);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ArticleSortSelector:"src-features-ArticleSortSelector-ui-ArticleSortSelector-ArticleSortSelector-module__ArticleSortSelector--NPdgT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Select-Select-module__Select--eXu4w select{background:none;border-radius:3px;outline:none;color:var(--primary-color);padding:2px 10px 2px 2px;border:1px solid var(--primary-color)}.src-shared-ui-Select-Select-module__Select--eXu4w select option{background:var(--inverted-bg-color);color:var(--primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/Select/Select.module.scss"],names:[],mappings:"AACE,0DACE,eAAA,CACA,iBAAA,CACA,YAAA,CACA,0BAAA,CACA,wBAAA,CACA,qCAAA,CAEA,iEACE,mCAAA,CACA,0BAAA",sourcesContent:[".Select {\n  select {\n    background: none;\n    border-radius: 3px;\n    outline: none;\n    color: var(--primary-color);\n    padding: 2px 10px 2px 2px;\n    border: 1px solid var(--primary-color);\n\n    option {\n      background: var(--inverted-bg-color);\n      color: var(--primary-color);\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Select:"src-shared-ui-Select-Select-module__Select--eXu4w"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);