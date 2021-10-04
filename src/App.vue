<template>
  <div class="uk-container container uk-container-xlarge">
    <nav  uk-navbar>
    <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#" class="uk-text-bold uk-text-large">Planets</a></li>
            <li class="uk-active"><a href="#" class="uk-text-bold uk-text-large">Dwarf Planets</a></li>
            <li class="uk-active"><a href="#" class="uk-text-bold uk-text-large">Sun</a></li>
        </ul>

    </div>
</nav>
    <h2 class="uk-text-center uk-margin-bottom">Planets</h2>
    <div v-if="info" class="uk-flex">
      <div
        
        v-for="planet in info.planets"
        :key="planet.id"
        class="uk-card uk-card-default uk-margin-left"
      >
        <router-link :to="{ name: 'Planet', params: { id: planet.id } }">
          <PlanetCard
            
            v-bind:planetName="planet.name"
            v-bind:planetImg="planet.image"
          />
        </router-link>
      </div>
      
    </div>

    <div v-else>loading...</div>
    <router-view></router-view>
    <h2 class="uk-text-center uk-margin-bottom">Dwarf Planets</h2>
    <div v-if="info" class="uk-flex">
      <div
        v-for="dPlanet in info.dwarfPlanets"
        :key="dPlanet.id"
        class="uk-card uk-card-default uk-card-small uk-margin-left"
      >
        <router-link :to="{ name: 'Planet', params: { id: dPlanet.id } }">  
          <PlanetCard
            v-bind:planetName="dPlanet.name"
            v-bind:planetImg="dPlanet.image"
          />
        </router-link>  
      </div>
    </div>
  </div>
</template>


<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import axios from "axios";
import PlanetCard from "./components/PlanetCard.vue";

export default {
  name: "App",
  components: {
    PlanetCard: PlanetCard,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios.get("./database.json").then((res) => (this.info = res.data));
  },
};
</script>
<style lang="scss">
@import "./style.scss";
@import "../node_modules/uikit/src/scss/uikit.scss";
@import './styles/app.css'
</style>