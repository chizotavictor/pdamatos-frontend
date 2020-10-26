import { createWebHistory, createRouter } from "vue-router";
import ParentLanding from "./components/Layouts/ParentLanding.vue";
import LandingComponent from "./components/Pages/Landing.vue";
import AboutComponent from "./components/Pages/About.vue";

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
        }]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
