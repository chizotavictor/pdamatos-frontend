import { createWebHistory, createRouter } from "vue-router";
import ParentLanding from "./components/Layouts/ParentLanding.vue";
import LandingComponent from "./components/Pages/Landing.vue";
import AboutComponent from "./components/Pages/About.vue";
import LoginComponent from "./components/Pages/Auth/Login.vue";
import RegisterComponent from "./components/Pages/Auth/Register.vue";
import ResetPasswordComponent from "./components/Pages/Auth/PasswordReset.vue";
import BookGameTicketComponent from "./components/Pages/Dashboard/Client/BookGameTicketComponent.vue";
import ResultsComponent from "./components/Pages/Dashboard/Client/Results.vue";

// Vue.use(VueRouter);

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
