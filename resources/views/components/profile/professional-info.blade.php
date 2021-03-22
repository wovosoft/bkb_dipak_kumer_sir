<b-collapse id="professional-info" accordion="my-accordion" role="tabpanel">
    <b-collapse id="professioal_info_form" v-model="show_professional_info_form">
        <form @submit.prevent="handleProfessionalInfo">
            <b-card title="Add Professional Information">
                <b-form-group label="Job Title">
                    <b-input
                        size="sm"
                        placeholder="Job Title *"
                        required
                        v-model="professional_info.title"
                    ></b-input>
                </b-form-group>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Position">
                            <b-input
                                size="sm"
                                placeholder="Job Position"
                                v-model="professional_info.position"></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Institution">
                            <b-input
                                size="sm"
                                placeholder="Job Institution"
                                v-model="professional_info.institution"></b-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Starting date *">
                            <b-input
                                required
                                size="sm"
                                placeholder="Starting date"
                                type="date"
                                v-model="professional_info.starting_date"></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Institution">
                            <b-input
                                size="sm"
                                placeholder="Ending Date"
                                type="date"
                                v-model="professional_info.ending_date"></b-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-group label="Documents">
                    <b-file size="sm" v-model="professional_info.files_upload"></b-file>
                    <pre v-html="professional_info.files"></pre>
                </b-form-group>
                <b-form-group label="Description">
                    <b-textarea
                        size="sm"
                        v-model="professional_info.description"
                        placeholder="Job Description"
                    ></b-textarea>
                </b-form-group>
                <b-button-group size="sm" class="w-100">
                    <b-button @click="cancelProfessionalInfoForm"
                              variant="danger"
                              type="button">CANCEL
                    </b-button>
                    <b-button variant="dark" type="submit">SUBMIT</b-button>
                </b-button-group>
            </b-card>
        </form>
    </b-collapse>
    <b-card title="Professional Info">
        <div style="box-sizing: border-box;">
            <b-button variant="dark"
                      size="sm"
                      @click="initProfessionalInfoForm"
                      style="margin-top: -40px;"
                      class="float-right">
                Add
            </b-button>
        </div>
        <b-table
            ref="professional_info_table"
            head-variant="dark"
            small
            bordered
            hover
            striped
            :fields="[{key:'sl',label:'SL'},'title','position','institution','starting_date','ending_date',{key:'action',thClass:'text-right',tdClass:'text-right'}]"
            :items="professionalInfoList">
            <template #cell(sl)="row">
                @{{row.index+1}}
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
                                                      professional_info=JSON.parse(JSON.stringify(row.item));
                                                      show_professional_info_form=true
                                                  }"
                              title="Edit">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger"
                              @click="deleteProfessionalInfo(row.item.id)"
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
