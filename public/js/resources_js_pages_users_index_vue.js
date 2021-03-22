(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_users_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TheTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TheTable */ "./resources/js/components/TheTable.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/datatable */ "./resources/js/partials/datatable.js");
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
  components: {
    TheTable: _components_TheTable__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mixins: [_partials_datatable__WEBPACK_IMPORTED_MODULE_1__.default],
  computed: {
    baseUrl: function (_baseUrl) {
      function baseUrl() {
        return _baseUrl.apply(this, arguments);
      }

      baseUrl.toString = function () {
        return _baseUrl.toString();
      };

      return baseUrl;
    }(function () {
      return baseUrl();
    }),
    roles: function roles() {
      return window.s('roles');
    },
    branches: function branches() {
      return window.s('branches');
    }
  },
  data: function data() {
    var _this = this;

    return {
      currentItem: null,
      fields: [{
        key: 'id',
        sortable: true
      }, {
        key: 'name',
        sortable: true
      }, {
        key: 'email',
        sortable: true
      }, {
        key: 'created_at',
        sortable: true,
        formatter: function formatter(v) {
          return _this.$options.filters.dayjs(v);
        }
      }, {
        key: 'action',
        thClass: 'text-right',
        tdClass: 'text-right'
      }]
    };
  },
  methods: {
    o2t: _partials_datatable__WEBPACK_IMPORTED_MODULE_1__.o2t,
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      axios.post(this.baseUrl + "/backend/users/store", JSON.parse(JSON.stringify(this.currentItem))).then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        _this2.$bvToast.toast(data.message, {
          title: data.title,
          autoHideDelay: 3000,
          appendToast: true,
          variant: data.variant || 'success'
        });

        _this2.$refs.datatable.refresh();

        _this2.$bvModal.hide('edit_modal');
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        console.log(response.data);

        _this2.$bvToast.toast(response.data.message, {
          title: "Server Error",
          variant: 'danger',
          autoHideDelay: 3000,
          appendToast: true
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/users/index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/users/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9844ac9c& */ "./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/users/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/users/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/users/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/users/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9844ac9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=9844ac9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/index.vue?vue&type=template&id=9844ac9c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c(
        "the-table",
        {
          attrs: { datatable: _vm.datatable, fields: _vm.fields },
          scopedSlots: _vm._u([
            {
              key: "header_buttons",
              fn: function() {
                return [
                  _c(
                    "b-button-group",
                    { attrs: { size: "sm" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal:edit_modal",
                              arg: "edit_modal"
                            }
                          ],
                          attrs: { variant: "dark" },
                          on: {
                            click: function($event) {
                              _vm.currentItem = {
                                name: null,
                                email: null,
                                password: null
                              }
                            }
                          }
                        },
                        [_c("b-icon-plus")],
                        1
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "b-table",
            _vm._b(
              {
                ref: "datatable",
                attrs: {
                  "no-provider-filtering": false,
                  "api-url": _vm.baseUrl + "/backend/users"
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(action)",
                    fn: function(row) {
                      return [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm" } },
                          [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal:view_modal",
                                    arg: "view_modal"
                                  }
                                ],
                                attrs: { variant: "dark", title: "View" },
                                on: {
                                  click: function($event) {
                                    _vm.currentItem = JSON.parse(
                                      JSON.stringify(row.item)
                                    )
                                  }
                                }
                              },
                              [_c("b-icon-eye")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal:edit_modal",
                                    arg: "edit_modal"
                                  }
                                ],
                                attrs: { variant: "warning", title: "Edit" },
                                on: {
                                  click: function($event) {
                                    _vm.currentItem = JSON.parse(
                                      JSON.stringify(row.item)
                                    )
                                  }
                                }
                              },
                              [_c("b-icon-pencil-square")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "danger", title: "Delete" } },
                              [_c("b-icon-trash")],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              },
              "b-table",
              Object.assign({}, _vm.attrs),
              false
            )
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        _vm._b(
          {
            attrs: { lazy: "", id: "edit_modal" },
            on: {
              hidden: function($event) {
                _vm.currentItem = null
              }
            }
          },
          "b-modal",
          {
            bodyClass: "p-2",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            title: "Add/Edit User",
            hideFooter: true
          },
          false
        ),
        [
          _vm.currentItem
            ? _c(
                "b-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.handleSubmit($event)
                    }
                  }
                },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Name" } },
                    [
                      _c("b-input", {
                        attrs: { placeholder: "User Name" },
                        model: {
                          value: _vm.currentItem.name,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "name", $$v)
                          },
                          expression: "currentItem.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Email" } },
                    [
                      _c("b-input", {
                        attrs: { placeholder: "User Email Address" },
                        model: {
                          value: _vm.currentItem.email,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "email", $$v)
                          },
                          expression: "currentItem.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Role" } },
                    [
                      _c("b-select", {
                        attrs: {
                          required: "",
                          "text-field": "name",
                          "value-field": "id",
                          options: _vm.roles
                        },
                        model: {
                          value: _vm.currentItem.role_id,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "role_id", $$v)
                          },
                          expression: "currentItem.role_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Branch" } },
                    [
                      _c("b-select", {
                        attrs: {
                          required: "",
                          "text-field": "branch_name",
                          "value-field": "id",
                          options: _vm.branches
                        },
                        model: {
                          value: _vm.currentItem.branch_id,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "branch_id", $$v)
                          },
                          expression: "currentItem.branch_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Password" } },
                    [
                      _c("b-input", {
                        attrs: { type: "password" },
                        model: {
                          value: _vm.currentItem.password,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "password", $$v)
                          },
                          expression: "currentItem.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "submit", variant: "dark", block: "" } },
                    [_vm._v("SUBMIT")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        _vm._b(
          {
            attrs: { lazy: "", id: "view_modal" },
            on: {
              hidden: function($event) {
                _vm.currentItem = null
              }
            }
          },
          "b-modal",
          {
            bodyClass: "p-2",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            title: "View Details"
          },
          false
        ),
        [
          _vm.currentItem
            ? _c("b-table", {
                attrs: {
                  "thead-class": "d-none",
                  bordered: "",
                  hover: "",
                  striped: "",
                  small: "",
                  "head-variant": "dark",
                  items: _vm.o2t(_vm.currentItem, ["email_verified_at"])
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "cell(key)",
                      fn: function(row) {
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm._f("startCase")(row.item.key)) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "cell(value)",
                      fn: function(row) {
                        return [
                          ["created_at", "updated_at"].includes(row.item.key)
                            ? [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm._f("dayjs")(row.item.value)) +
                                    "\n                    "
                                )
                              ]
                            : [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(row.item.value) +
                                    "\n                    "
                                )
                              ]
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  3513329274
                )
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);