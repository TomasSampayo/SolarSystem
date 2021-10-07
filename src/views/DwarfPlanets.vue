<template>
    <div>
      <header class="uk-text-center uk-margin-bottom uk-section">
      <h1 class="uk-margin-remove-bottom">Planetas Enanos</h1>
      <h2 class="uk-h4 uk-margin-remove-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
    </header>

    <section class="uk-section uk-section-small">
      <div v-if="info" class="uk-grid uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m" uk-grid>
        <router-link
          :to="{ name: 'DwarfPlanet', params: { id: dPlanet.id } }"
          v-for="dPlanet in info.dwarfPlanets"
        :key="dPlanet.id"
        >
          <PlanetCard
            v-bind:planetName="dPlanet.name"
            v-bind:planetImg="dPlanet.image"
          />
        </router-link>
      </div>

      <div v-else>Loading...</div>
    </section>

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