<template>
    <b-modal lazy id="view_modal"
             v-bind="{
                    size:'xl',
                    bodyClass:'p-2',
                    headerBgVariant:'dark',
                    headerTextVariant:'light',
                    title:'View Details'
                 }"
             @hidden="$emit('hidden',true)">
        <b-form-row>
            <b-col md="3" sm="12">
                <b-img-lazy
                    v-if="item"
                    thumbnail
                    fluid-grow
                    :src="isURL(item.profile_photo)?item.profile_photo:'storage/'+item.profile_photo"
                />
            </b-col>
            <b-col md="9" sm="12">
                <b-card title="Overview" body-class="p-2">
                    <b-table v-if="item"
                             thead-class="d-none"
                             small
                             head-variant="dark"
                             :items="o2t(item,[
                             'email_verified_at',
                             'personal_info',
                             'academic_info',
                             'contact_info',
                             'professional_info',
                             'family_members',
                             'role_id','profile_photo'])">
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
                </b-card>
            </b-col>
        </b-form-row>
        <b-card title="Personal Information" class="mt-2" body-class="p-2">
            <b-table v-if="item"
                     thead-class="d-none"
                     small
                     hover
                     striped
                     bordered
                     head-variant="dark"
                     :items="o2t(item.personal_info,[
                          'user_id',
                         'division_id',
                         'district_id',
                         'upazila_id',
                     ])">
                <template #cell(key)="row">
                    {{ row.item.key | startCase }}
                </template>
                <template #cell(value)="row">
                    <template v-if="['created_at','updated_at'].includes(row.item.key)">
                        {{ row.item.value | dayjs }}
                    </template>
                    <template v-else-if="['division','district','upazila'].includes(row.item.key)">
                        {{ row.item.value ? [row.item.value.name, row.item.value.bn_name].join(' | ') : null }}
                    </template>
                    <template v-else>
                        {{ row.item.key|startCase }}
                    </template>
                </template>
            </b-table>
        </b-card>
        <b-card title="Academic Information" class="mt-2" body-class="p-2">
            <b-table v-if="item"
                     small
                     hover
                     striped
                     bordered
                     details-td-class="p-0"
                     @row-clicked="row=>$set(row,'_showDetails',!(!!row._showDetails))"
                     head-variant="dark"
                     :fields="['id','exam_name','board','institution','passing_year',
                     {
                         key:'result', formatter:(a,b,c)=>[c.result,c.result_scale].join('/')
                     },
                     {
                         key:'created_at',formatter:d=>$options.filters.dayjs(d)
                     }]"
                     :items="item.academic_info">
                <template #row-details="row">
                    <b-card title="Description" body-class="p-2" class="border-0">
                        {{ row.item.description }}
                    </b-card>
                    <!--                    <b-card title="Files" body-class="p-2" class="border-0">-->
                    <!--                        {{ row.item.files }}-->
                    <!--                    </b-card>-->
                </template>
            </b-table>
        </b-card>
        <b-card title="Contact Information" class="mt-2" body-class="p-2">
            <b-table v-if="item"
                     small
                     hover
                     striped
                     bordered
                     :fields="['id','type','content','created_at']"
                     head-variant="dark"
                     :items="item.contact_info">
                <template #cell(content)="row">
                    <a :href="(row.item.type==='phone'?'tel:':'mailto:')+row.item.content">
                        {{ row.item.content }}
                    </a>
                </template>
                <template #cell(created_at)="row">
                    {{ row.item.created_at|dayjs }}
                </template>
            </b-table>
        </b-card>
        <b-card v-if="item && item.professional_info"
                title="Professional Information"
                class="mt-2"
                body-class="p-2">
            <b-table
                details-td-class="p-0"
                small
                hover
                striped
                bordered
                @row-clicked="row=>$set(row,'_showDetails',!(!!row._showDetails))"
                head-variant="dark"
                :fields="['id','title','position','institution',
                     {key:'starting_date',label:'From'},
                     {key:'ending_date',label:'To'},
                     {
                         key:'created_at',
                         label: 'Date',
                         formatter:d=>$options.filters.dayjs(d)
                     }
                ]"
                :items="item.professional_info">
                <template #row-details="row">
                    <b-card title="Description" body-class="p-2" class="border-0">
                        {{ row.item.description }}
                    </b-card>
                    <!--                    <b-card title="Files" body-class="p-2" class="border-0">-->
                    <!--                        {{ row.item.files }}-->
                    <!--                    </b-card>-->
                </template>
            </b-table>
        </b-card>
        <b-card title="Family Members" class="mt-2" body-class="p-2">
            <b-table v-if="item"
                     :fields="[
                         'id',
                         'relation',
                         'first_name',
                         'mid_name',
                         'last_name',
                         {
                             key:'date_of_birth',
                             label:'DOB'
                         },
                         'nid',
                         'nationality',
                         'gender',
                         'description'
                     ]"
                     small
                     hover
                     striped
                     bordered
                     head-variant="dark"
                     :items="item.family_members">
            </b-table>
        </b-card>
    </b-modal>
</template>

<script>
import {o2t} from "../../partials/datatable";

export default {
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    methods: {
        o2t,
        isURL(str) {
            return new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
                .test(str);
        }
    }
}
</script>

<style scoped>

</style>
