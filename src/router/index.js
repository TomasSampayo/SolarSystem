import { createRouter, createWebHistory } from "vue-router";
import Planet from "../views/Planet.vue";
import DwarfPlanet from "../views/DwarfPlanet.vue";

const routes = [
  {
    path: "/planet/:id",
    name: "Planet",
    component: Planet,
  },
  {
    path: "/dwarplanet/:id",
    name: "DwarfPlanet",
    component: DwarfPlanet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
