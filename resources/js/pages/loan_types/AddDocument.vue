<template>
    <b-form @submit.prevent="handleSubmit">
        <b-form-group label="Title">
            <b-input
                v-model="form.title"
                placeholder="Document Title"
                required/>
        </b-form-group>
        <b-form-group label="Is Mandatory">
            <b-form-checkbox v-model="form.is_mandatory">
                Is Mandatory?
            </b-form-checkbox>
        </b-form-group>
        <b-button type="submit" block variant="dark">
            SUBMIT
        </b-button>
    </b-form>
</template>

<script>
export default {
    name: "AddDocument",
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    mounted() {
        this.form = Object.assign({}, this.form, this.item);
    },
    data() {
        return {
            form: {
                loan_type_id: null,
                loan_sub_type_id: null,
                is_mandatory: false,
                title: null
            }
        }
    },
    methods: {
        handleSubmit() {
            axios
                .post(baseUrl() + "/backend/document_types/store", JSON.parse(JSON.stringify(this.form)))
                .then((res) => {
                    console.log(res.data);
                    this.$root.msgBox(res.data);
                    this.$emit('success', res.data);
                })
                .catch((err) => {
                    this.$root.msgBox(err.response.data);
                    this.$emit('failed', err.response.data);
                    console.log(err.response.data);
                });
        },
    }
}
</script>

<style scoped>

</style>
