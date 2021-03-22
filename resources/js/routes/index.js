import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);


//components / pages
/**
 * Lazy Loaded components not updating properly in HMR mode development, so loading it directly in development.
 * but in production everything should be loaded lazily.
 */
const Dashboard = () => import("../pages/dashboard/Index.Vue");
// import Dashboard from "../pages/dashboard";

const Users = () => import("../pages/users/Index");
// import Users from "../pages/users";

const Roles = () => import("../pages/roles/Index");
// import Roles from "../pages/roles";


const Branches = () => import("../pages/branches/Index");

const DivisionalOffices = () => import("../pages/divisional_offices/Index");
const CrmRmOffices = () => import("../pages/crm_rm_offices/Index");
const LoanTypes = () => import("../pages/loan_types/Index");
const LoanDetails = () => import("../pages/loan_details/Index");

export default new VueRouter({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/users',
            name: 'Users',
            component: Users,
            // meta: {
            //     disable_breadcrumb: true,
            //     title: _t('dashboard', 'Dashboard')
            // }
        },
        {
            path: '/roles',
            name: 'Roles',
            component: Roles,
            // meta: {
            //     disable_breadcrumb: true,
            //     title: _t('dashboard', 'Dashboard')
            // }
        },
        {
            path: '/branches',
            name: 'Branches',
            component: Branches,
        },
        {
            path: '/divisional_offices',
            name: 'DivisionalOffices',
            component: DivisionalOffices,
        },
        {
            path: '/crm_rm_offices',
            name: 'CrmRmOffices',
            component: CrmRmOffices,
        },
        {
            path: '/loan_types',
            name: 'LoanTypes',
            component: LoanTypes,
        },
        {
            path: '/loan_details',
            name: 'LoanDetails',
            component: LoanDetails,
        },
    ]
})
