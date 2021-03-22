(self.webpackChunk=self.webpackChunk||[]).push([[459],{4697:function(t,e){var n,r;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(r=this)||(r={}),void 0===(n=function(){return r.jsonToFormData=function(){var t=function(t,e){return[t,e].reduce((function(t,e){return Object.keys(e).forEach((function(n){return t[n]=e[n]})),t}),{})},e=function(t){return Array.isArray(t)},n=function(t){return!(e(t)||"object"!==o(t)||!t||t instanceof Blob||t instanceof Date)},r=function(t){return"function"==typeof t.append},a=function(){return"function"==typeof FormData},i=function(){return a()?new FormData:null};function l(e,n){if(n&&n.initialFormData){if(!r(n.initialFormData))throw"initialFormData must have an append function."}else if(!a())throw"This environment does not have global form data. options.initialFormData must be specified.";var o={initialFormData:i(),showLeafArrayIndexes:!0,includeNullValues:!1,mapping:function(t){return"boolean"==typeof t?+t?"1":"0":t}},l=t(o,n||{});return u(e,l,l.initialFormData)}function u(t,r,o,a){var i=0;for(var l in t){if(t.hasOwnProperty(l)){var s=a||l,c=r.mapping(t[l]);if(a&&n(t)&&(s=a+"["+l+"]"),a&&e(t)&&(s=e(c)||r.showLeafArrayIndexes?a+"["+i+"]":a+"[]"),e(c)||n(c))u(c,r,o,s);else if(c instanceof FileList)for(var d=0;d<c.length;d++)o.append(s+"["+d+"]",c.item(d));else c instanceof Blob?o.append(s,c,c.name):c instanceof Date?o.append(s,c.toISOString()):(null===c&&r.includeNullValues||null!==c)&&void 0!==c&&o.append(s,c)}i++}return o}return l}()}.apply(e,[]))||(t.exports=n)},8459:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(8845),o=n(4719),a=n(4697),i=n.n(a);const l={components:{TheTable:r.Z},mixins:[o.ZP],computed:{baseUrl:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return baseUrl()})),imageUrl:function(){return this.currentItem.photo_upload?URL.createObjectURL(this.currentItem.photo_upload):this.currentItem.photo},branch:function(){return window.s("branch")},subTypes:function(){var t=this;return this.currentItem.loan_type_id?this.doc_types.find((function(e){return e.id===t.currentItem.loan_type_id})).sub_types:[]},currentSubType:function(){var t=this;return this.currentItem.loan_sub_type_id?this.subTypes.find((function(e){return t.currentItem.loan_sub_type_id===e.id})):null},documentTypes:function(){return this.currentItem.loan_sub_type_id?this.currentSubType.document_types:[]},optionalDocumentTypes:function(){return this.documentTypes.filter((function(t){return!Number(t.is_mandatory)}))}},mounted:function(){this.getDocumentTypes()},data:function(){return{currentItem:null,temp_doc:null,doc_types:[],fields:[{key:"id",sortable:!0},{key:"branch",sortable:!1,formatter:function(t){return t?[t.id,t.branch_name,t.branch_code].join(" | "):null}},{key:"company",sortable:!0},{key:"proprietor_name",sortable:!0,label:"Proprietor"},{key:"sanction_amount",sortable:!0},{key:"sanction_date",sortable:!0},{key:"due_date",sortable:!0},{key:"loan_account_no",sortable:!0,label:"Account #"},{key:"loan_type",sortable:!1,label:"Type",formatter:function(t){return t?t.title:null}},{key:"loan_sub_type",sortable:!1,label:"Sub Type",formatter:function(t){return t?t.title:null}},{key:"action",thClass:"text-right",tdClass:"text-right"}]}},methods:{o2t:o.EI,initAddForm:function(){this.$set(this,"currentItem",{branch_id:this.branch.id,company:null,proprietor_name:null,sanction_amount:null,sanction_date:null,due_date:null,loan_account_no:null,loan_type_id:null,loan_sub_type_id:null,description:null,documents:[]}),this.$bvModal.show("edit_modal")},processFileUpload:function(t,e){var n=this,r=new FormData;r.append("the_file",e),axios.post(this.baseUrl+"/backend/file_upload",r).then((function(e){var r=e.data;n.$set(t.item,"filepath",r)})).catch((function(t){var e=t.response;console.log(e.data)}))},handleSubmit:function(){var t=this;axios.post(this.baseUrl+"/backend/loan_details/store",i()(this.currentItem)).then((function(e){var n=e.data;console.log(n),t.$bvToast.toast(n.message,{title:n.title,autoHideDelay:3e3,appendToast:!0,variant:n.variant||"success"}),t.$refs.datatable.refresh(),t.$bvModal.hide("edit_modal")})).catch((function(e){var n=e.response;console.log(n.data),t.$bvToast.toast(n.data.message,{title:"Server Error",variant:"danger",autoHideDelay:3e3,appendToast:!0})}))},getDocumentTypes:function(){var t=this;axios.post(this.baseUrl+"/backend/loan_details/document_types").then((function(e){var n=e.data;t.$set(t,"doc_types",n)})).catch((function(e){var n=e.response;t.$set(t,"doc_types",[]),console.log(n.data)}))},subTypeSelected:function(){this.$set(this.currentItem,"documents",JSON.parse(JSON.stringify(this.documentTypes.filter((function(t){return!!t.is_mandatory})).map((function(t){return{title:t.title,loan_type_id:t.loan_type_id,loan_sub_type_id:t.loan_sub_type_id,document_type_id:t.id,is_mandatory:!!Number(t.is_mandatory),description:null,the_file:null}}))))),this.temp_doc=null},addRow:function(){var t=this;if(this.temp_doc){var e=this.optionalDocumentTypes.find((function(e){return e.id===t.temp_doc}));this.currentItem.documents.push({title:e?e.title:null,loan_type_id:this.currentItem.loan_type_id,loan_sub_type_id:this.currentItem.loan_sub_type_id,document_type_id:this.temp_doc,is_mandatory:!1,description:null,the_file:null}),this.temp_doc=null}else alert("Please, Select Document Type First!!!")}}};const u=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{attrs:{md:"3",sm:"12"}},[n("b-form-group",{attrs:{label:"Loan Type"}},[n("b-select",{attrs:{"value-field":"id","text-field":"title"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"3",sm:"12"}},[n("b-form-group",{attrs:{label:"Loan Sub Type"}},[n("b-select",{attrs:{"value-field":"id","text-field":"title"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"3",sm:"12"}},[n("b-form-group",{attrs:{label:"Sanction Date"}},[n("b-input",{attrs:{type:"date"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"3",sm:"12"}},[n("b-form-group",{attrs:{label:"Due Date"}},[n("b-input",{attrs:{type:"date"}})],1)],1)],1),t._v(" "),n("the-table",{attrs:{datatable:t.datatable,fields:t.fields},scopedSlots:t._u([{key:"header_buttons",fn:function(){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{attrs:{variant:"dark"},on:{click:t.initAddForm}},[n("b-icon-plus")],1)],1)]},proxy:!0}])},[t._v(" "),n("b-table",t._b({ref:"datatable",attrs:{"no-provider-filtering":!1,"api-url":t.baseUrl+"/backend/loan_details"},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:view_modal",arg:"view_modal"}],attrs:{variant:"dark",title:"View"},on:{click:function(n){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[n("b-icon-eye")],1),t._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:edit_modal",arg:"edit_modal"}],attrs:{variant:"warning",title:"Edit"},on:{click:function(n){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[n("b-icon-pencil-square")],1),t._v(" "),n("b-button",{attrs:{variant:"danger",title:"Delete"}},[n("b-icon-trash")],1)],1)]}}])},"b-table",Object.assign({},t.attrs),!1))],1),t._v(" "),n("b-modal",t._b({attrs:{lazy:"",id:"edit_modal"},on:{hidden:function(e){t.currentItem=null}}},"b-modal",{size:"xl",bodyClass:"p-2",headerBgVariant:"dark",headerTextVariant:"light",title:"Add/Edit Loan Information",hideFooter:!0},!1),[t.currentItem?n("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Company *"}},[n("b-input",{attrs:{required:"",placeholder:"Company Name"},model:{value:t.currentItem.company,callback:function(e){t.$set(t.currentItem,"company",e)},expression:"currentItem.company"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Proprietor Name *"}},[n("b-input",{attrs:{required:"",placeholder:"Proprietor Name"},model:{value:t.currentItem.proprietor_name,callback:function(e){t.$set(t.currentItem,"proprietor_name",e)},expression:"currentItem.proprietor_name"}})],1)],1)],1),t._v(" "),n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Sanction Amount *"}},[n("b-input",{attrs:{type:"number",step:"any",min:"0",required:"",placeholder:"Sanction Amount"},model:{value:t.currentItem.sanction_amount,callback:function(e){t.$set(t.currentItem,"sanction_amount",e)},expression:"currentItem.sanction_amount"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Loan Account No."}},[n("b-input",{attrs:{placeholder:"Loan Account No."},model:{value:t.currentItem.loan_account_no,callback:function(e){t.$set(t.currentItem,"loan_account_no",e)},expression:"currentItem.loan_account_no"}})],1)],1)],1),t._v(" "),n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Sanction date *"}},[n("b-input",{attrs:{type:"date",placeholder:"Sanction Date",required:""},model:{value:t.currentItem.sanction_date,callback:function(e){t.$set(t.currentItem,"sanction_date",e)},expression:"currentItem.sanction_date"}})],1)],1),t._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Due Date"}},[n("b-input",{attrs:{type:"date",placeholder:"Due Date"},model:{value:t.currentItem.due_date,callback:function(e){t.$set(t.currentItem,"due_date",e)},expression:"currentItem.due_date"}})],1)],1)],1),t._v(" "),n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Loan Type *"}},[n("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[n("b-button",{on:{click:function(e){t.currentItem.loan_type_id=null}}},[n("b-icon-trash")],1)]},proxy:!0}],null,!1,4161923811)},[n("b-select",{attrs:{required:"","text-field":"title","value-field":"id",options:t.doc_types},on:{input:function(e){t.currentItem.loan_sub_type_id=null}},model:{value:t.currentItem.loan_type_id,callback:function(e){t.$set(t.currentItem,"loan_type_id",e)},expression:"currentItem.loan_type_id"}})],1)],1)],1),t._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:"Loan Sub Type *"}},[n("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[n("b-button",{on:{click:function(e){t.currentItem.loan_sub_type_id=null}}},[n("b-icon-trash")],1)]},proxy:!0}],null,!1,20827640)},[n("b-select",{attrs:{required:"","text-field":"title","value-field":"id",options:t.subTypes},on:{input:t.subTypeSelected},model:{value:t.currentItem.loan_sub_type_id,callback:function(e){t.$set(t.currentItem,"loan_sub_type_id",e)},expression:"currentItem.loan_sub_type_id"}})],1)],1)],1)],1),t._v(" "),n("b-form-group",{attrs:{label:"Description"}},[n("b-textarea",{attrs:{placeholder:"Loan Description"},model:{value:t.currentItem.description,callback:function(e){t.$set(t.currentItem,"description",e)},expression:"currentItem.description"}})],1),t._v(" "),n("b-form-group",{scopedSlots:t._u([{key:"label",fn:function(){return[n("b-form-row",[n("b-col",[n("h4",[t._v("Documents")])]),t._v(" "),n("b-col",{staticClass:"text-right"},[n("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[n("b-button",{attrs:{variant:"dark"},on:{click:t.addRow}},[t._v("\n                                        Add Row\n                                    ")])]},proxy:!0}],null,!1,3376670943)},[n("b-select",{attrs:{"text-field":"title","value-field":"id",options:t.optionalDocumentTypes},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("\n                                        Please Select First\n                                    ")]},proxy:!0}],null,!1,3222139131),model:{value:t.temp_doc,callback:function(e){t.temp_doc=e},expression:"temp_doc"}})],1)],1)],1)]},proxy:!0}],null,!1,336895199)},[t._v(" "),n("b-table-lite",{attrs:{"head-variant":"dark",small:"",hover:"",striped:"",fields:["id","description",{key:"the_file",label:"File *"},"action"],items:t.currentItem.documents},scopedSlots:t._u([{key:"cell(description)",fn:function(e){return[n("b-textarea",{attrs:{placeholder:"Document Description"},model:{value:e.item.description,callback:function(n){t.$set(e.item,"description",n)},expression:"row.item.description"}}),t._v(" "),n("b-form-text",[t._v("\n                            "+t._s(e.item.title)+"\n                        ")])]}},{key:"cell(the_file)",fn:function(e){return[n("b-file",{attrs:{required:!e.item.filepath},on:{input:function(n){return t.processFileUpload(e,n)}}})]}},{key:"cell(action)",fn:function(e){return[e.item.is_mandatory?t._e():n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:function(n){return t.currentItem.documents.splice(e.index,1)}}},[n("b-icon-trash")],1)],1)]}}],null,!1,4131476092)})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"dark",block:""}},[t._v("SUBMIT")]),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.currentItem)}})],1):t._e()],1),t._v(" "),n("b-modal",t._b({attrs:{lazy:"",id:"view_modal",size:"xl"},on:{hidden:function(e){t.currentItem=null}}},"b-modal",{bodyClass:"p-2",headerBgVariant:"dark",headerTextVariant:"light",title:"View Details"},!1),[n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("h4",[t._v("Loan Details")]),t._v(" "),t.currentItem?n("b-table",{attrs:{"thead-class":"d-none",bordered:"",hover:"",striped:"",small:"","head-variant":"dark",items:t.o2t(t.currentItem,["documents","branch_id","loan_type_id","loan_sub_type_id"])},scopedSlots:t._u([{key:"cell(key)",fn:function(e){return[t._v("\n                        "+t._s(t._f("startCase")(e.item.key))+"\n                    ")]}},{key:"cell(value)",fn:function(e){return[["created_at","updated_at"].includes(e.item.key)?[t._v("\n                            "+t._s(t._f("dayjs")(e.item.value))+"\n                        ")]:["branch","loan_type","loan_sub_type"].includes(e.item.key)?[t._v("\n                            "+t._s(e.item.value?e.item.value.branch_name||e.item.value.title:null)+"\n                        ")]:[t._v("\n                            "+t._s(e.item.value)+"\n                        ")]]}}],null,!1,569083483)}):t._e()],1),t._v(" "),t.currentItem?n("b-col",{attrs:{md:"6",sm:"12"}},[n("h4",[t._v("Documents")]),t._v(" "),n("b-table-lite",{attrs:{"head-variant":"dark",size:"sm",hover:"",striped:"",bordered:"",fields:["id","description","file_url"],items:t.currentItem.documents},scopedSlots:t._u([{key:"cell(file_url)",fn:function(e){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{attrs:{href:e.item.file_url,variant:"dark",target:"_blank"}},[t._v("\n                                View\n                            ")]),t._v(" "),n("b-button",{attrs:{href:e.item.file_url,download:"",variant:"primary",target:"_blank"}},[t._v("\n                                Download\n                            ")])],1)]}}],null,!1,1240614265)})],1):t._e()],1)],1)],1)}),[],!1,null,null,null).exports}}]);