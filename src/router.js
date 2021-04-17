import { createWebHistory, createRouter } from "vue-router";
import ParentLanding from "./components/Layouts/ParentLanding.vue";
import LandingComponent from "./components/Pages/Landing.vue";
import AboutComponent from "./components/Pages/About.vue";
import LoginComponent from "./components/Pages/Auth/Login.vue";
import RegisterComponent from "./components/Pages/Auth/Register.vue";
import ResetPasswordComponent from "./components/Pages/Auth/PasswordReset.vue";
import BookGameTicketComponent from "./components/Pages/Dashboard/Client/BookGameTicketComponent.vue";
import ResultsComponent from "./components/Pages/Dashboard/Client/Results.vue";
import ClientDashboard from "./components/Pages/Dashboard/Client/Dashboard.vue"
import MyTickets from "./components/Pages/Dashboard/Client/MyTickets.vue"
import DashboardIndex from "./components/Pages/Dashboard/Index.vue";
import SettingsComponent from "./components/Pages/Dashboard/Client/Settings.vue";
// import ParentDashboard from "./components/Pages/Dashboard/ParentDashboard.vue";
import LotteryResult from "./components/Pages/Dashboard/Admin/LotteryResult.vue"
import LotteryTicket from "./components/Pages/Dashboard/Admin/LotteryTicket.vue"
import ManageAgent from "./components/Pages/Dashboard/Admin/ManageAgent.vue"
import ManageUser from "./components/Pages/Dashboard/Admin/ManageUser.vue"

const routes = [
    {
        path: "/",
        name: "landing",
        component: ParentLanding,
        children: [{
            path: "/",
            name: "home",
            component: LandingComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent
        },
        {
            path: "/games",
            name: "play_games",
            component: BookGameTicketComponent
        },
        {
            path: "/results",
            name: "results",
            component: ResultsComponent
        }, 
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardIndex,
            children: [
            {
                path: "",
                name: "dashboard_v1",
                component: ClientDashboard // Client Dashboard
            },
            {
                path: "tickets",
                name: "my_tickets",
                component: MyTickets // Client Dashboard
            },
            {
                path: "settings",
                name: "settings",
                component: SettingsComponent // All Account Groups
            }]
        },
        {
            path: "/lottery", 
            name: "lottery_ticket",
            component: LotteryTicket
        },
        {
            path: "/lottery/result", 
            name: "lottery_results",
            component: LotteryResult
        },
        {
            path: "/participants", 
            name: "manage_users",
            component: ManageUser
        },
        {
            path: "/participants/agents", 
            name: "manage_agents",
            component: ManageAgent
        }]
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
        path: "/register",
        name: "register",
        component: RegisterComponent
    },
    {
        path: "/password-reset",
        name: "password_reset",
        component: ResetPasswordComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
