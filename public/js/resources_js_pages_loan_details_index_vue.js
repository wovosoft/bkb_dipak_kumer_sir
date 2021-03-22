(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_loan_details_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TheTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TheTable */ "./resources/js/components/TheTable.vue");
/* harmony import */ var _partials_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/datatable */ "./resources/js/partials/datatable.js");
/* harmony import */ var _partials_jsonToFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../partials/jsonToFormData */ "./resources/js/partials/jsonToFormData.js");
/* harmony import */ var _partials_jsonToFormData__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partials_jsonToFormData__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    branch: function branch() {
      return window.s('branch');
    },
    subTypes: function subTypes() {
      var _this = this;

      if (!this.currentItem.loan_type_id) {
        return [];
      }

      return this.doc_types.find(function (i) {
        return i.id === _this.currentItem.loan_type_id;
      }).sub_types;
    },
    currentSubType: function currentSubType() {
      var _this2 = this;

      if (!this.currentItem.loan_sub_type_id) {
        return null;
      }

      return this.subTypes.find(function (i) {
        return _this2.currentItem.loan_sub_type_id === i.id;
      });
    },
    documentTypes: function documentTypes() {
      if (!this.currentItem.loan_sub_type_id) {
        return [];
      }

      return this.currentSubType.document_types;
    },
    optionalDocumentTypes: function optionalDocumentTypes() {
      return this.documentTypes.filter(function (i) {
        return !Number(i.is_mandatory);
      });
    }
  },
  mounted: function mounted() {
    this.getDocumentTypes();
  },
  data: function data() {
    return {
      appends: {
        loan_type_id: null,
        loan_sub_type_id: null,
        sanction_date: null,
        due_date: null
      },
      currentItem: null,
      temp_doc: null,
      doc_types: [],
      fields: [{
        key: "id",
        sortable: true
      }, {
        key: "branch",
        sortable: false,
        formatter: function formatter(v) {
          return v ? [v.id, v.branch_name, v.branch_code].join(' | ') : null;
        }
      }, {
        key: "company",
        sortable: true
      }, {
        key: "proprietor_name",
        sortable: true,
        label: 'Proprietor'
      }, {
        key: "sanction_amount",
        sortable: true
      }, {
        key: "sanction_date",
        sortable: true
      }, {
        key: "due_date",
        sortable: true
      }, {
        key: "loan_account_no",
        sortable: true,
        label: 'Account #'
      }, {
        key: "loan_type",
        sortable: false,
        label: 'Type',
        formatter: function formatter(v) {
          return v ? v.title : null;
        }
      }, {
        key: "loan_sub_type",
        sortable: false,
        label: 'Sub Type',
        formatter: function formatter(v) {
          return v ? v.title : null;
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
    initAddForm: function initAddForm() {
      this.$set(this, 'currentItem', {
        branch_id: this.branch.id,
        company: null,
        proprietor_name: null,
        sanction_amount: null,
        sanction_date: null,
        due_date: null,
        loan_account_no: null,
        loan_type_id: null,
        loan_sub_type_id: null,
        description: null,
        documents: []
      });
      this.$bvModal.show('edit_modal');
    },
    processFileUpload: function processFileUpload(row, f) {
      var _this3 = this;

      var fd = new FormData();
      fd.append('the_file', f);
      axios.post(this.baseUrl + "/backend/file_upload", fd).then(function (_ref) {
        var data = _ref.data;

        _this3.$set(row.item, 'filepath', data);
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        console.log(response.data);
      });
    },
    handleSubmit: function handleSubmit() {
      var _this4 = this;

      axios.post(this.baseUrl + "/backend/loan_details/store", _partials_jsonToFormData__WEBPACK_IMPORTED_MODULE_2___default()(this.currentItem)).then(function (_ref3) {
        var data = _ref3.data;
        console.log(data);

        _this4.$bvToast.toast(data.message, {
          title: data.title,
          autoHideDelay: 3000,
          appendToast: true,
          variant: data.variant || 'success'
        });

        _this4.$refs.datatable.refresh();

        _this4.$bvModal.hide('edit_modal');
      })["catch"](function (_ref4) {
        var response = _ref4.response;
        console.log(response.data);

        _this4.$bvToast.toast(response.data.message, {
          title: "Server Error",
          variant: 'danger',
          autoHideDelay: 3000,
          appendToast: true
        });
      });
    },
    getDocumentTypes: function getDocumentTypes() {
      var _this5 = this;

      axios.post(this.baseUrl + "/backend/loan_details/document_types").then(function (_ref5) {
        var data = _ref5.data;

        _this5.$set(_this5, 'doc_types', data);
      })["catch"](function (_ref6) {
        var response = _ref6.response;

        _this5.$set(_this5, 'doc_types', []);

        console.log(response.data);
      });
    },
    subTypeSelected: function subTypeSelected() {
      this.$set(this.currentItem, 'documents', JSON.parse(JSON.stringify(this.documentTypes.filter(function (i) {
        return !!i.is_mandatory;
      }).map(function (i) {
        return {
          title: i.title,
          loan_type_id: i.loan_type_id,
          loan_sub_type_id: i.loan_sub_type_id,
          document_type_id: i.id,
          is_mandatory: !!Number(i.is_mandatory),
          description: null,
          the_file: null
        };
      }))));
      this.temp_doc = null;
    },
    addRow: function addRow() {
      var _this6 = this;

      if (this.temp_doc) {
        var item = this.optionalDocumentTypes.find(function (i) {
          return i.id === _this6.temp_doc;
        });
        this.currentItem.documents.push({
          title: item ? item.title : null,
          loan_type_id: this.currentItem.loan_type_id,
          loan_sub_type_id: this.currentItem.loan_sub_type_id,
          document_type_id: this.temp_doc,
          is_mandatory: false,
          description: null,
          the_file: null
        });
        this.temp_doc = null;
      } else {
        alert("Please, Select Document Type First!!!");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/partials/jsonToFormData.js":
/*!*************************************************!*\
  !*** ./resources/js/partials/jsonToFormData.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  // root is undefined in a Webpack bundle
  if (!root) {
    root = {};
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root.jsonToFormData = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  var mergeObjects = function mergeObjects(object1, object2) {
    return [object1, object2].reduce(function (carry, objectToMerge) {
      Object.keys(objectToMerge).forEach(function (objectKey) {
        return carry[objectKey] = objectToMerge[objectKey];
      });
      return carry;
    }, {});
  };

  var isArray = function isArray(val) {
    return Array.isArray(val);
  };

  var isJsonObject = function isJsonObject(val) {
    return !isArray(val) && _typeof(val) === 'object' && !!val && !(val instanceof Blob) && !(val instanceof Date);
  };

  var isAppendFunctionPresent = function isAppendFunctionPresent(formData) {
    return typeof formData.append === 'function';
  };

  var isGlobalFormDataPresent = function isGlobalFormDataPresent() {
    return typeof FormData === 'function';
  };

  var getDefaultFormData = function getDefaultFormData() {
    return isGlobalFormDataPresent() ? new FormData() : null;
  };

  function convert(jsonObject, options) {
    if (options && options.initialFormData) {
      if (!isAppendFunctionPresent(options.initialFormData)) {
        throw 'initialFormData must have an append function.';
      }
    } else if (!isGlobalFormDataPresent()) {
      throw 'This environment does not have global form data. options.initialFormData must be specified.';
    }

    var defaultOptions = {
      initialFormData: getDefaultFormData(),
      showLeafArrayIndexes: true,
      includeNullValues: false,
      mapping: function mapping(value) {
        if (typeof value === 'boolean') {
          return +value ? '1' : '0';
        }

        return value;
      }
    };
    var mergedOptions = mergeObjects(defaultOptions, options || {});
    return convertRecursively(jsonObject, mergedOptions, mergedOptions.initialFormData);
  }

  function convertRecursively(jsonObject, options, formData, parentKey) {
    var index = 0;

    for (var key in jsonObject) {
      if (jsonObject.hasOwnProperty(key)) {
        var propName = parentKey || key;
        var value = options.mapping(jsonObject[key]);

        if (parentKey && isJsonObject(jsonObject)) {
          propName = parentKey + '[' + key + ']';
        }

        if (parentKey && isArray(jsonObject)) {
          if (isArray(value) || options.showLeafArrayIndexes) {
            propName = parentKey + '[' + index + ']';
          } else {
            propName = parentKey + '[]';
          }
        }

        if (isArray(value) || isJsonObject(value)) {
          convertRecursively(value, options, formData, propName);
        } else if (value instanceof FileList) {
          for (var j = 0; j < value.length; j++) {
            formData.append(propName + '[' + j + ']', value.item(j));
          }
        } else if (value instanceof Blob) {
          formData.append(propName, value, value.name);
        } else if (value instanceof Date) {
          formData.append(propName, value.toISOString());
        } else if ((value === null && options.includeNullValues || value !== null) && value !== undefined) {
          formData.append(propName, value);
        }
      }

      index++;
    }

    return formData;
  }

  return convert;
});

/***/ }),

/***/ "./resources/js/pages/loan_details/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/loan_details/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=41bc1842& */ "./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/loan_details/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41bc1842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=41bc1842& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/loan_details/index.vue?vue&type=template&id=41bc1842& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.$refs.datatable.refresh()
            }
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "3", sm: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Loan Type" } },
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
                                          _vm.appends.loan_type_id = null
                                          _vm.appends.loan_sub_type_id = null
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
                              options: _vm.doc_types,
                              "value-field": "id",
                              "text-field": "title"
                            },
                            model: {
                              value: _vm.appends.loan_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.appends, "loan_type_id", $$v)
                              },
                              expression: "appends.loan_type_id"
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
                { attrs: { md: "3", sm: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Loan Sub Type" } },
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
                                          _vm.appends.loan_sub_type_id = null
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
                              options: _vm.appends.loan_type_id
                                ? _vm.doc_types.find(function(i) {
                                    return i.id === _vm.appends.loan_type_id
                                  }).sub_types
                                : [],
                              "value-field": "id",
                              "text-field": "title"
                            },
                            model: {
                              value: _vm.appends.loan_sub_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.appends, "loan_sub_type_id", $$v)
                              },
                              expression: "appends.loan_sub_type_id"
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
                { attrs: { md: "2", sm: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Sanction Date" } },
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
                                          _vm.appends.sanction_date = null
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
                          _c("b-input", {
                            attrs: { type: "date" },
                            model: {
                              value: _vm.appends.sanction_date,
                              callback: function($$v) {
                                _vm.$set(_vm.appends, "sanction_date", $$v)
                              },
                              expression: "appends.sanction_date"
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
                { attrs: { md: "2", sm: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Due Date" } },
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
                                          _vm.appends.due_date = null
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
                          _c("b-input", {
                            attrs: { type: "date" },
                            model: {
                              value: _vm.appends.due_date,
                              callback: function($$v) {
                                _vm.$set(_vm.appends, "due_date", $$v)
                              },
                              expression: "appends.due_date"
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
                { attrs: { md: "2", sm: "12" } },
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
                          attrs: { variant: "dark", type: "submit", block: "" }
                        },
                        [
                          _c("b-icon-search"),
                          _vm._v(
                            "\n                        SEARCH\n                    "
                          )
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
                  "api-url": _vm.baseUrl + "/backend/loan_details"
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
            size: "xl",
            bodyClass: "p-2",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            title: "Add/Edit Loan Information",
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
                            { attrs: { label: "Company *" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  required: "",
                                  placeholder: "Company Name"
                                },
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
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Proprietor Name *" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  required: "",
                                  placeholder: "Proprietor Name"
                                },
                                model: {
                                  value: _vm.currentItem.proprietor_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "proprietor_name",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.proprietor_name"
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
                            { attrs: { label: "Sanction Amount *" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "number",
                                  step: "any",
                                  min: "0",
                                  required: "",
                                  placeholder: "Sanction Amount"
                                },
                                model: {
                                  value: _vm.currentItem.sanction_amount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "sanction_amount",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.sanction_amount"
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
                            { attrs: { label: "Loan Account No." } },
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Loan Account No." },
                                model: {
                                  value: _vm.currentItem.loan_account_no,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "loan_account_no",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.loan_account_no"
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
                            { attrs: { label: "Sanction date *" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Sanction Date",
                                  required: ""
                                },
                                model: {
                                  value: _vm.currentItem.sanction_date,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.currentItem,
                                      "sanction_date",
                                      $$v
                                    )
                                  },
                                  expression: "currentItem.sanction_date"
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
                            { attrs: { label: "Due Date" } },
                            [
                              _c("b-input", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Due Date"
                                },
                                model: {
                                  value: _vm.currentItem.due_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.currentItem, "due_date", $$v)
                                  },
                                  expression: "currentItem.due_date"
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
                            { attrs: { label: "Loan Type *" } },
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
                                                  click: function($event) {
                                                    _vm.currentItem.loan_type_id = null
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
                                    4161923811
                                  )
                                },
                                [
                                  _c("b-select", {
                                    attrs: {
                                      required: "",
                                      "text-field": "title",
                                      "value-field": "id",
                                      options: _vm.doc_types
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.currentItem.loan_sub_type_id = null
                                      }
                                    },
                                    model: {
                                      value: _vm.currentItem.loan_type_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.currentItem,
                                          "loan_type_id",
                                          $$v
                                        )
                                      },
                                      expression: "currentItem.loan_type_id"
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
                            { attrs: { label: "Loan Sub Type *" } },
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
                                                  click: function($event) {
                                                    _vm.currentItem.loan_sub_type_id = null
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
                                    20827640
                                  )
                                },
                                [
                                  _c("b-select", {
                                    attrs: {
                                      required: "",
                                      "text-field": "title",
                                      "value-field": "id",
                                      options: _vm.subTypes
                                    },
                                    on: { input: _vm.subTypeSelected },
                                    model: {
                                      value: _vm.currentItem.loan_sub_type_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.currentItem,
                                          "loan_sub_type_id",
                                          $$v
                                        )
                                      },
                                      expression: "currentItem.loan_sub_type_id"
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Description" } },
                    [
                      _c("b-textarea", {
                        attrs: { placeholder: "Loan Description" },
                        model: {
                          value: _vm.currentItem.description,
                          callback: function($$v) {
                            _vm.$set(_vm.currentItem, "description", $$v)
                          },
                          expression: "currentItem.description"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "label",
                            fn: function() {
                              return [
                                _c(
                                  "b-form-row",
                                  [
                                    _c("b-col", [
                                      _c("h4", [_vm._v("Documents")])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { staticClass: "text-right" },
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
                                                          attrs: {
                                                            variant: "dark"
                                                          },
                                                          on: {
                                                            click: _vm.addRow
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                        Add Row\n                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                }
                                              ],
                                              null,
                                              false,
                                              3376670943
                                            )
                                          },
                                          [
                                            _c("b-select", {
                                              attrs: {
                                                "text-field": "title",
                                                "value-field": "id",
                                                options:
                                                  _vm.optionalDocumentTypes
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "first",
                                                    fn: function() {
                                                      return [
                                                        _vm._v(
                                                          "\n                                        Please Select First\n                                    "
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                false,
                                                3222139131
                                              ),
                                              model: {
                                                value: _vm.temp_doc,
                                                callback: function($$v) {
                                                  _vm.temp_doc = $$v
                                                },
                                                expression: "temp_doc"
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
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        336895199
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("b-table-lite", {
                        attrs: {
                          "head-variant": "dark",
                          small: "",
                          hover: "",
                          striped: "",
                          fields: [
                            "id",
                            "description",
                            { key: "the_file", label: "File *" },
                            "action"
                          ],
                          items: _vm.currentItem.documents
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(description)",
                              fn: function(row) {
                                return [
                                  _c("b-textarea", {
                                    attrs: {
                                      placeholder: "Document Description"
                                    },
                                    model: {
                                      value: row.item.description,
                                      callback: function($$v) {
                                        _vm.$set(row.item, "description", $$v)
                                      },
                                      expression: "row.item.description"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-text", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(row.item.title) +
                                        "\n                        "
                                    )
                                  ])
                                ]
                              }
                            },
                            {
                              key: "cell(the_file)",
                              fn: function(row) {
                                return [
                                  _c("b-file", {
                                    attrs: { required: !row.item.filepath },
                                    on: {
                                      input: function($event) {
                                        return _vm.processFileUpload(
                                          row,
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(action)",
                              fn: function(row) {
                                return [
                                  !row.item.is_mandatory
                                    ? _c(
                                        "b-button-group",
                                        { attrs: { size: "sm" } },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.currentItem.documents.splice(
                                                    row.index,
                                                    1
                                                  )
                                                }
                                              }
                                            },
                                            [_c("b-icon-trash")],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          4131476092
                        )
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
            attrs: { lazy: "", id: "view_modal", size: "xl" },
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
          _c(
            "b-form-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", sm: "12" } },
                [
                  _c("h4", [_vm._v("Loan Details")]),
                  _vm._v(" "),
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
                            "documents",
                            "branch_id",
                            "loan_type_id",
                            "loan_sub_type_id"
                          ])
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(key)",
                              fn: function(row) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm._f("startCase")(row.item.key)
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              }
                            },
                            {
                              key: "cell(value)",
                              fn: function(row) {
                                return [
                                  ["created_at", "updated_at"].includes(
                                    row.item.key
                                  )
                                    ? [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              _vm._f("dayjs")(row.item.value)
                                            ) +
                                            "\n                        "
                                        )
                                      ]
                                    : [
                                        "branch",
                                        "loan_type",
                                        "loan_sub_type"
                                      ].includes(row.item.key)
                                    ? [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              row.item.value
                                                ? row.item.value.branch_name ||
                                                    row.item.value.title
                                                : null
                                            ) +
                                            "\n                        "
                                        )
                                      ]
                                    : [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(row.item.value) +
                                            "\n                        "
                                        )
                                      ]
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          569083483
                        )
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.currentItem
                ? _c(
                    "b-col",
                    { attrs: { md: "6", sm: "12" } },
                    [
                      _c("h4", [_vm._v("Documents")]),
                      _vm._v(" "),
                      _c("b-table-lite", {
                        attrs: {
                          "head-variant": "dark",
                          size: "sm",
                          hover: "",
                          striped: "",
                          bordered: "",
                          fields: ["id", "description", "file_url"],
                          items: _vm.currentItem.documents
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(file_url)",
                              fn: function(rr) {
                                return [
                                  _c(
                                    "b-button-group",
                                    { attrs: { size: "sm" } },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            href: rr.item.file_url,
                                            variant: "dark",
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                View\n                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            href: rr.item.file_url,
                                            download: "",
                                            variant: "primary",
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Download\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          1240614265
                        )
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
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