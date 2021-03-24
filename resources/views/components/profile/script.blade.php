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
                    show_family_members_form: false,
                    profile_photo_url: '{{auth()->user()->profile_photo_url}}',
                    profile_file: null,
                    show_academic_form: false,
                    show_professional_info_form: false,
                    contact: {},
                    academic_info: {},
                    professional_info: {},
                    family_members_info: {},
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
                showMessages(promise, successCallback, failedCallback) {
                    let the = this;
                    promise.then(function (res) {
                        the.$bvToast.toast(res.data.message || 'Successfully Done', {
                            title: 'SUCCESS',
                            autoHideDelay: 5000,
                            appendToast: true,
                            variant: 'primary'
                        });
                        if (typeof successCallback === "function") {
                            successCallback(res);
                        }
                    }).catch(function (err) {
                        the.$bvToast.toast(err.response.data.message || 'Operation Failed', {
                            title: 'FAILED',
                            autoHideDelay: 5000,
                            appendToast: true,
                            variant: 'danger'
                        });
                        if (typeof failedCallback === "function") {
                            failedCallback(err.response);
                        }
                    });
                },
                genericHandler(url, data, successCallback, failedCallback) {
                    this.showMessages(axios.post(url, JSON.parse(JSON.stringify(data))), successCallback, failedCallback);
                },
                getGenericList(ctx) {
                    return axios.post(ctx.apiUrl).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        console.log(err.response);
                        return [];
                    });
                },
                genericTrash(url, successCallback, failedCallback) {
                    if (confirm('Are You Sure?')) {
                        this.showMessages(axios.post(url), successCallback, failedCallback);
                    }
                },
                cancelAcademicInfoForm() {
                    this.$set(this, 'academic_info', JSON.parse(JSON.stringify(academic_info)));
                    this.show_academic_form = false;
                },
                initAcademicInfoForm() {
                    this.$set(this, 'academic_info', JSON.parse(JSON.stringify(academic_info)));
                    this.show_academic_form = true;
                },
                initProfessionalInfoForm() {
                    this.$set(this, 'professional_info', JSON.parse(JSON.stringify(professional_info)));
                    this.show_professional_info_form = true;
                },
                cancelProfessionalInfoForm() {
                    this.$set(this, 'professional_info', JSON.parse(JSON.stringify(professional_info)));
                    this.show_professional_info_form = false
                },
                photoUpload(f, p, successCallback, failedCallback) {
                    if (f) {
                        let fd = new FormData();
                        fd.append('the_file', f);
                        fd.append('path', p || null);
                        return axios
                            .post('{{route('backend.file_upload')}}', fd)
                            .then(function (res) {
                                console.log(res.data);
                                if (typeof successCallback === 'function') {
                                    successCallback(res);
                                }
                                return res;
                            })
                            .catch(function (err) {
                                console.log(err.response);
                                if (typeof failedCallback === 'function') {
                                    failedCallback(err.response);
                                }
                                return err.response;
                            });
                    }
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
