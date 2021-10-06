import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Planet from "../views/Planet.vue";
import Planets from "../views/Planets.vue";
import DwarfPlanet from "../views/DwarfPlanet.vue";
import DwarfPlanets from "../views/DwarfPlanets.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
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
  {
    path: "/dwarfplanets",
    name: "DwarfPlanets",
    component: DwarfPlanets
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planets
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
