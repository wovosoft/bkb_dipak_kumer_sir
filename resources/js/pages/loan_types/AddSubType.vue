<template>
    <b-form @submit.prevent="handleSubmit">
        <b-form-group label="Title">
            <b-input
                v-model="form.title"
                placeholder="Document Title"
                required/>
        </b-form-group>
        <b-button type="submit" block variant="dark">
            SUBMIT
        </b-button>
    </b-form>
</template>

<script>
export default {
    name: "AddSubType",
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
                title: null
            }
        }
    },
    methods: {
        handleSubmit() {
            axios
                .post(baseUrl() + "/backend/loan_sub_types/store", JSON.parse(JSON.stringify(this.form)))
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
