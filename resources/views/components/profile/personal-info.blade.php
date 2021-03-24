<b-collapse id="personal-info" accordion="my-accordion" role="tabpanel">
    <b-form @submit.prevent="genericHandler('{{route('Frontend.users.personal_info.store')}}',personal_info)">
        <b-card title="Personal Information">
            <b-form-row>
                <b-col md="4" sm="12">
                    <b-form-group label="First Name">
                        <b-input placeholder="First Name"
                                 v-model="personal_info.first_name"></b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Mid Name">
                        <b-input placeholder="Mid Name" v-model="personal_info.mid_name"></b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Last Name">
                        <b-input placeholder="Last Name"
                                 v-model="personal_info.last_name"></b-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Date of Birth">
                        <b-input type="date" v-model="personal_info.date_of_birth"></b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="NID">
                        <b-input
                            placeholder="National Identification No."
                            v-model="personal_info.nid"></b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Nationality">
                        <b-input
                            placeholder="Nationality"
                            v-model="personal_info.nationality"></b-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
        </b-card>
        <b-card title="Address" class="mt-2">
            <b-form-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Division">
                        <b-select
                            v-model="personal_info.division_id"
                            :options="divisions"
                            @change="personal_info.district_id=null"
                            value-field="id"
                            text-field="name">
                        </b-select>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="District">
                        <b-select
                            v-model="personal_info.district_id"
                            :options="districts"
                            @change="personal_info.upazila_id=null"
                            value-field="id"
                            text-field="name">
                        </b-select>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Upazila">
                        <b-select
                            v-model="personal_info.upazila_id"
                            :options="upazilas"
                            value-field="id"
                            text-field="name">
                        </b-select>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Thana">
                        <b-input
                            v-model="personal_info.thana"
                            placeholder="Thana">
                        </b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Post Office">
                        <b-input
                            v-model="personal_info.post_office"
                            placeholder="Post Office">
                        </b-input>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Post Code">
                        <b-input
                            v-model="personal_info.post_code"
                            placeholder="Post Code">
                        </b-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
        </b-card>
        <b-form-group class="mt-3">
            <b-button type="submit" block variant="dark">
                SUBMIT
            </b-button>
        </b-form-group>
        {{--                            <pre v-html="personal_info"></pre>--}}
    </b-form>
</b-collapse>
