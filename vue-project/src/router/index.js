import { createRouter, createWebHistory } from "vue-router";


import Homepage from '../pages/Homepage.vue'
import OurTeam from '../pages/OurTeam.vue'
import Info from '../pages/Info.vue'
import Impiantologia from '../pages/Impiantologia.vue'
import Contact from '../pages/Contact.vue'
import TrattamentiGengivali from '../pages/TrattamentiGengivali.vue'
import OdontoiatriaEstetica from '../pages/OdontoiatriaEstetica.vue'
import Ortodonzia from '../pages/Ortodonzia.vue'
import ChirurgiaGuidata from '../pages/ChirurgiaGuidata.vue'
import GelPiastrinici from '../pages/GelPiastrinici.vue'
import AllOnFour from '../pages/AllOnFour.vue'
import Ottica from '../pages/Ottica.vue'
import Zigomatica from '../pages/Zigomatica.vue'
import Prodotti from '../pages/Prodotti.vue'
import Videoclean from '../pages/Videoclean.vue'


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
      path: "/odontoiatriaestetica",
      name: "OdontoiatriaEstetica",
      component: OdontoiatriaEstetica,
    },
    {
      path: "/ortodonzia",
      name: "Ortodonzia",
      component: Ortodonzia,
    },
    {
      path: "/chirurgiaguidata",
      name: "ChirurgiaGuidata",
      component: ChirurgiaGuidata,
    },
    {
      path: "/gelpiastrinici",
      name: "GelPiastrinici",
      component: GelPiastrinici,
    },
    {
      path: "/allonfour",
      name: "AllOnFour",
      component: AllOnFour,
    },
     {
      path: "/ottica",
      name: "Ottica",
      component: Ottica,
    },
    {
      path: "/zigomatica",
      name: "Zigomatica",
      component: Zigomatica,
    },
    {
      path: "/prodotti",
      name: "Prodotti",
      component: Prodotti,
    },
    {
      path: "/videoclean",
      name: "Videoclean",
      component: Videoclean,
    },
  ],
});

export { router };

