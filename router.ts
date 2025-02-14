import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: () => import("./views/Index.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("./views/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./views/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./views/Register.vue")
    },
    {
        path: "/timesheet/:id",
        name: "timesheet",
        component: () => import("./views/Timesheet.vue")
    },
    {
        path: "/timesheets",
        name: "timesheets",
        component: () => import("./views/Timesheets.vue")
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})