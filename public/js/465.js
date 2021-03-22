(self.webpackChunk=self.webpackChunk||[]).push([[465],{465:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var r=a(551),n=a(719);const s={components:{TheTable:r.Z},mixins:[n.ZP],data:function(){var t=this;return{currentItem:null,fields:[{key:"id",sortable:!0},{key:"name",sortable:!0},{key:"email",sortable:!0},{key:"created_at",sortable:!0,formatter:function(e){return t.$options.filters.dayjs(e)}},{key:"action",thClass:"text-right",tdClass:"text-right"}]}},methods:{o2t:n.EI,handleSubmit:function(){var t=this;axios.post("http://bkbprojectmanager.test/backend/users/store",JSON.parse(JSON.stringify(this.currentItem))).then((function(e){var a=e.data;console.log(a),t.$bvToast.toast(a.message,{title:a.title,autoHideDelay:3e3,appendToast:!0,variant:a.variant||"success"}),t.$refs.datatable.refresh(),t.$bvModal.hide("edit_modal")})).catch((function(e){var a=e.response;console.log(a.data),t.$bvToast.toast(a.data.message,{title:"Server Error",variant:"danger",autoHideDelay:3e3,appendToast:!0})}))}}};const i=(0,a(900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("the-table",{attrs:{datatable:t.datatable,fields:t.fields}},[a("b-table",t._b({ref:"datatable",attrs:{"no-provider-filtering":!1,"api-url":"http://bkbprojectmanager.test/backend/users"},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:view_modal",arg:"view_modal"}],attrs:{variant:"dark",title:"View"},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("b-icon-eye")],1),t._v(" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:edit_modal",arg:"edit_modal"}],attrs:{variant:"warning",title:"Edit"},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("b-icon-upload")],1),t._v(" "),a("b-button",{attrs:{variant:"danger",title:"Delete"}},[a("b-icon-trash")],1)],1)]}}])},"b-table",Object.assign({},t.attrs),!1))],1),t._v(" "),a("b-modal",t._b({attrs:{lazy:"",id:"edit_modal"},on:{hidden:function(e){t.currentItem=null}}},"b-modal",{bodyClass:"p-2",headerBgVariant:"dark",headerTextVariant:"light",title:"Add/Edit User",hideFooter:!0},!1),[t.currentItem?a("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("b-form-group",{attrs:{label:"Name"}},[a("b-input",{attrs:{placeholder:"User Name"},model:{value:t.currentItem.name,callback:function(e){t.$set(t.currentItem,"name",e)},expression:"currentItem.name"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Email"}},[a("b-input",{attrs:{placeholder:"User Email Address"},model:{value:t.currentItem.email,callback:function(e){t.$set(t.currentItem,"email",e)},expression:"currentItem.email"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password"},model:{value:t.currentItem.password,callback:function(e){t.$set(t.currentItem,"password",e)},expression:"currentItem.password"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Confirm Password"}},[a("b-input",{attrs:{type:"password"},model:{value:t.currentItem.password_confirmation,callback:function(e){t.$set(t.currentItem,"password_confirmation",e)},expression:"currentItem.password_confirmation "}})],1),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"dark",block:""}},[t._v("SUBMIT")])],1):t._e()],1),t._v(" "),a("b-modal",t._b({attrs:{lazy:"",id:"view_modal"},on:{hidden:function(e){t.currentItem=null}}},"b-modal",{bodyClass:"p-2",headerBgVariant:"dark",headerTextVariant:"light",title:"View Details"},!1),[t.currentItem?a("b-table",{attrs:{"thead-class":"d-none",bordered:"",hover:"",striped:"",small:"","head-variant":"dark",items:t.o2t(t.currentItem,["email_verified_at"])},scopedSlots:t._u([{key:"cell(key)",fn:function(e){return[t._v("\n                "+t._s(t._f("startCase")(e.item.key))+"\n            ")]}},{key:"cell(value)",fn:function(e){return[["created_at","updated_at"].includes(e.item.key)?[t._v("\n                    "+t._s(t._f("dayjs")(e.item.value))+"\n                ")]:[t._v("\n                    "+t._s(e.item.value)+"\n                ")]]}}],null,!1,4228248442)}):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);