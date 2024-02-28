(self.webpackChunkproduction_project_code_course = self.webpackChunkproduction_project_code_course || []).push([[2860], {
  './src/pages/MainPage/ui/MainPage.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
      Dark: () => Dark, Normal: () => Normal, __namedExportsOrder: () => __namedExportsOrder, default: () => __WEBPACK_DEFAULT_EXPORT__,
    }); __webpack_require__('./node_modules/react/index.js'); const shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx'); const app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'); const shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx'); const _MainPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./src/pages/MainPage/ui/MainPage.tsx'); const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/react/jsx-runtime.js'); const __WEBPACK_DEFAULT_EXPORT__ = { title: 'pages/MainPage', component: _MainPage__WEBPACK_IMPORTED_MODULE_4__.default, argTypes: { backgroundColor: { control: 'color' } } }; const Template = function Template() { return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MainPage__WEBPACK_IMPORTED_MODULE_4__.default, {}); }; var Normal = Template.bind({}); Normal.args = {}, Normal.decorators = [(0, shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.y)({ counter: { value: 0 } })]; var Dark = Template.bind({}); Dark.args = {}, Dark.decorators = [(0, shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.So.DARK), (0, shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.y)({ counter: { value: 0 } })], Normal.parameters = { ...Normal.parameters, docs: { ...Normal.parameters?.docs, source: { originalSource: '() => <MainPage />', ...Normal.parameters?.docs?.source } } }, Dark.parameters = { ...Dark.parameters, docs: { ...Dark.parameters?.docs, source: { originalSource: '() => <MainPage />', ...Dark.parameters?.docs?.source } } }; const __namedExportsOrder = ['Normal', 'Dark'];
  },
  './src/pages/MainPage/ui/MainPage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ }); const entities_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/entities/Counter/index.ts'); const react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react-i18next/dist/es/useTranslation.js'); const widgets_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/widgets/Page/Page.tsx'); const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js'); const __WEBPACK_DEFAULT_EXPORT__ = function MainPage() { const { t } = (0, react_i18next__WEBPACK_IMPORTED_MODULE_3__.G)(); return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_1__.K, { children: [t('glavnaya-stranica'), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(entities_Counter__WEBPACK_IMPORTED_MODULE_0__.k, {})] }); }; },
  './src/widgets/Page/Page.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.d(__webpack_exports__, { g: () => PAGE_ID, K: () => Page }); const classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'); const react = __webpack_require__('./node_modules/react/index.js'); function _slicedToArray(arr, i) { return (function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }(arr)) || (function _iterableToArrayLimit(r, l) { let t = r == null ? null : typeof Symbol !== 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) { let e; let n; let i; let u; const a = []; let f = !0; let o = !1; try { if (i = (t = t.call(r)).next, l === 0) { if (Object(t) !== t) return; f = !1; } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }(arr, i)) || (function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }(arr, i)) || (function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function _arrayLikeToArray(arr, len) { (len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i]; return arr2; } const useAppDispatch = __webpack_require__('./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts'); const dist = __webpack_require__('./node_modules/react-router/dist/index.js'); const useInitialEffect = __webpack_require__('./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts'); const es = __webpack_require__('./node_modules/react-redux/es/index.js'); const injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'); const injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag); const styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'); const styleDomAPI_default = __webpack_require__.n(styleDomAPI); const insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'); const insertBySelector_default = __webpack_require__.n(insertBySelector); const setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'); const setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes); const insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'); const insertStyleElement_default = __webpack_require__.n(insertStyleElement); const styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'); const styleTagTransform_default = __webpack_require__.n(styleTagTransform); const Page_module = __webpack_require__('./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss'); const options = {}; options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, 'head'), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default(); injectStylesIntoStyleTag_default()(Page_module.c, options); const Page_Page_module = Page_module.c && Page_module.c.locals ? Page_module.c.locals : void 0; const ScrollSaver = __webpack_require__('./src/widgets/Page/ScrollSaver/index.ts'); const jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'); var PAGE_ID = 'PAGE_ID'; var Page = (0, react.memo)(((props) => {
      const { children } = props; const { className } = props; const { onScrollEnd } = props; const wrapperRef = (0, react.useRef)(); const triggerRef = (0, react.useRef)(); const dispatch = (0, useAppDispatch.A)(); const { pathname } = (0, dist.IT)(); const
        scrollPosition = (0, es.w1)(((state) => { return (0, ScrollSaver.uE)(state, pathname); })); !(function useInfiniteScroll(_ref) {
        const { callback } = _ref; const { wrapperRef } = _ref; const
          { triggerRef } = _ref; (0, react.useEffect)((() => { const wrapperElement = wrapperRef.current; const triggerElement = triggerRef.current; let observer = null; return callback && (observer = new IntersectionObserver(((_ref2) => { _slicedToArray(_ref2, 1)[0].isIntersecting && callback(); }), { root: wrapperElement, rootMargin: '0px', threshold: 1 })).observe(triggerElement), function () { observer && triggerElement && observer.unobserve(triggerElement); }; }), [callback, triggerRef, wrapperRef]);
      }({ wrapperRef, triggerRef, callback: onScrollEnd })), (0, useInitialEffect.w)((() => { wrapperRef.current.scrollTop = scrollPosition; })); const onScroll = (function useThrottle(callback, delay) { const throttleRef = (0, react.useRef)(!1); return (0, react.useCallback)((function () { throttleRef.current || (callback.apply(void 0, arguments), throttleRef.current = !0), setTimeout((() => { throttleRef.current = !1; }), delay); }), [callback, delay]); }(((e) => { dispatch(ScrollSaver._y.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname })); }), 500)); return (0, jsx_runtime.jsxs)('main', {
        onScroll, ref: wrapperRef, className: (0, classNames.g)(Page_Page_module.Page, {}, [className]), id: PAGE_ID, children: [children, onScrollEnd ? (0, jsx_runtime.jsx)('div', { ref: triggerRef }) : null],
      });
    }));
  },
  './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss': (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.d(__webpack_exports__, { c: () => __WEBPACK_DEFAULT_EXPORT__ }); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/css-loader/dist/runtime/sourceMaps.js'); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__); const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'); const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); ___CSS_LOADER_EXPORT___.push([module.id, '.src-widgets-Page-Page-module__Page--a83jD{flex-grow:1;padding:20px 20px 15px 50px;height:calc(100vh - var(--navbar-height));overflow-y:auto;overflow-x:hidden}', '', {
      version: 3, sources: ['webpack://./src/widgets/Page/Page.module.scss'], names: [], mappings: 'AAAA,2CACE,WAAA,CACA,2BAAA,CACA,yCAAA,CACA,eAAA,CACA,iBAAA', sourcesContent: ['.Page {\n  flex-grow: 1;\n  padding: 20px 20px 15px 50px;\n  height: calc(100vh - var(--navbar-height));\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n'], sourceRoot: '',
    }]), ___CSS_LOADER_EXPORT___.locals = { Page: 'src-widgets-Page-Page-module__Page--a83jD' }; const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
  },
}]);