(self.webpackChunkproduction_project_code_course = self.webpackChunkproduction_project_code_course || []).push([[6540], {
  './src/features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
      Dark: () => Dark, Primary: () => Primary, __namedExportsOrder: () => __namedExportsOrder, default: () => __WEBPACK_DEFAULT_EXPORT__,
    }); const app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'); const entities_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/entities/Country/index.ts'); const entities_Currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/entities/Currency/index.ts'); const shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx'); const shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx'); const _EditableProfileCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard.tsx'); const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/react/jsx-runtime.js'); function _typeof(o) { return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o; } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o; }, _typeof(o); } function ownKeys(e, r) { const t = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); r && (o = o.filter(((r) => { return Object.getOwnPropertyDescriptor(e, r).enumerable; }))), t.push.apply(t, o); } return t; } function _defineProperty(obj, key, value) {
      return (key = (function _toPropertyKey(t) { const i = (function _toPrimitive(t, r) { if (_typeof(t) != 'object' || !t) return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) { const i = e.call(t, r || 'default'); if (_typeof(i) != 'object') return i; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (r === 'string' ? String : Number)(t); }(t, 'string')); return _typeof(i) == 'symbol' ? i : String(i); }(key))) in obj ? Object.defineProperty(obj, key, {
        value, enumerable: !0, configurable: !0, writable: !0,
      }) : obj[key] = value, obj;
    } const __WEBPACK_DEFAULT_EXPORT__ = { title: 'features/EditableProfileCard', component: _EditableProfileCard__WEBPACK_IMPORTED_MODULE_5__.c, argTypes: { backgroundColor: { control: 'color' } } }; const Template = function Template(args) { return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_EditableProfileCard__WEBPACK_IMPORTED_MODULE_5__.c, (function _objectSpread(e) { for (let r = 1; r < arguments.length; r++) { var t = arguments[r] != null ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(((r) => { _defineProperty(e, r, t[r]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); })); } return e; }({}, args))); }; var Primary = Template.bind({}); Primary.args = {}, Primary.decorators = [(0, shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.y)({
      profile: {
        form: {
          age: 11, city: 'rbest', first: 'sanya', username: 'tars', lastname: 'chernov', country: entities_Country__WEBPACK_IMPORTED_MODULE_1__.y.Belarus, currency: entities_Currency__WEBPACK_IMPORTED_MODULE_2__._.USD,
        },
      },
    })]; var Dark = Template.bind({}); Dark.args = {}, Dark.decorators = [(0, shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.y)({
      profile: {
        form: {
          age: 11, city: 'rbest', first: 'sanya', username: 'tars', lastname: 'chernov', country: entities_Country__WEBPACK_IMPORTED_MODULE_1__.y.Belarus, currency: entities_Currency__WEBPACK_IMPORTED_MODULE_2__._.USD,
        },
      },
    }), (0, shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.So.DARK)], Primary.parameters = { ...Primary.parameters, docs: { ...Primary.parameters?.docs, source: { originalSource: 'args => <EditableProfileCard {...args} />', ...Primary.parameters?.docs?.source } } }, Dark.parameters = { ...Dark.parameters, docs: { ...Dark.parameters?.docs, source: { originalSource: 'args => <EditableProfileCard {...args} />', ...Dark.parameters?.docs?.source } } }; const __namedExportsOrder = ['Primary', 'Dark'];
  },
}]);
