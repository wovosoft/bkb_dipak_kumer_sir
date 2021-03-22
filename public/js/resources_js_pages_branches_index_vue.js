(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_branches_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    })
  },
  mounted: function mounted() {
    this.getDivisions();
  },
  data: function data() {
    return {
      currentItem: null,
      divisional_offices: [],
      crm_rm_offices: [],
      appends: {
        crm_rm_office_id: null,
        divisional_office_id: null
      },
      fields: [{
        key: "id",
        sortable: true
      }, {
        key: "branch_name",
        sortable: true
      }, {
        key: "branch_code",
        sortable: true
      }, {
        key: "routing_no",
        sortable: true,
        visible: false
      }, {
        key: "divisional_office",
        sortable: false,
        formatter: function formatter(d) {
          return d ? d.name : null;
        }
      }, {
        key: "crm_rm_office",
        sortable: false,
        formatter: function formatter(d) {
          return d ? d.name : null;
        }
      }, {
        key: "city",
        sortable: true,
        visible: false
      }, {
        key: "zip",
        sortable: true,
        visible: false
      }, {
        key: "address",
        sortable: true,
        visible: false
      }, {
        key: 'action',
        thClass: 'text-right',
        tdClass: 'text-right'
      }]
    };
  },
  methods: {
    o2t: _partials_datatable__WEBPACK_IMPORTED_MODULE_1__.o2t,
    initAddForm: function initAddForm() {
      this.$set(this, 'currentItem', {
        crm_rm_office_id: null,
        divisional_office_id: null,
        branch_name: null,
        branch_code: null,
        routing_no: null,
        address: null,
        city: null,
        zip: null
      });
      this.$bvModal.show('edit_modal');
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      axios.post(this.baseUrl + "/backend/branches/store", JSON.parse(JSON.stringify(this.currentItem))).then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        _this.$bvToast.toast(data.message, {
          title: data.title,
          autoHideDelay: 3000,
          appendToast: true,
          variant: data.variant || 'success'
        });

        _this.$refs.datatable.refresh();

        _this.$bvModal.hide('edit_modal');
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        console.log(response.data);

        _this.$bvToast.toast(response.data.message, {
          title: "Server Error",
          variant: 'danger',
          autoHideDelay: 3000,
          appendToast: true
        });
      });
    },
    getDivisions: function getDivisions() {
      var _this2 = this;

      axios.post(this.baseUrl + "/backend/divisional_offices/list").then(function (_ref3) {
        var data = _ref3.data;
        _this2.divisional_offices = data;
      })["catch"](function (_ref4) {
        var response = _ref4.response;
        _this2.divisional_offices = [];
        console.log(response.data);
      });
    },
    getCrmRmOffices: function getCrmRmOffices() {
      var _this3 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (id || this.currentItem.divisional_office_id) {
        axios.post(this.baseUrl + "/backend/crm_rm_offices/list", {
          divisional_office_id: id || this.currentItem.divisional_office_id
        }).then(function (_ref5) {
          var data = _ref5.data;
          _this3.crm_rm_offices = data;
        })["catch"](function (_ref6) {
          var response = _ref6.response;
          _this3.crm_rm_offices = [];
          console.log(response.data);
        });
      } else {
        this.$set(this, 'crm_rm_offices', []);
        this.$set(this.currentItem, 'crm_rm_office_id', null);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/branches/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/branches/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=46b15008& */ "./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/branches/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/branches/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/branches/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/branches/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46b15008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=46b15008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/branches/index.vue?vue&type=template&id=46b15008& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "4", sm: "12" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Divisional Office" } },
                [
                  _c(
                    "b-input-group",
                    {
                      scopedSlots: _vm._u([
                        {
                          key: "append",
                          fn: function() {
                            return [
                              _c(
                                "b-button",
                                {
                                  on: {
                                    click: function() {
                                      _vm.appends.divisional_office_id = null
                                      _vm.crm_rm_offices = []
                                    }
                                  }
                                },
                                [_c("b-icon-trash")],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c("b-select", {
                        attrs: {
                          "text-field": "name",
                          "value-field": "id",
                          options: _vm.divisional_offices
                        },
                        on: { input: _vm.getCrmRmOffices },
                        model: {
                          value: _vm.appends.divisional_office_id,
                          callback: function($$v) {
                            _vm.$set(_vm.appends, "divisional_office_id", $$v)
                          },
                          expression: "appends.divisional_office_id"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4", sm: "12" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "CRM-RM Office" } },
                [
                  _c(
                    "b-input-group",
                    {
                      scopedSlots: _vm._u([
                        {
                          key: "append",
                          fn: function() {
                            return [
                              _c(
                                "b-button",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.appends.crm_rm_office_id = null
                                    }
                                  }
                                },
                                [_c("b-icon-trash")],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c("b-select", {
                        attrs: {
                          "text-field": "name",
                          "value-field": "id",
                          options: _vm.crm_rm_offices
                        },
                        model: {
                          value: _vm.appends.crm_rm_office_id,
                          callback: function($$v) {
                            _vm.$set(_vm.appends, "crm_rm_office_id", $$v)
                          },
                          expression: "appends.crm_rm_office_id"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "label",
                      fn: function() {
                        return [_vm._v(" ")]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { block: "", variant: "dark" },
                      on: {
                        click: function($event) {
                          return _vm.$refs.datatable.refresh()
                        }
                      }
                    },
                    [
                      _c("b-icon-search"),
                      _vm._v("\n                    SEARCH\n                ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
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
                          attrs: { variant: "dark" },
                          on: { click: _vm.initAddForm }
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
                  "api-url": _vm.baseUrl + "/backend/branches"
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
              shown: function() {
                if (_vm.currentItem.divisional_office_id) {
                  _vm.getCrmRmOffices()
                }
              },
              hidden: function() {
                _vm.currentItem = null
                _vm.crm_rm_offices = []
              }
            }
          },
          "b-modal",
          {
            size: "lg",
            bodyClass: "p-2",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            title: "Add/Edit Branch",
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
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Divisional Office *" } },
                            [
                              _c(
                                "b-input-group",
                                {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "append",
                                        fn: function() {
                                          return [
                                            _c(
                                              "b-button",
                                              {
                                                on: {
                                                  click: function() {
                                                    _vm.currentItem.divisional_office_id = null
                                                    _vm.currentItem.crm_rm_office_id = null
                                                    _vm.crm_rm_offices = []
                                                  }
                                                }
                                              },
                                              [_c("b-icon-trash")],
                                              1
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ],
                                    null,
                                    false,
                                    1422424079
                                  )
                                },
                                [
                                  _c("b-select", {
                                    attrs: {
                                      required: true,
                                      "text-field": "name",
                                      "value-field": "id",
                                      options: _vm.divisional_offices
                                    },
                                    on: { input: _vm.getCrmRmOffices },
                                    model: {
                                      value:
                                        _vm.currentItem.divisional_office_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.currentItem,
                                          "divisional_office_id",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "currentItem.divisional_office_id"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Divisional Office *" } },
                            [
                              _c("b-select", {
                                attrs: {
                                  required: true,
                                  "text-field": "name",
                                  "value-field": "id",
                                  options: _vm.crm_rm_offices
                                },
                                model: {
                                  value: _vm.currentItem.crm_rm_office_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "crm_rm_office_id",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.crm_rm_office_id"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Branch Name" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  required: true,
                                  placeholder: "Branch Name"
                                },
                                model: {
                                  value: _vm.currentItem.branch_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "branch_name",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.branch_name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Branch Code" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  required: true,
                                  placeholder: "Branch Code"
                                },
                                model: {
                                  value: _vm.currentItem.branch_code,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "branch_code",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.branch_code"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Routing No" } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Branch Routing No" },
                                model: {
                                  value: _vm.currentItem.routing_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "routing_no", $$v)
                                  },
                                  expression: "currentItem.routing_no"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "City" } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Branch City" },
                                model: {
                                  value: _vm.currentItem.city,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "city", $$v)
                                  },
                                  expression: "currentItem.city"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "ZIP" } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Branch ZIP" },
                                model: {
                                  value: _vm.currentItem.zip,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "zip", $$v)
                                  },
                                  expression: "currentItem.zip"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Address" } },
                            [
                              _c("b-textarea", {
                                attrs: { placeholder: "Branch Address" },
                                model: {
                                  value: _vm.currentItem.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "address", $$v)
                                  },
                                  expression: "currentItem.address"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
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
                  items: _vm.o2t(_vm.currentItem, [
                    "crm_rm_office_id",
                    "divisional_office_id"
                  ])
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "cell(key)",
                      fn: function(row) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm._f("startCase")(row.item.key)) +
                              "\n            "
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
                                  "\n                    " +
                                    _vm._s(_vm._f("dayjs")(row.item.value)) +
                                    "\n                "
                                )
                              ]
                            : [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(row.item.value) +
                                    "\n                "
                                )
                              ]
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  4228248442
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