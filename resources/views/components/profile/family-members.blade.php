<b-collapse id="family-members" accordion="my-accordion" role="tabpanel">
    <b-card class="mb-1"
            header-class="p-0"
            header-bg-variant="dark"
            header-text-variant="light"
            body-class="p-0">
        <template #header>
            <b-button block v-b-toggle.family-members-form variant="dark">
                Family Members Form
                <i class="fa float-right"
                   :class="show_family_members_form?'fa-angle-up':'fa-angle-down'"></i>
            </b-button>
        </template>
        <b-collapse id="family-members-form" v-model="show_family_members_form">
            <b-form @submit.prevent="genericHandler(
                '{{route('Frontend.users.family_members.store')}}',
                family_members_info,
                function(){
                    show_family_members_form = false;
                    family_members_info = {};
                    $refs.family_members_info_table.refresh();
                }
            )" class="p-2">
                <b-form-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="First Name">
                            <b-input
                                v-model="family_members_info.first_name"
                                size="sm"
                                placeholder="First Name"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="Mid Name">
                            <b-input
                                size="sm"
                                v-model="family_members_info.mid_name"
                                placeholder="Middle Name"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="Last Name">
                            <b-input
                                size="sm"
                                v-model="family_members_info.last_name"
                                placeholder="Last Name"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Relation">
                            <b-input
                                size="sm"
                                v-model="family_members_info.relation"
                                placeholder="Relation"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="Date of Birth">
                            <b-input
                                size="sm"
                                type="date"
                                v-model="family_members_info.date_of_birth"
                                placeholder="Date of Birth"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="NID">
                            <b-input
                                size="sm"
                                v-model="family_members_info.nid"
                                placeholder="National Identification No."
                            ></b-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Gender">
                            <b-select
                                size="sm"
                                v-model="family_members_info.gender"
                                :options="[
                                                {text:'Male',value:'male'},
                                                {text:'Female',value:'female'},
                                                {text:'Other',value:'other'},
                                                ]"></b-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="Nationality">
                            <b-input
                                size="sm"
                                v-model="family_members_info.nationality"
                                placeholder="Nationality"
                            ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12">
                        <b-form-group label="Photo">
                            <b-file @input="photoUpload(
                                $event,'profile/family_members',
                                function(res){family_members_info.photo_upload = null;
                                family_members_info.photo = res.data;})" size="sm"></b-file>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-group label="Description">
                    <b-textarea
                        size="sm"
                        v-model="family_members_info.description"
                        placeholder="Description"></b-textarea>
                </b-form-group>
                <b-form-row>
                    <b-col md="6" sm="12">
                        <b-button variant="danger"
                                  @click="()=>{
                                                        show_family_members_form=false;
                                                        family_members_info={};
                                                      }"
                                  block size="sm">
                            CANCEL
                        </b-button>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-button block variant="dark" type="submit" size="sm">
                            SUBMIT
                        </b-button>
                    </b-col>
                </b-form-row>
            </b-form>
        </b-collapse>
    </b-card>
    <b-card title="Family Members List">
        <b-table
            ref="family_members_info_table"
            head-variant="dark"
            small
            hover
            striped
            bordered
            :api-url="'{{route('Frontend.users.family_members.index')}}'"
            :fields="[{key:'sl',label:'SL'},'first_name','last_name','mid_name',
                                'date_of_birth','nid',{key:'action',thClass:'text-right',tdClass:'text-right'}]"
            :items="getGenericList">
            <template #cell(sl)="row">
                @{{row.index+1}}
            </template>
            <template #cell(action)="row">
                <b-button-group size="sm">
                    <b-button variant="dark"
                              @click="row.toggleDetails"
                              title="View">
                        <i class="fa fa-angle-down"></i>
                    </b-button>
                    <b-button variant="danger"
                              @click="()=>{
                                        show_family_members_form=true;
                                        family_members_info=JSON.parse(JSON.stringify(row.item));
                                      }"
                              title="Edit">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="warning"
                              @click="genericTrash(
                                    '{{route('Frontend.users.family_members.delete','')}}/' + row.item.id,
                                    function(){$refs.family_members_info_table.refresh();}
                              )"
                              title="Delete">
                        <i class="fa fa-trash"></i>
                    </b-button>
                </b-button-group>
            </template>
            <template #row-details="row">
                <b-card>
                    <b-form-row>
                        <b-col md="4" sm="12">
                            <b-img-lazy thumbnail :src="row.item.photo_url"></b-img-lazy>
                        </b-col>
                        <b-col md="8" sm="12">
                            Relation : @{{row.item.relation}}<br>
                            Gender : @{{row.item.gender}}<br>
                            Nationality : @{{row.item.nationality}}<br>
                            Created At : @{{row.item.created_at}}<br>
                            Updated At : @{{row.item.updated_at}}<br>
                        </b-col>
                    </b-form-row>
                </b-card>
                <b-card title="Description">
                    @{{row.item.description}}
                </b-card>
            </template>
        </b-table>
    </b-card>
</b-collapse>
