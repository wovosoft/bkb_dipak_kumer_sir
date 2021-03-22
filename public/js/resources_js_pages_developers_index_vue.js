(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_developers_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    imageUrl: function imageUrl() {
      if (this.currentItem.photo_upload) return URL.createObjectURL(this.currentItem.photo_upload);
      return this.currentItem.photo;
    }
  },
  data: function data() {
    return {
      currentItem: null,
      fields: [{
        key: "id",
        sortable: true
      }, {
        key: "name",
        sortable: true
      }, {
        key: "email",
        sortable: true
      }, {
        key: "phone",
        sortable: true
      }, {
        key: "company",
        sortable: true
      }, // {key: "framework_version", sortable: true},
      {
        key: "github",
        sortable: true,
        visible: false
      }, {
        key: "facebook",
        sortable: true,
        visible: false
      }, {
        key: "twitter",
        sortable: true,
        visible: false
      }, {
        key: "linkedin",
        sortable: true,
        visible: false
      }, {
        key: "instagram",
        sortable: true,
        visible: false
      }, {
        key: "address",
        sortable: true,
        visible: false
      }, {
        key: "village",
        sortable: true,
        visible: false
      }, {
        key: "thana",
        sortable: true,
        visible: false
      }, {
        key: "district",
        sortable: true,
        visible: false
      }, {
        key: "division",
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
        name: null,
        email: null,
        phone: null,
        company: null,
        github: null,
        facebook: null,
        twitter: null,
        linkedin: null,
        instagram: null,
        address: null,
        village: null,
        thana: null,
        district: null,
        division: null
      });
      this.$bvModal.show('edit_modal');
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      axios.post(this.baseUrl + "/backend/developers/store", JSON.parse(JSON.stringify(this.currentItem))).then(function (_ref) {
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
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/developers/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/developers/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=fa7fe6d6& */ "./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/developers/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/developers/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/developers/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/developers/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fa7fe6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=fa7fe6d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developers/index.vue?vue&type=template&id=fa7fe6d6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                  "api-url": _vm.baseUrl + "/backend/developers"
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
            noCloseOnEsc: true,
            noCloseOnBackdrop: true,
            size: "xl",
            bodyClass: "p-2",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            title: "Add/Edit Developer",
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
                          _c("b-img-lazy", {
                            attrs: { src: _vm.imageUrl, fluid: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Photo" } },
                            [
                              _c("b-file", {
                                model: {
                                  value: _vm.currentItem.photo_upload,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "photo_upload",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.photo_upload"
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
                            { attrs: { label: "Name" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  required: true,
                                  placeholder: "Developer's Name"
                                },
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
                                attrs: {
                                  required: true,
                                  placeholder: "Email Address",
                                  type: "email"
                                },
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
                            { attrs: { label: "Phone" } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Phone" },
                                model: {
                                  value: _vm.currentItem.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "phone", $$v)
                                  },
                                  expression: "currentItem.phone"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Company" } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Company" },
                                model: {
                                  value: _vm.currentItem.company,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "company", $$v)
                                  },
                                  expression: "currentItem.company"
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
                            { attrs: { label: "Address" } },
                            [
                              _c("b-input", {
                                attrs: { type: "text" },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Village" } },
                            [
                              _c("b-input", {
                                attrs: { type: "text" },
                                model: {
                                  value: _vm.currentItem.village,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "village", $$v)
                                  },
                                  expression: "currentItem.village"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Thana" } },
                            [
                              _c("b-input", {
                                attrs: { type: "text" },
                                model: {
                                  value: _vm.currentItem.thana,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "thana", $$v)
                                  },
                                  expression: "currentItem.thana"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "District" } },
                            [
                              _c("b-input", {
                                attrs: { type: "text" },
                                model: {
                                  value: _vm.currentItem.district,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "district", $$v)
                                  },
                                  expression: "currentItem.district"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Division" } },
                            [
                              _c("b-input", {
                                attrs: { type: "text" },
                                model: {
                                  value: _vm.currentItem.division,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "division", $$v)
                                  },
                                  expression: "currentItem.division"
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
                            { attrs: { label: "Github" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Github Profile"
                                },
                                model: {
                                  value: _vm.currentItem.github,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "github", $$v)
                                  },
                                  expression: "currentItem.github"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Facebook" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Facebook Profile"
                                },
                                model: {
                                  value: _vm.currentItem.facebook,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "facebook", $$v)
                                  },
                                  expression: "currentItem.facebook"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Twitter" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Twitter Profile"
                                },
                                model: {
                                  value: _vm.currentItem.twitter,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "twitter", $$v)
                                  },
                                  expression: "currentItem.twitter"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Linkedin" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Linkedin Profile"
                                },
                                model: {
                                  value: _vm.currentItem.linkedin,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "linkedin", $$v)
                                  },
                                  expression: "currentItem.linkedin"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: "Instagram" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Instagram Profile"
                                },
                                model: {
                                  value: _vm.currentItem.instagram,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "instagram", $$v)
                                  },
                                  expression: "currentItem.instagram"
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
                  items: _vm.o2t(_vm.currentItem)
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