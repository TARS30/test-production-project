(self.webpackChunkproduction_project_code_course = self.webpackChunkproduction_project_code_course || []).push([[7212], {
  './src/entities/Counter/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.d(__webpack_exports__, { k: () => Counter, g: () => counterReducer }); const redux_toolkit_esm = __webpack_require__('./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js'); const const_localStorage = __webpack_require__('./src/shared/const/localStorage.ts'); const counterSlice = (0, redux_toolkit_esm.is)({ name: 'counter', initialState: { value: 0 }, reducers: { increment: function increment(state) { state.value += 1, localStorage.setItem(const_localStorage.cr, ''.concat(state.value)); }, decrement: function decrement(state) { state.value -= 1, localStorage.setItem(const_localStorage.cr, ''.concat(state.value)); }, reset: function reset(state) { state.value = 0, localStorage.setItem(const_localStorage.cr, ''.concat(state.value)); } } }); const counterActions = counterSlice.actions; var counterReducer = counterSlice.reducer; counterSlice.reducer; const react = __webpack_require__('./node_modules/react/index.js'); const es = __webpack_require__('./node_modules/react-redux/es/index.js'); const Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'); const Text = __webpack_require__('./src/shared/ui/Text/Text.tsx'); const getCounterValue = (0, __webpack_require__('./node_modules/reselect/es/index.js').M3)(((state) => { return state.counter; }), ((counter) => { return counter.value; })); const jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'); var Counter = function Counter() { const dispatch = (0, es.OY)(); const counterValue = (0, es.w1)(getCounterValue); (0, react.useEffect)((() => { localStorage.setItem(const_localStorage.cr, '0'); }), []); const counterLessZero = counterValue <= -1; const counterLessMinusTwo = counterValue < -2; const counterLessMinusFive = counterValue < -5; const counterMoreThanOne = counterValue > 0; const counterIsZero = counterValue === 0; const isVisible = counterMoreThanOne || !counterLessMinusFive; return (0, jsx_runtime.jsxs)('div', { children: [isVisible ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0, jsx_runtime.jsx)('h1', { 'data-testid': 'value-title', children: counterValue }), (0, jsx_runtime.jsx)(Button.q, { 'data-testid': 'increment-btn', onClick: function increment() { dispatch(counterActions.increment()); }, children: '+' }), (0, jsx_runtime.jsx)(Button.q, { 'data-testid': 'decrement-btn', onClick: function decrement() { dispatch(counterActions.decrement()); }, children: '-' }), counterMoreThanOne && (0, jsx_runtime.jsx)(Text.a, { theme: Text.IN.CORRECT, text: 'ОТАК НОМАЛЬНА' }), counterIsZero && (0, jsx_runtime.jsx)(Text.a, { text: 'ZERO' })] }) : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0, jsx_runtime.jsx)(Text.a, { text: 'Ф - ФСЁ. А ХУЛЬ ТЫ ДУМАЛ?' }), (0, jsx_runtime.jsx)(Button.q, { onClick: function reset() { dispatch(counterActions.reset()); }, children: 'reset button' })] }), counterLessZero && !counterLessMinusTwo && !counterLessMinusFive && (0, jsx_runtime.jsx)(Text.a, { theme: Text.IN.ERROR, text: 'ТЫ ШО ЕБАНУТЫЙ В МИНУС СЧЕТЧИК СТАВИТЬ?' }), counterLessMinusTwo && !counterLessMinusFive && (0, jsx_runtime.jsx)(Text.a, { text: 'Э НАХОЙ, Я ПОСЛЕ ПЯТИ СЪЁБУЮ', theme: Text.IN.ERROR })] }); }; },
  './src/pages/MainPage/ui/MainPage.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ }); const entities_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/entities/Counter/index.ts'); const react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react-i18next/dist/es/useTranslation.js'); const widgets_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/widgets/Page/Page.tsx'); const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js'); const __WEBPACK_DEFAULT_EXPORT__ = function MainPage() { const { t } = (0, react_i18next__WEBPACK_IMPORTED_MODULE_3__.G)(); return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(widgets_Page_Page__WEBPACK_IMPORTED_MODULE_1__.K, { children: [t('glavnaya-stranica'), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(entities_Counter__WEBPACK_IMPORTED_MODULE_0__.k, {})] }); }; },
  './src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.d(__webpack_exports__, { A: () => useAppDispatch }); const react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react-redux/es/index.js'); var useAppDispatch = function useAppDispatch() { return (0, react_redux__WEBPACK_IMPORTED_MODULE_0__.OY)(); }; },
  './src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.d(__webpack_exports__, { w: () => useInitialEffect }); const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'); function useInitialEffect(callback) { (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((() => { 0; }), []); } },
  './src/shared/ui/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.d(__webpack_exports__, { q: () => Button, oB: () => ButtonSize, qm: () => ButtonTheme }); const classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'); const injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'); const injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag); const styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'); const styleDomAPI_default = __webpack_require__.n(styleDomAPI); const insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'); const insertBySelector_default = __webpack_require__.n(insertBySelector); const setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'); const setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes); const insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'); const insertStyleElement_default = __webpack_require__.n(insertStyleElement); const styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'); const styleTagTransform_default = __webpack_require__.n(styleTagTransform); const Button_module = __webpack_require__('./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss'); const options = {}; options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, 'head'), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default(); injectStylesIntoStyleTag_default()(Button_module.c, options); const Button_Button_module = Button_module.c && Button_module.c.locals ? Button_module.c.locals : void 0; const jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'); function _typeof(o) { return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o; } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o; }, _typeof(o); } const _excluded = ['className', 'theme', 'children', 'square', 'size']; function ownKeys(e, r) { const t = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); r && (o = o.filter(((r) => { return Object.getOwnPropertyDescriptor(e, r).enumerable; }))), t.push.apply(t, o); } return t; } function _objectSpread(e) { for (let r = 1; r < arguments.length; r++) { var t = arguments[r] != null ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(((r) => { _defineProperty(e, r, t[r]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); })); } return e; } function _defineProperty(obj, key, value) {
      return (key = (function _toPropertyKey(t) { const i = (function _toPrimitive(t, r) { if (_typeof(t) != 'object' || !t) return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) { const i = e.call(t, r || 'default'); if (_typeof(i) != 'object') return i; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (r === 'string' ? String : Number)(t); }(t, 'string')); return _typeof(i) == 'symbol' ? i : String(i); }(key))) in obj ? Object.defineProperty(obj, key, {
        value, enumerable: !0, configurable: !0, writable: !0,
      }) : obj[key] = value, obj;
    } function _objectWithoutProperties(source, excluded) { if (source == null) return {}; let key; let i; const target = (function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; let key; let i; const target = {}; const sourceKeys = Object.keys(source); for (i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]); return target; }(source, excluded)); if (Object.getOwnPropertySymbols) { const sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++)key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]); } return target; } var ButtonTheme = (function (ButtonTheme) { return ButtonTheme.CLEAR = 'clear', ButtonTheme.OUTLINE = 'outline', ButtonTheme.OUTLINE_ACCENT = 'outline_accent', ButtonTheme.BACKGROUND = 'background', ButtonTheme.BACKGROUND_INVERTED = 'backgroundInverted', ButtonTheme; }({})); var ButtonSize = (function (ButtonSize) { return ButtonSize.M = 'size_m', ButtonSize.L = 'size_l', ButtonSize.XL = 'size_xl', ButtonSize; }({})); var Button = function Button(props) {
      const { className } = props; const _props$theme = props.theme; const theme = void 0 === _props$theme ? ButtonTheme.OUTLINE : _props$theme; const { children } = props; const { square } = props; const _props$size = props.size; const size = void 0 === _props$size ? ButtonSize.M : _props$size; const otherProps = _objectWithoutProperties(props, _excluded); const
        mods = _defineProperty(_defineProperty(_defineProperty({}, Button_Button_module[theme], !0), Button_Button_module.square, square), Button_Button_module[size], !0); return (0, jsx_runtime.jsx)('button', _objectSpread(_objectSpread({ type: 'button', className: (0, classNames.g)(Button_Button_module.Button, mods, [className]) }, otherProps), {}, { children }));
    };
  },
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
  './src/widgets/Page/ScrollSaver/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.d(__webpack_exports__, { _y: () => ScrollSaverActions, gV: () => ScrollSaverReducer, uE: () => getScrollSaverByPath }); var getScrollSaverByPath = (0, __webpack_require__('./node_modules/reselect/es/index.js').M3)(((state) => { return state.scrollSaver.scroll; }), ((state, path) => { return path; }), ((scroll, path) => { return scroll[path] || 0; })); const ScrollSaverSlice = (0, __webpack_require__('./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js').is)({ name: 'scroll', initialState: { scroll: {} }, reducers: { setScrollPosition: function setScrollPosition(state, _ref) { const { payload } = _ref; state.scroll[payload.path] = payload.position; } } }); var ScrollSaverActions = ScrollSaverSlice.actions; var ScrollSaverReducer = ScrollSaverSlice.reducer; },
  './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss': (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.d(__webpack_exports__, { c: () => __WEBPACK_DEFAULT_EXPORT__ }); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/css-loader/dist/runtime/sourceMaps.js'); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__); const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'); const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); ___CSS_LOADER_EXPORT___.push([module.id, '.src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color);padding:5px 10px;transition:all .2s ease 0s}.src-shared-ui-Button-Button-module__Button--a4nOa:hover{opacity:.5}.src-shared-ui-Button-Button-module__Button--a4nOa:disabled{opacity:.5;cursor:not-allowed}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none;color:var(--primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);border-radius:3px;color:var(--primary-color);background:none}.src-shared-ui-Button-Button-module__outline_accent--w9P0q{border:1px solid var(--accent-color);border-radius:3px;color:var(--accent-color);background:none}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--bg-color);color:var(--primary-color);border:none;border-radius:3px}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none;border-radius:0 3px 3px 0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}', '', {
      version: 3, sources: ['webpack://./src/shared/ui/Button/Button.module.scss'], names: [], mappings: 'AAAA,mDACE,cAAA,CACA,mCAAA,CACA,gBAAA,CACA,0BAAA,CAEA,yDACE,UAAA,CAGF,4DACE,UAAA,CACA,kBAAA,CAIJ,kDACE,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,0BAAA,CAGF,oDACE,qCAAA,CACA,iBAAA,CACA,0BAAA,CACA,eAAA,CAGF,2DACE,oCAAA,CACA,iBAAA,CACA,yBAAA,CACA,eAAA,CAGF,uDACE,gCAAA,CACA,0BAAA,CACA,WAAA,CACA,iBAAA,CAGF,+DACE,yCAAA,CACA,mCAAA,CACA,WAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,qGACE,wBAAA,CACA,yBAAA,CAGF,sGACE,yBAAA,CACA,0BAAA,CAGF,mDACE,SAAA,CAGF,mDACE,kBAAA,CAGF,mDACE,kBAAA,CAGF,oDACE,mBAAA', sourcesContent: ['.Button {\n  cursor: pointer;\n  color: var(--inverted-primary-color);\n  padding: 5px 10px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.clear {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  outline: none;\n  color: var(--primary-color);\n}\n\n.outline {\n  border: 1px solid var(--primary-color);\n  border-radius: 3px;\n  color: var(--primary-color);\n  background: none;\n}\n\n.outline_accent {\n  border: 1px solid var(--accent-color);\n  border-radius: 3px;\n  color: var(--accent-color);\n  background: none;\n}\n\n.background {\n  background-color: var(--bg-color);\n  color: var(--primary-color);\n  border: none;\n  border-radius: 3px;\n}\n\n.backgroundInverted {\n  background-color: var(--inverted-bg-color);\n  color: var(--inverted-primary-color);\n  border: none;\n  border-radius: 0 3px 3px 0;\n}\n\n.square.size_m {\n  width: var(--font-line-m);\n  height: var(--font-line-m);\n}\n\n.square.size_l {\n  width: var(--font-line-l);\n  height: var(--font-line-l);\n}\n\n.square.size_xl {\n  width: var(--font-line-xl);\n  height: var(--font-line-xl);\n}\n\n.square {\n  padding: 0;\n}\n\n.size_m {\n  font: var(--font-m);\n}\n\n.size_l {\n  font: var(--font-l);\n}\n\n.size_xl {\n  font: var(--font-xl);\n}\n'], sourceRoot: '',
    }]), ___CSS_LOADER_EXPORT___.locals = {
      Button: 'src-shared-ui-Button-Button-module__Button--a4nOa', clear: 'src-shared-ui-Button-Button-module__clear--FAEtI', outline: 'src-shared-ui-Button-Button-module__outline--pxBl_', outline_accent: 'src-shared-ui-Button-Button-module__outline_accent--w9P0q', background: 'src-shared-ui-Button-Button-module__background--nXdyj', backgroundInverted: 'src-shared-ui-Button-Button-module__backgroundInverted--EXVU3', square: 'src-shared-ui-Button-Button-module__square--pKS1A', size_m: 'src-shared-ui-Button-Button-module__size_m--xvXQX', size_l: 'src-shared-ui-Button-Button-module__size_l--rsm7T', size_xl: 'src-shared-ui-Button-Button-module__size_xl--WJ8He',
    }; const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
  },
  './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Page/Page.module.scss': (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.d(__webpack_exports__, { c: () => __WEBPACK_DEFAULT_EXPORT__ }); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/css-loader/dist/runtime/sourceMaps.js'); const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__); const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'); const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); ___CSS_LOADER_EXPORT___.push([module.id, '.src-widgets-Page-Page-module__Page--a83jD{flex-grow:1;padding:20px 20px 15px 50px;height:calc(100vh - var(--navbar-height));overflow-y:auto;overflow-x:hidden}', '', {
      version: 3, sources: ['webpack://./src/widgets/Page/Page.module.scss'], names: [], mappings: 'AAAA,2CACE,WAAA,CACA,2BAAA,CACA,yCAAA,CACA,eAAA,CACA,iBAAA', sourcesContent: ['.Page {\n  flex-grow: 1;\n  padding: 20px 20px 15px 50px;\n  height: calc(100vh - var(--navbar-height));\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n'], sourceRoot: '',
    }]), ___CSS_LOADER_EXPORT___.locals = { Page: 'src-widgets-Page-Page-module__Page--a83jD' }; const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
  },
}]);
