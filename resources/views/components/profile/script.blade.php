<script>
    (function () {
        const contact = {content: null, type: 'phone'};
        const academic_info = {
            id: null,
            exam_name: null,
            board: null,
            institution: null,
            passing_year: null,
            result: null,
            result_scale: 5,
            description: null,
            documents: null,
        };
        const professional_info = {
            title: null,
            position: null,
            institution: null,
            starting_date: null,
            ending_date: null,
            description: null,
            files: null,
        };
        new Vue({
            el: "#app",
            props: {
                divisions: {
                    type: Object,
                    default() {
                        return @json($geo);
                    }
                },
            },
            data() {
                return {
                    profile_photo_url: '{{auth()->user()->profile_photo_url}}',
                    profile_file: null,
                    show_academic_form: false,
                    show_professional_info_form: false,
                    contact: {},
                    academic_info: {},
                    professional_info: {},
                    personal_info: {!! json_encode($personal_info??[
                        "division_id"=> null,
                        "district_id"=> null,
                        "upazila_id"=> null,
                        "thana"=> null,
                        "post_office"=> null,
                        "post_code"=> null,
                        "date_of_birth"=> null,
                        "nid"=> null,
                        "nationality"=> 'Bangladeshi',
                        "first_name"=> null,
                        "mid_name"=> null,
                        "last_name"=> null
                    ]) !!},
                    // contacts: []
                }
            },
            computed: {
                division() {
                    if (this.personal_info && this.personal_info.division_id) {
                        return this.divisions.find((item) => item.id === this.personal_info.division_id);
                    }
                    return null;
                },
                districts() {
                    if (this.division) {
                        return this.division.districts;
                    }
                    return [];
                },
                district() {
                    return this.personal_info && this.personal_info.district_id
                        ? this.districts.find((item) => item.id === this.personal_info.district_id) : null;
                },
                upazilas() {
                    if (this.district) {
                        return this.district.upazilas;
                    }
                    return [];
                }
            },
            mounted() {
                this.$set(this, 'contact', JSON.parse(JSON.stringify(contact)));
                this.$set(this, 'academic_info', JSON.parse(JSON.stringify(academic_info)));
                this.$set(this, 'professional_info', JSON.parse(JSON.stringify(professional_info)));
            },
            methods: {
                logout() {
                    document.getElementById('logout_form').submit();
                },
                submitContact() {
                    let the = this;
                    axios
                        .post('{{route('Frontend.contacts.store')}}', JSON.parse(JSON.stringify(the.contact)))
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                            this.$set(this, 'contact', JSON.parse(JSON.stringify(contact)));
                            this.$refs.contact_list.refresh();
                        })
                        .catch(err => {
                            // console.log(err.response);
                            the.$bvToast.toast(err.res.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                handlePersonalInfo() {
                    let the = this;
                    axios
                        .post('{{route('Frontend.users.personal_info.store')}}', JSON.parse(JSON.stringify(the.personal_info)))
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                        })
                        .catch(err => {
                            // console.log(err.response);
                            the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                getContacts() {
                    let the = this;
                    return axios
                        .post('{{route('Frontend.contacts.list')}}')
                        .then(res => {
                            // console.log(res.data)
                            // this.$set(this, 'contacts', res.data);
                            return res.data;
                        })
                        .catch(err => {
                            console.log(err.response);
                            // this.$set(this, 'contacts', []);
                            return [];
                        });
                },
                editContact(item) {
                    this.$set(this, 'contact', JSON.parse(JSON.stringify(item)));
                    this.$refs.contact_input.focus();
                },
                trashContact(id) {
                    if (confirm('Are You Sure?')) {
                        let the = this;
                        axios.post('{{route('Frontend.contacts.trash','')}}/' + id)
                            .then(res => {
                                console.log(res)
                                this.$refs.contact_list.refresh();
                            })
                            .catch(err => {
                                console.log(err.response);
                            });
                    }
                },
                cancelAcademicInfoForm() {
                    this.$set(this, 'academic_info', JSON.parse(JSON.stringify(academic_info)));
                    this.show_academic_form = false;
                },
                initAcademicInfoForm() {
                    this.$set(this, 'academic_info', JSON.parse(JSON.stringify(academic_info)));
                    this.show_academic_form = true;
                    this.$bvToast.toast('Ready to add new academic information', {
                        title: 'READY',
                        autoHideDelay: 5000,
                        appendToast: true,
                        variant: 'primary'
                    });
                },
                academicInfoList(ctx) {
                    return axios.post('{{route("Frontend.users.academic_info.index")}}')
                        .then(res => {
                            return res.data;
                        })
                        .catch(err => {
                            console.log(err.response.data);
                            return [];
                        });
                },
                handleAcademicInfo() {
                    let the = this;
                    axios
                        .post('{{route('Frontend.users.academic_info.store')}}', JSON.parse(JSON.stringify(the.academic_info)))
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                            the.cancelAcademicInfoForm();
                            the.$refs.academic_info_table.refresh();
                        })
                        .catch(err => {
                            console.log(err.response);
                            the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                deleteAcademicInfo(id) {
                    if (!confirm('Are You Sure?')) {
                        return false;
                    }
                    let the = this;
                    axios
                        .post('{{route('Frontend.users.academic_info.delete','')}}/' + id)
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                            the.$refs.academic_info_table.refresh();
                        })
                        .catch(err => {
                            console.log(err.response);
                            the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                handleProfessionalInfo() {
                    let the = this;
                    axios
                        .post('{{route('Frontend.users.professional_info.store')}}', JSON.parse(JSON.stringify(the.professional_info)))
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                            the.cancelProfessionalInfoForm();
                            the.$refs.professional_info_table.refresh();
                        })
                        .catch(err => {
                            console.log(err.response);
                            the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                professionalInfoList() {
                    return axios.post('{{route('Frontend.users.professional_info.index')}}')
                        .then(res => {
                            return res.data;
                        })
                        .catch(err => {
                            console.log(err.response.data);
                            return [];
                        });
                },
                initProfessionalInfoForm() {
                    this.$set(this, 'professional_info', JSON.parse(JSON.stringify(professional_info)));
                    this.show_professional_info_form = true;
                },
                cancelProfessionalInfoForm() {
                    this.$set(this, 'professional_info', JSON.parse(JSON.stringify(professional_info)));
                    this.show_professional_info_form = false
                },
                deleteProfessionalInfo(id) {
                    if (!confirm('Are You Sure?')) {
                        return false;
                    }
                    let the = this;
                    axios
                        .post('{{route('Frontend.users.professional_info.delete','')}}/' + id)
                        .then(res => {
                            // console.log(res.data);
                            the.$bvToast.toast(res.data.message || 'Successfully Done', {
                                title: 'SUCCESS',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'primary'
                            });
                            the.$refs.professional_info_table.refresh();
                        })
                        .catch(err => {
                            console.log(err.response);
                            the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                                title: 'FAILED',
                                autoHideDelay: 5000,
                                appendToast: true,
                                variant: 'danger'
                            });
                        });
                },
                openProfileDialog() {
                    this.$refs.profile_file.$el.click();
                    console.log(this.$refs.profile_file)
                },
                processProfilePhoto(f) {
                    if (f) {
                        let the = this;
                        let fd = new FormData();
                        fd.append('the_file', f);
                        axios
                            .post('{{route('Frontend.Profile.photoUpload')}}', fd)
                            .then(res => {
                                console.log(res.data);
                                the.profile_file = null;
                                the.profile_photo_url = res.data.url;
                            })
                            .catch(err => {
                                console.log(err.response);
                            });
                    }
                }
            }
        });
    })();
</script>
