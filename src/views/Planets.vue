<template>
    <div>
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