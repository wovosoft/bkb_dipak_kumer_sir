<b-collapse id="academic-info" accordion="my-accordion" role="tabpanel">
    <b-collapse id="add_academic_info" v-model="show_academic_form">
        <b-form @submit.prevent="handleAcademicInfo">
            <b-card title="Add Academic Info"
                    footer-class="p-2"
                    class="mb-2">
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Examination">
                            <b-input
                                size="sm"
                                v-model="academic_info.exam_name"
                                required
                                placeholder="Examination Name"></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Board">
                            <b-input
                                size="sm"
                                v-model="academic_info.board"
                                required
                                placeholder="Board Name"></b-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Institution">
                            <b-input
                                size="sm"
                                required
                                v-model="academic_info.institution"
                                placeholder="Institution Name"></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Passing Year">
                            <b-select
                                size="sm"
                                v-model="academic_info.passing_year"
                                :options="Array.from(Array(((new Date()).getFullYear()-1980+1)).keys()).map(i=>i+1980)">
                            </b-select>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Result & Scale">
                            <b-input-group size="sm">
                                <b-input placeholder="Result" type="number" step="any"
                                         v-model="academic_info.result"
                                         :min="0"></b-input>
                                <b-select v-model="academic_info.result_scale"
                                          :options="[4,5]"></b-select>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Documents">
                            <b-file size="sm"></b-file>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-group label="Description">
                    <b-textarea v-model="academic_info.description"
                                size="sm"
                                placeholder="Examination Description"></b-textarea>
                </b-form-group>
                <b-button-group class="w-100" size="sm">
                    <b-button variant="danger"
                              @click="cancelAcademicInfoForm">
                        CANCEL
                    </b-button>
                    <b-button variant="dark" type="submit">
                        SUBMIT
                    </b-button>
                </b-button-group>
            </b-card>
        </b-form>
    </b-collapse>
    <b-card title="Academic Information">
        <div style="position: relative;box-sizing: border-box;">
            <b-button
                style="position: absolute;right: 0;top:-40px;z-index: 1;"
                size="sm"
                @click="initAcademicInfoForm"
                variant="dark">
                Add
            </b-button>
        </div>

        <b-table
            ref="academic_info_table"
            head-variant="dark"
            small
            bordered
            hover
            striped
            :fields="[{key:'sl',label:'SL'},'exam_name','board','institution','passing_year','result',{key:'action',thClass:'text-right',tdClass:'text-right'}]"
            :items="academicInfoList">
            <template #cell(sl)="row">
                @{{row.index+1}}
            </template>
            <template #cell(result)="row">
                @{{ row.item.result }}/@{{ row.item.result_scale }}
            </template>
            <template #cell(action)="row">
                <b-button-group size="sm">
                    <b-button variant="dark"
                              @click="row.toggleDetails"
                              title="View Details">
                        <i class="fa"
                           :class="{'fa-angle-up':!!row.item._showDetails,'fa-angle-down':!(!!row.item._showDetails)}"></i>
                    </b-button>
                    <b-button variant="warning"
                              @click="()=>{
                                                      academic_info=JSON.parse(JSON.stringify(row.item));
                                                      show_academic_form=true
                                                  }"
                              title="Edit">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger"
                              @click="deleteAcademicInfo(row.item.id)"
                              title="Delete">
                        <i class="fa fa-trash"></i>
                    </b-button>
                </b-button-group>
            </template>
            <template #row-details="row">
                <b-card title="Description">
                    @{{ row.item.description}}
                </b-card>
                <b-card title="Files" class="mt-1">
                    //Files Feature Not Enabled
                </b-card>
                <b-card class="mt-1">
                    <ul>
                        <li>
                            Created At @{{ row.item.created_at }}
                        </li>
                        <li>
                            Updated At @{{ row.item.updated_at }}
                        </li>
                    </ul>
                </b-card>
            </template>
        </b-table>
    </b-card>
</b-collapse>
