<template>
    <h2 class="uk-text-center uk-margin-bottom">Dwarf Planets</h2>
    <div v-if="info" class="uk-flex">
      <div
        v-for="dPlanet in info.dwarfPlanets"
        :key="dPlanet.id"
        class="uk-card uk-card-default uk-card-small uk-margin-left"
      >
        <router-link :to="{ name: 'DwarfPlanet', params: { id: dPlanet.id } }">  
          <PlanetCard
            v-bind:planetName="dPlanet.name"
            v-bind:planetImg="dPlanet.image"
          />
        </router-link>  
      </div>
    </div>
</template>


<script>
import axios from "axios";
import PlanetCard from "../components/PlanetCard.vue";
export default{
    name: "Planets",
    components: {
    PlanetCard: PlanetCard,
    },
    data() {
    return {
      info: null,
    };
    },
    mounted(){
        axios.get("./database.json").then((res) => (this.info = res.data));
    }

}
</script>