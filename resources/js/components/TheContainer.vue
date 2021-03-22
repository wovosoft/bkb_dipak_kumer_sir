<template>
    <div>
        <the-navbar brand="BKB LIMS"></the-navbar>
        <b-container fluid class="mt-4 shadow-sm">
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import TheTable from "./TheTable";

export default {
    name: "TheContainer",
    components: {
        TheTable,
        TheNavbar
    }
}
</script>

<style scoped>

</style>
