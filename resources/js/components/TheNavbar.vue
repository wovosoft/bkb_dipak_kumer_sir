<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" tag="header" class="shadow">
        <b-container>
            <b-navbar-brand :to="{name: 'Dashboard'}" exact exact-active-class="active">
                {{ brand }}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="User Management" right>
                        <b-dropdown-item :to="{name:'Users'}" exact exact-active-class="active">
                            Users
                        </b-dropdown-item>
                        <b-dropdown-item :to="{name:'Roles'}" exact exact-active-class="active">
                            Roles
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Setup" right>
                        <b-dropdown-item :to="{name:'Branches'}" exact exact-active-class="active">
                            Branches
                        </b-dropdown-item>
                        <b-dropdown-item :to="{name:'CrmRmOffices'}" exact exact-active-class="active">
                            CRM-RM Offices
                        </b-dropdown-item>
                        <b-dropdown-item :to="{name:'DivisionalOffices'}" exact exact-active-class="active">
                            Divisional Offices
                        </b-dropdown-item>
                        <b-dropdown-item :to="{name:'LoanTypes'}" exact exact-active-class="active">
                            Loan Types & Documents
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :to="{name:'LoanDetails'}">
                        Loan Details
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>{{ user.name }}</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logout">
                            Sign Out
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script>
export default {
    props: {
        brand: {
            type: String,
            default: () => "BKB LIMS"
        }
    },
    computed: {
        user() {
            return s('user');
        }
    },
    methods: {
        logout() {
            document.getElementById('logout_form').submit();
        }
    }
}
</script>
