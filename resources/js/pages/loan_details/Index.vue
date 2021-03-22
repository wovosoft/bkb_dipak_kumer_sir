<template>
    <div>
        <b-form @submit.prevent="$refs.datatable.refresh()">
            <b-row>
                <b-col md="3" sm="12">
                    <b-form-group label="Loan Type">
                        <b-input-group>
                            <b-select
                                :options="doc_types"
                                v-model="appends.loan_type_id"
                                value-field="id"
                                text-field="title"/>
                            <template #append>
                                <b-button @click="()=>{
                                appends.loan_type_id=null;
                                appends.loan_sub_type_id=null;
                            }">
                                    <b-icon-trash/>
                                </b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Loan Sub Type">
                        <b-input-group>
                            <b-select
                                :options="appends.loan_type_id?doc_types.find(i => i.id === appends.loan_type_id).sub_types:[]"
                                v-model="appends.loan_sub_type_id"
                                value-field="id"
                                text-field="title"/>
                            <template #append>
                                <b-button @click="appends.loan_sub_type_id=null">
                                    <b-icon-trash/>
                                </b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Sanction Date">
                        <b-input-group>
                            <b-input v-model="appends.sanction_date" type="date"/>
                            <template #append>
                                <b-button @click="appends.sanction_date=null">
                                    <b-icon-trash/>
                                </b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Due Date">
                        <b-input-group>
                            <b-input v-model="appends.due_date" type="date"/>
                            <template #append>
                                <b-button @click="appends.due_date=null">
                                    <b-icon-trash/>
                                </b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group>
                        <template #label>&nbsp;</template>
                        <b-button variant="dark" type="submit" block>
                            <b-icon-search/>
                            SEARCH
                        </b-button>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
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
                :api-url="baseUrl+'/backend/loan_details'"
                v-bind="{...attrs}">
                <template #cell(action)="row">
                    <b-button-group size="sm">
                        <b-button variant="dark"
                                  title="View"
                                  @click="currentItem=JSON.parse(JSON.stringify(row.item))"
                                  v-b-modal:view_modal>
                            <b-icon-eye/>
                        </b-button>
                        <b-button variant="warning"
                                  v-b-modal:edit_modal
                                  @click="currentItem=JSON.parse(JSON.stringify(row.item))"
                                  title="Edit">
                            <b-icon-pencil-square/>
                        </b-button>
                        <b-button variant="danger" title="Delete">
                            <b-icon-trash/>
                        </b-button>
                    </b-button-group>
                </template>
            </b-table>
        </the-table>
        <b-modal lazy id="edit_modal"
                 v-bind="{
                    size:'xl',
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'Add/Edit Loan Information',
                    hideFooter:true
                 }"
                 @hidden="currentItem=null">
            <b-form v-if="currentItem" @submit.prevent="handleSubmit">
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Company *">
                            <b-input
                                required
                                placeholder="Company Name"
                                v-model="currentItem.company"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Proprietor Name *">
                            <b-input
                                required
                                placeholder="Proprietor Name"
                                v-model="currentItem.proprietor_name"/>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Sanction Amount *">
                            <b-input
                                type="number"
                                step="any"
                                min="0"
                                required
                                v-model="currentItem.sanction_amount"
                                placeholder="Sanction Amount"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Loan Account No.">
                            <b-input
                                placeholder="Loan Account No."
                                v-model="currentItem.loan_account_no"
                            />
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Sanction date *">
                            <b-input
                                type="date"
                                placeholder="Sanction Date"
                                v-model="currentItem.sanction_date"
                                required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Due Date">
                            <b-input
                                type="date"
                                placeholder="Due Date"
                                v-model="currentItem.due_date"
                            />
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Loan Type *">
                            <b-input-group>
                                <b-select
                                    @input="currentItem.loan_sub_type_id=null"
                                    required
                                    text-field="title"
                                    value-field="id"
                                    v-model="currentItem.loan_type_id"
                                    :options="doc_types"/>
                                <template #append>
                                    <b-button @click="currentItem.loan_type_id=null">
                                        <b-icon-trash/>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Loan Sub Type *">
                            <b-input-group>
                                <b-select
                                    @input="subTypeSelected"
                                    required
                                    text-field="title"
                                    value-field="id"
                                    v-model="currentItem.loan_sub_type_id"
                                    :options="subTypes"/>
                                <template #append>
                                    <b-button @click="currentItem.loan_sub_type_id=null">
                                        <b-icon-trash/>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-group label="Description">
                    <b-textarea
                        placeholder="Loan Description"
                        v-model="currentItem.description"
                    />
                </b-form-group>
                <b-form-group>
                    <template #label>
                        <b-form-row>
                            <b-col>
                                <h4>Documents</h4>
                            </b-col>
                            <b-col class="text-right">
                                <b-input-group>
                                    <b-select
                                        v-model="temp_doc"
                                        text-field="title"
                                        value-field="id"
                                        :options="optionalDocumentTypes">
                                        <template #first>
                                            Please Select First
                                        </template>
                                    </b-select>
                                    <template #append>
                                        <b-button variant="dark" @click="addRow">
                                            Add Row
                                        </b-button>
                                    </template>
                                </b-input-group>
                            </b-col>
                        </b-form-row>
                    </template>
                    <b-table-lite
                        head-variant="dark"
                        small
                        hover
                        striped
                        :fields="[
                            'id',
                            'description',
                            {key:'the_file',label: 'File *'},
                            'action'
                        ]"
                        :items="currentItem.documents">
                        <template #cell(description)="row">
                            <b-textarea
                                placeholder="Document Description"
                                v-model="row.item.description"
                            />
                            <b-form-text>
                                {{ row.item.title }}
                            </b-form-text>
                        </template>
                        <template #cell(the_file)="row">
                            <b-file
                                :required="!row.item.filepath"
                                @input="processFileUpload(row,$event)"
                            />
                        </template>
                        <template #cell(action)="row">
                            <b-button-group size="sm" v-if="!row.item.is_mandatory">
                                <b-button @click="currentItem.documents.splice(row.index,1)">
                                    <b-icon-trash/>
                                </b-button>
                            </b-button-group>
                        </template>
                    </b-table-lite>
                </b-form-group>
                <b-button type="submit" variant="dark" block>SUBMIT</b-button>
                <!--                <pre v-html="currentItem"></pre>-->
            </b-form>
        </b-modal>
        <b-modal lazy id="view_modal"
                 size="xl"
                 v-bind="{
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'View Details'
                 }"
                 @hidden="currentItem=null">
            <b-form-row>
                <b-col md="6" sm="12">
                    <h4>Loan Details</h4>
                    <b-table v-if="currentItem"
                             thead-class="d-none"
                             bordered
                             hover
                             striped
                             small
                             head-variant="dark"
                             :items="o2t(currentItem,['documents','branch_id','loan_type_id','loan_sub_type_id'])">
                        <template #cell(key)="row">
                            {{ row.item.key|startCase }}
                        </template>
                        <template #cell(value)="row">
                            <template v-if="['created_at','updated_at'].includes(row.item.key)">
                                {{ row.item.value|dayjs }}
                            </template>

                            <template v-else-if="['branch','loan_type','loan_sub_type'].includes(row.item.key)">
                                {{ row.item.value ? (row.item.value.branch_name || row.item.value.title) : null }}
                            </template>
                            <template v-else>
                                {{ row.item.value }}
                            </template>
                        </template>
                    </b-table>
                </b-col>
                <b-col md="6" sm="12" v-if="currentItem">
                    <h4>Documents</h4>
                    <b-table-lite
                        head-variant="dark"
                        size="sm"
                        hover
                        striped
                        bordered
                        :fields="['id','description','file_url']"
                        :items="currentItem.documents">
                        <template #cell(file_url)="rr">
                            <b-button-group size="sm">
                                <b-button :href="rr.item.file_url" variant="dark" target="_blank">
                                    View
                                </b-button>
                                <b-button :href="rr.item.file_url" download variant="primary" target="_blank">
                                    Download
                                </b-button>
                            </b-button-group>
                        </template>
                    </b-table-lite>
                </b-col>
            </b-form-row>
        </b-modal>
    </div>
</template>
<script>
import TheTable from "../../components/TheTable";
import dt, {o2t} from "../../partials/datatable";
import o2FD from "./../../partials/jsonToFormData";

export default {
    components: {
        TheTable
    },
    mixins: [dt],
    computed: {
        baseUrl() {
            return baseUrl();
        },
        imageUrl() {
            if (this.currentItem.photo_upload)
                return URL.createObjectURL(this.currentItem.photo_upload);
            return this.currentItem.photo;
        },
        branch() {
            return window.s('branch');
        },
        subTypes() {
            if (!this.currentItem.loan_type_id) {
                return [];
            }
            return this.doc_types.find(i => i.id === this.currentItem.loan_type_id).sub_types
        },
        currentSubType() {
            if (!this.currentItem.loan_sub_type_id) {
                return null;
            }
            return this.subTypes.find(i => this.currentItem.loan_sub_type_id === i.id);
        },
        documentTypes() {
            if (!this.currentItem.loan_sub_type_id) {
                return [];
            }
            return this.currentSubType.document_types;
        },
        optionalDocumentTypes() {
            return this.documentTypes.filter(i => !Number(i.is_mandatory));
        }

    },
    mounted() {
        this.getDocumentTypes();
    },
    data() {
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
            fields: [
                {key: "id", sortable: true},
                {
                    key: "branch",
                    sortable: false,
                    formatter: v => v ? [v.id, v.branch_name, v.branch_code].join(' | ') : null
                },
                {key: "company", sortable: true},
                {key: "proprietor_name", sortable: true, label: 'Proprietor'},
                {key: "sanction_amount", sortable: true},
                {key: "sanction_date", sortable: true},
                {key: "due_date", sortable: true},
                {key: "loan_account_no", sortable: true, label: 'Account #'},
                {
                    key: "loan_type",
                    sortable: false,
                    label: 'Type',
                    formatter: v => v ? v.title : null
                },
                {
                    key: "loan_sub_type",
                    sortable: false,
                    label: 'Sub Type',
                    formatter: v => v ? v.title : null
                },

                {key: 'action', thClass: 'text-right', tdClass: 'text-right'},
            ]
        }
    },
    methods: {
        o2t,
        initAddForm() {
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
                documents: [],
            });
            this.$bvModal.show('edit_modal');
        },
        processFileUpload(row, f) {
            let fd = new FormData();
            fd.append('the_file', f);
            axios
                .post(this.baseUrl + "/backend/file_upload", fd)
                .then(({data}) => {
                    this.$set(row.item, 'filepath', data);
                })
                .catch(({response}) => {
                    console.log(response.data)
                })
        },
        handleSubmit() {
            axios
                .post(this.baseUrl + "/backend/loan_details/store", o2FD(this.currentItem))
                .then(({data}) => {
                    console.log(data)
                    this.$bvToast.toast(data.message, {
                        title: data.title,
                        autoHideDelay: 3000,
                        appendToast: true,
                        variant: data.variant || 'success'
                    });
                    this.$refs.datatable.refresh();
                    this.$bvModal.hide('edit_modal');
                })
                .catch(({response}) => {
                    console.log(response.data)
                    this.$bvToast.toast(response.data.message, {
                        title: "Server Error",
                        variant: 'danger',
                        autoHideDelay: 3000,
                        appendToast: true
                    });
                });
        },
        getDocumentTypes() {
            axios
                .post(this.baseUrl + "/backend/loan_details/document_types")
                .then(({data}) => {
                    this.$set(this, 'doc_types', data);
                })
                .catch(({response}) => {
                    this.$set(this, 'doc_types', []);
                    console.log(response.data)
                })
        },
        subTypeSelected() {
            this.$set(
                this.currentItem,
                'documents',
                JSON.parse(JSON.stringify(
                    this
                        .documentTypes
                        .filter(i => !!i.is_mandatory)
                        .map(i => {
                            return {
                                title: i.title,
                                loan_type_id: i.loan_type_id,
                                loan_sub_type_id: i.loan_sub_type_id,
                                document_type_id: i.id,
                                is_mandatory: !!Number(i.is_mandatory),
                                description: null,
                                the_file: null
                            };
                        })
                )));
            this.temp_doc = null;
        },
        addRow() {
            if (this.temp_doc) {
                let item = this.optionalDocumentTypes.find(i => i.id === this.temp_doc);
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
}
</script>
