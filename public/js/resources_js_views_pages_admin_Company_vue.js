(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_admin_Company_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_paginationMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/paginationMixin */ "./resources/js/mixins/paginationMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Company",
  mixins: [_mixins_paginationMixin__WEBPACK_IMPORTED_MODULE_0__.paginationMixin],
  data: function data() {
    return {
      title: "Companies"
    };
  },
  computed: {
    info: function info() {
      var p = this.$store.state.dashboard_module.all_companies;
      return p;
    }
  },
  methods: {
    fetchInfo: function fetchInfo() {
      this.$store.dispatch('dashboardCompaniesAction');
    }
  },
  created: function created() {
    this.fetchInfo();
  }
});

/***/ }),

/***/ "./resources/js/views/pages/admin/Company.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/admin/Company.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=119c2f3a& */ "./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/Company.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_119c2f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Company.vue?vue&type=template&id=119c2f3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/admin/Company.vue?vue&type=template&id=119c2f3a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("bread-crumb", { attrs: { name: _vm.title } }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.info.length) + " Companies")
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body table-responsive p-0" }, [
                _c("table", { staticClass: "table table-hover text-nowrap" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.pageOfItems, function(item, i) {
                      return _c("tr", { key: item.id }, [
                        _c("td", [_vm._v(_vm._s(item.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.email))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.url))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("img", {
                            staticStyle: { width: "40px", height: "30px" },
                            attrs: { src: item.logo, alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(2, true)
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: " text-center pb-0 p-5 mt-5" },
                  [
                    _c("jw-pagination", {
                      attrs: {
                        pageSize: 10,
                        items: _vm.info,
                        styles: _vm.customStyles,
                        labels: _vm.customLabels
                      },
                      on: { changePage: _vm.onChangePage }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-tools" }, [
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Add Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" # ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company Website")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company logo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center text-danger" }, [
          _c("i", { staticClass: "fa fa-bolt" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c(
        "a",
        {
          staticClass: "action-icon action-btn text-success",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-edit text-20" })]
      ),
      _vm._v(
        "\n                                                 \n                                                "
      ),
      _c(
        "a",
        {
          staticClass: "action-icon action-btn text-danger",
          attrs: {
            onclick: "return confirm('are you sure to delete');",
            href: "#"
          }
        },
        [_c("i", { staticClass: "fa fa-trash" })]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);