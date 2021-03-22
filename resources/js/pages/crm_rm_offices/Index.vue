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
                :api-url="baseUrl+'/backend/crm_rm_offices'"
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
                        <b-button variant="dark"
                                  title="Branch List"
                                  @click="getBranches(row.item)"
                                  v-b-toggle:branch_list>
                            <b-icon-list/>
                        </b-button>
                    </b-button-group>
                </template>
            </b-table>
        </the-table>
        <b-modal lazy id="edit_modal"
                 v-bind="{
                    size:'md',
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'Add/Edit CRM-RM Office',
                    hideFooter:true
                 }"
                 @hidden="currentItem=null">
            <b-form v-if="currentItem" @submit.prevent="handleSubmit">
                <b-form-group label="Divisional Office *">
                    <b-select
                        :required="true"
                        text-field="name"
                        value-field="id"
                        v-model="currentItem.divisional_office_id"
                        :options="divisional_offices"/>
                </b-form-group>
                <b-form-group label="Name *">
                    <b-input
                        :required="true"
                        placeholder="Name"
                        v-model="currentItem.name"/>
                </b-form-group>
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
                     :items="o2t(currentItem,['divisional_office_id'])">
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
        <b-sidebar
            id="branch_list"
            title="Branch List"
            right
            sidebar-class="sidebar-mw-50"
            body-class="overflow-hidden"
            shadow
            @hidden="branches=[]"
            header-class="bg-primary text-light"
            backdrop>
            <b-table-lite
                hover
                striped
                small
                sticky-header="calc(100vh - 50px)"
                head-variant="dark"
                :fields="[
                    'id',
                    {key:'branch_name',label:'Name'},
                    {key:'branch_code',label: 'Code'},
                    'routing_no',
                    'address',
                    'city',
                    'zip'
                    ]"
                :items="branches"/>
        </b-sidebar>
    </div>
</template>
<style>
#branch_list .close.text-dark {
    color: white !important;
}
</style>
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
    data() {
        return {
            currentItem: null,
            divisional_offices: [],
            branches: [],
            fields: [
                {key: "id", sortable: true},
                {key: "name", sortable: true},
                {key: "divisional_office", sortable: true, formatter: d => d ? d.name : null},
                {key: 'action', thClass: 'text-right', tdClass: 'text-right'},
            ]
        }
    },
    mounted() {
        this.getDivisions();
    },
    methods: {
        o2t,
        initAddForm() {
            this.$set(this, 'currentItem', {
                name: null,
                address: null
            });
            this.$bvModal.show('edit_modal');
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
        getBranches(item) {
            axios
                .post(this.baseUrl + "/backend/branches/list", {
                    crm_rm_office_id: item.id
                })
                .then(({data}) => {
                    this.branches = data;
                })
                .catch(({response}) => {
                    this.branches = [];
                    console.log(response.data)
                });
        },
        handleSubmit() {
            axios
                .post(this.baseUrl + "/backend/crm_rm_offices/store", JSON.parse(JSON.stringify(this.currentItem)))
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
        }
    }
}
</script>
