<template>
    <div>
        <the-table :datatable="datatable" :fields="fields">
            <template #header_buttons>
                <b-button-group size="sm">
                    <b-button variant="dark" @click="initAddForm">
                        <b-icon-plus/>
                    </b-button>
                </b-button-group>
            </template>
            <b-table
                ref="datatable"
                :no-provider-filtering="false"
                :api-url="baseUrl + '/backend/loan_types'"
                v-bind="{ ...attrs }"
            >
                <template #cell(action)="row">
                    <b-button-group size="sm">
                        <b-button
                            variant="dark"
                            title="Details"
                            @click="row.toggleDetails"
                            v-b-modal:loan_type_details>
                            <b-icon-eye/>
                        </b-button>
                        <b-button
                            variant="warning"
                            v-b-modal:edit_modal
                            @click="currentItem = JSON.parse(JSON.stringify(row.item))"
                            title="Edit"
                        >
                            <b-icon-pencil-square/>
                        </b-button>
                        <b-button variant="danger" title="Delete">
                            <b-icon-trash/>
                        </b-button>
                    </b-button-group>
                </template>
                <template #row-details="row">
                    <b-form-row>
                        <b-col md="4" sm="12">
                            <div>
                                <h5 class="d-inline">
                                    Loan Sub Types
                                </h5>
                                <b-button
                                    v-b-modal:add-sub-type
                                    @click="currentSubtype={
                                        loan_type_id:row.item.id,
                                        title:null
                                    }"
                                    variant="dark"
                                    title="Add Sub Type"
                                    class="float-right" size="sm">
                                    Add
                                </b-button>
                            </div>
                            <br>
                            <b-list-group>
                                <b-list-group-item
                                    class="p-1 border-0"
                                    v-for="(st , st_key) in row.item.sub_types" :key="st_key">
                                    <b-input-group size="sm">
                                        <div class="form-control" v-b-toggle="'doc-acc-'+st.id">
                                            {{ [st.id, st.title].join(' | ') }}
                                        </div>
                                        <template #append>
                                            <b-button-group size="sm">
                                                <b-button variant="dark" v-b-modal:add-sub-type
                                                          @click="currentSubtype=JSON.parse(JSON.stringify(st))">
                                                    <b-icon-pencil-square/>
                                                </b-button>
                                                <b-button variant="danger" @click="trashSubType(st.id)">
                                                    <b-icon-trash/>
                                                </b-button>
                                            </b-button-group>
                                        </template>
                                    </b-input-group>
                                </b-list-group-item>
                            </b-list-group>
                        </b-col>
                        <b-col md="8" sm="12">
                            <div class="accordion" role="tablist">
                                <b-collapse
                                    v-for="(st , st_key) in row.item.sub_types"
                                    :key="st_key"
                                    :accordion="'doc-accordion-'+row.item.id"
                                    role="tabpanel"
                                    :id="'doc-acc-'+st.id">
                                    <b-card no-body header-class="text-right">
                                        <template #header>
                                            <h5 class="d-inline">
                                                Document Types of <strong>{{ st.title }}</strong>
                                            </h5>
                                            <b-button v-b-modal:add-document
                                                      variant="dark"
                                                      size="sm"
                                                      @click="currentDocument={
                                                          loan_type_id:row.item.id,
                                                          loan_sub_type_id: st.id,
                                                          title:null,
                                                          is_mandatory:false
                                                      }">
                                                Add
                                            </b-button>
                                        </template>
                                        <b-table-lite
                                            head-variant="dark"
                                            :items="st.document_types"
                                            :fields="['id','title','is_mandatory',{key:'action',thClass:'text-right',tdClass:'text-right'}]">
                                            <template #cell(is_mandatory)="mm">
                                                {{ Number(mm.item.is_mandatory) ? 'YES' : 'NO' }}
                                            </template>
                                            <template #cell(action)="mm">
                                                <b-button-group size="sm">
                                                    <b-button variant="warning"
                                                              v-b-modal:add-document
                                                              @click="()=>{
                                                                  currentDocument={
                                                                      ...JSON.parse(JSON.stringify(mm.item)),
                                                                      is_mandatory:!!Number(mm.item.is_mandatory)
                                                                  }
                                                              }"
                                                              title="Edit Document">
                                                        <b-icon-pencil-square/>
                                                    </b-button>
                                                    <b-button variant="danger"
                                                              @click="trashDocType(mm.item.id)"
                                                              title="Delete Document Type">
                                                        <b-icon-trash/>
                                                    </b-button>
                                                </b-button-group>
                                            </template>
                                        </b-table-lite>
                                    </b-card>
                                </b-collapse>
                            </div>
                        </b-col>
                    </b-form-row>
                </template>
            </b-table>
        </the-table>
        <b-modal
            lazy
            id="edit_modal"
            v-bind="{
                size: 'md',
                bodyClass: 'p-2',
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                title: 'Add/Edit Loan Type',
                hideFooter: true,
            }"
            @hidden="currentItem = null">
            <b-form v-if="currentItem" @submit.prevent="handleSubmit">
                <b-form-group label="Title">
                    <b-input
                        :required="true"
                        placeholder="Name"
                        v-model="currentItem.title"
                    />
                </b-form-group>
                <b-button type="submit" variant="dark" block>SUBMIT</b-button>
            </b-form>
        </b-modal>
        <b-modal id="add-document"
                 hide-footer
                 @hidden="currentDocument=null"
                 header-bg-variant="dark"
                 header-text-variant="light"
                 title="Add Document Type">
            <template #default="{hide}">
                <add-document
                    v-if="currentDocument"
                    @success="v=>{
                        hide();
                        $refs.datatable.refresh();
                    }"
                    :item="currentDocument"/>
            </template>
        </b-modal>
        <b-modal id="add-sub-type"
                 hide-footer
                 @hidden="currentSubtype=null"
                 header-bg-variant="dark"
                 header-text-variant="light"
                 title="Add Document Type">
            <template #default="{hide}">
                <add-sub-type
                    v-if="currentSubtype"
                    @success="v=>{
                        hide();
                        $refs.datatable.refresh();
                    }"
                    :item="currentSubtype"/>
            </template>
        </b-modal>
    </div>
</template>
<script>
import TheTable from "../../components/TheTable";
import dt, {o2t} from "../../partials/datatable";
import AddDocument from "./AddDocument";
import AddSubType from "./AddSubType";

export default {
    components: {
        TheTable,
        AddDocument,
        AddSubType
    },
    mixins: [dt],
    computed: {
        baseUrl() {
            return baseUrl();
        },
    },
    data() {
        return {
            currentItem: null,
            currentSubtype: null,
            currentDocument: null,
            form_sub_type: {
                title: null,
            },
            document_type_form: {
                title: null,
                is_mandatory: false,
            },
            fields: [
                {key: "id", sortable: true},
                {key: "title", sortable: true},
                {key: "action", thClass: "text-right", tdClass: "text-right"},
            ],
        };
    },
    methods: {
        o2t,
        initAddForm() {
            this.$set(this, "currentItem", {
                name: null,
                address: null,
            });
            this.$bvModal.show("edit_modal");
        },
        handleSubmit() {
            axios
                .post(
                    this.baseUrl + "/backend/loan_types/store",
                    JSON.parse(JSON.stringify(this.currentItem))
                )
                .then(({data}) => {
                    console.log(data);
                    this.$bvToast.toast(data.message, {
                        title: data.title,
                        autoHideDelay: 3000,
                        appendToast: true,
                        variant: data.variant || "success",
                    });
                    this.$refs.datatable.refresh();
                    this.$bvModal.hide("edit_modal");
                })
                .catch(({response}) => {
                    console.log(response.data);
                    this.$bvToast.toast(response.data.message, {
                        title: "Server Error",
                        variant: "danger",
                        autoHideDelay: 3000,
                        appendToast: true,
                    });
                });
        },
        getCrmRmOffices(item) {
            axios
                .post(this.baseUrl + "/backend/crm_rm_offices/list", {
                    divisional_office_id: item.id,
                })
                .then(({data}) => {
                    this.crm_rm_offices = data;
                })
                .catch(({response}) => {
                    this.crm_rm_offices = [];
                    console.log(response.data);
                });
        },
        trashSubType(id) {
            if (confirm('Are You Sure?')) {
                axios
                    .post(this.baseUrl + "/backend/loan_sub_types/delete/" + id)
                    .then(({data}) => {
                        this.$root.msgBox(data);
                        this.$refs.datatable.refresh();
                    })
                    .catch(({response}) => {
                        this.$root.msgBox(response.data);
                        console.log(response.data);
                    });
            }
        },
        trashDocType(id) {
            if (confirm('Are You Sure?')) {
                axios
                    .post(this.baseUrl + "/backend/document_types/delete/" + id)
                    .then(({data}) => {
                        this.$root.msgBox(data);
                        this.$refs.datatable.refresh();
                    })
                    .catch(({response}) => {
                        this.$root.msgBox(response.data);
                        console.log(response.data);
                    });
            }
        }
    },
};
</script>
<style>
#loan-types-accordion .not-collapsed {
    background-color: black;
    color: white;
}
</style>
