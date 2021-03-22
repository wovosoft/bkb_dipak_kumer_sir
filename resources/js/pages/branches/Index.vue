<template>
    <div>
        <b-row>
            <b-col md="4" sm="12">
                <b-form-group label="Divisional Office">
                    <b-input-group>
                        <b-select
                            @input="getCrmRmOffices"
                            text-field="name"
                            value-field="id"
                            v-model="appends.divisional_office_id"
                            :options="divisional_offices"/>
                        <template #append>
                            <b-button @click="()=>{
                                appends.divisional_office_id=null;
                                crm_rm_offices=[];
                            }">
                                <b-icon-trash/>
                            </b-button>
                        </template>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
                <b-form-group label="CRM-RM Office">
                    <b-input-group>
                        <b-select
                            text-field="name"
                            value-field="id"
                            v-model="appends.crm_rm_office_id"
                            :options="crm_rm_offices"/>
                        <template #append>
                            <b-button @click="appends.crm_rm_office_id=null">
                                <b-icon-trash/>
                            </b-button>
                        </template>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group>
                    <template #label>&nbsp;</template>
                    <b-button block variant="dark"
                              @click="$refs.datatable.refresh()">
                        <b-icon-search/>
                        SEARCH
                    </b-button>
                </b-form-group>
            </b-col>
        </b-row>
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
                :api-url="baseUrl+'/backend/branches'"
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
                    size:'lg',
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'Add/Edit Branch',
                    hideFooter:true
                 }"
                 @shown="()=>{
                     if (currentItem.divisional_office_id){
                         getCrmRmOffices();
                     }
                 }"
                 @hidden="()=>{
                     currentItem=null;
                     crm_rm_offices=[];
                 }">
            <b-form v-if="currentItem" @submit.prevent="handleSubmit">
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Divisional Office *">
                            <b-input-group>
                                <b-select
                                    @input="getCrmRmOffices"
                                    :required="true"
                                    text-field="name"
                                    value-field="id"
                                    v-model="currentItem.divisional_office_id"
                                    :options="divisional_offices"/>
                                <template #append>
                                    <b-button @click="()=>{
                                        currentItem.divisional_office_id=null;
                                        currentItem.crm_rm_office_id=null;
                                        crm_rm_offices=[];
                                    }">
                                        <b-icon-trash/>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Divisional Office *">
                            <b-select
                                :required="true"
                                text-field="name"
                                value-field="id"
                                v-model="currentItem.crm_rm_office_id"
                                :options="crm_rm_offices"/>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Branch Name">
                            <b-input v-model="currentItem.branch_name"
                                     :required="true"
                                     placeholder="Branch Name"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Branch Code">
                            <b-input
                                :required="true"
                                placeholder="Branch Code"
                                v-model="currentItem.branch_code"/>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Routing No">
                            <b-input
                                placeholder="Branch Routing No"
                                v-model="currentItem.routing_no"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="City">
                            <b-input
                                placeholder="Branch City"
                                v-model="currentItem.city"/>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="ZIP">
                            <b-input
                                placeholder="Branch ZIP"
                                v-model="currentItem.zip"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Address">
                            <b-textarea
                                placeholder="Branch Address"
                                v-model="currentItem.address"/>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-button type="submit" variant="dark" block>SUBMIT</b-button>
            </b-form>
        </b-modal>
        <b-modal lazy id="view_modal"
                 v-bind="{
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'View Details'
                 }"
                 @hidden="currentItem=null">
            <b-table v-if="currentItem"
                     thead-class="d-none"
                     bordered
                     hover
                     striped
                     small
                     head-variant="dark"
                     :items="o2t(currentItem,['crm_rm_office_id','divisional_office_id'])">
                <template #cell(key)="row">
                    {{ row.item.key|startCase }}
                </template>
                <template #cell(value)="row">
                    <template v-if="['created_at','updated_at'].includes(row.item.key)">
                        {{ row.item.value|dayjs }}
                    </template>
                    <template v-else>
                        {{ row.item.value }}
                    </template>
                </template>
            </b-table>
        </b-modal>
    </div>
</template>

<script>
import TheTable from "../../components/TheTable";
import dt, {o2t} from "../../partials/datatable";

export default {
    components: {
        TheTable
    },
    mixins: [dt],
    computed: {
        baseUrl() {
            return baseUrl();
        }
    },
    mounted() {
        this.getDivisions();
    },
    data() {
        return {
            currentItem: null,
            divisional_offices: [],
            crm_rm_offices: [],
            appends: {
                crm_rm_office_id: null,
                divisional_office_id: null
            },
            fields: [
                {key: "id", sortable: true},
                {key: "branch_name", sortable: true},
                {key: "branch_code", sortable: true},
                {key: "routing_no", sortable: true, visible: false},
                {
                    key: "divisional_office",
                    sortable: false,
                    formatter: d => d ? d.name : null
                },
                {
                    key: "crm_rm_office",
                    sortable: false,
                    formatter: d => d ? d.name : null
                },
                {key: "city", sortable: true, visible: false},
                {key: "zip", sortable: true, visible: false},
                {key: "address", sortable: true, visible: false},
                {key: 'action', thClass: 'text-right', tdClass: 'text-right'},
            ]
        }
    },
    methods: {
        o2t,
        initAddForm() {
            this.$set(this, 'currentItem', {
                crm_rm_office_id: null,
                divisional_office_id: null,
                branch_name: null,
                branch_code: null,
                routing_no: null,
                address: null,
                city: null,
                zip: null,
            });
            this.$bvModal.show('edit_modal');
        },
        handleSubmit() {
            axios
                .post(this.baseUrl + "/backend/branches/store", JSON.parse(JSON.stringify(this.currentItem)))
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
                })
        },
        getDivisions() {
            axios
                .post(this.baseUrl + "/backend/divisional_offices/list")
                .then(({data}) => {
                    this.divisional_offices = data;
                })
                .catch(({response}) => {
                    this.divisional_offices = [];
                    console.log(response.data)
                });
        },
        getCrmRmOffices(id = null) {
            if (id || this.currentItem.divisional_office_id) {
                axios
                    .post(this.baseUrl + "/backend/crm_rm_offices/list", {
                        divisional_office_id: id || this.currentItem.divisional_office_id
                    })
                    .then(({data}) => {
                        this.crm_rm_offices = data;
                    })
                    .catch(({response}) => {
                        this.crm_rm_offices = [];
                        console.log(response.data)
                    });
            } else {
                this.$set(this, 'crm_rm_offices', []);
                this.$set(this.currentItem, 'crm_rm_office_id', null);
            }

        },
    }
}
</script>
