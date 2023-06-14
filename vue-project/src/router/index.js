import { createRouter, createWebHistory } from "vue-router";


import Homepage from '../pages/Homepage.vue'
import OurTeam from '../pages/OurTeam.vue'
import Info from '../pages/Info.vue'
import Impiantologia from '../pages/Impiantologia.vue'
import Contact from '../pages/Contact.vue'
import TrattamentiGengivali from '../pages/TrattamentiGengivali.vue'
import Fourthproject from '../pages/Fourthproject.vue'
import Fifthproject from '../pages/Fifthproject.vue'
import Sixthproject from '../pages/Sixthproject.vue'


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/ourteam",
      name: "OurTeam",
      component: OurTeam,
    },
     {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/impiantologia",
      name: "Impiantologia",
      component: Impiantologia,
    },

    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/trattamentigengivali",
      name: "TrattamentiGengivali",
      component: TrattamentiGengivali,
    },
    {
      path: "/fourthproject",
      name: "Fourthproject",
      component: Fourthproject,
    },
    {
      path: "/fifthproject",
      name: "Fifthproject",
      component: Fifthproject,
    },
    {
      path: "/sixthproject",
      name: "Sixthproject",
      component: Sixthproject,
    },
  ],
});

export { router };