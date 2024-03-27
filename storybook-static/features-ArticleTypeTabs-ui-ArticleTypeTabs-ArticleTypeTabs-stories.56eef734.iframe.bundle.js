"use strict";(self.webpackChunkproduction_project_code_course=self.webpackChunkproduction_project_code_course||[]).push([[3490],{"./src/features/ArticleTypeTabs/ui/ArticleTypeTabs/ArticleTypeTabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArticleTypeTabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),Tabs=__webpack_require__("./src/shared/ui/Tabs/Tabs.tsx"),Article=__webpack_require__("./src/entities/Article/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ArticleTypeTabs_stories={title:"entities/Article/ArticleTypeTabs",component:function ArticleTypeTabs(props){var className=props.className,value=props.value,onChangeType=props.onChangeType,t=(0,useTranslation.B)().t,typeTabs=(0,react.useMemo)((function(){return[{value:Article.PF.ALL,content:t("all")},{value:Article.PF.IT,content:"IT"},{value:Article.PF.ECONOMICS,content:t("economics")},{value:Article.PF.SCIENCE,content:t("science")}]}),[t]),onTabChange=(0,react.useCallback)((function(newType){onChangeType(newType.value)}),[onChangeType]);return(0,jsx_runtime.jsx)(Tabs.t,{tabs:typeTabs,value,onTabClick:onTabChange,className:(0,classNames.x)("",{},[className])})},argTypes:{}};var Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/shared/ui/Tabs/Tabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Tabs});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tabs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Tabs/Tabs.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tabs_module.A,options);const Tabs_Tabs_module=Tabs_module.A&&Tabs_module.A.locals?Tabs_module.A.locals:void 0;var Card=__webpack_require__("./src/shared/ui/Card/Card.tsx"),HStack=__webpack_require__("./src/shared/ui/Stack/HStack/HStack.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tabs=function Tabs(props){var className=props.className,value=props.value,tabs=props.tabs,onTabClick=props.onTabClick,clickHandle=(0,react.useCallback)((function(tab){return function(){onTabClick(tab)}}),[onTabClick]);return(0,jsx_runtime.jsx)(HStack.z,{gap:"8",className:(0,classNames.x)(Tabs_Tabs_module.Tabs,{},[className]),children:tabs.map((function(tab){return(0,jsx_runtime.jsx)(Card.Z,{theme:tab.value===value?Card.M.NORMAL:Card.M.OUTLINED,className:Tabs_Tabs_module.tab,onClick:clickHandle(tab),children:tab.content},tab.value)}))})}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Tabs/Tabs.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Tabs-Tabs-module__Tabs--bXYDR{cursor:pointer}.src-shared-ui-Tabs-Tabs-module__tab--gbgA1{border:none;padding:5px}","",{version:3,sources:["webpack://./src/shared/ui/Tabs/Tabs.module.scss"],names:[],mappings:"AAAA,6CACE,cAAA,CAGF,4CACE,WAAA,CACA,WAAA",sourcesContent:[".Tabs {\n  cursor: pointer;\n}\n\n.tab {\n  border: none;\n  padding: 5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Tabs:"src-shared-ui-Tabs-Tabs-module__Tabs--bXYDR",tab:"src-shared-ui-Tabs-Tabs-module__tab--gbgA1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);