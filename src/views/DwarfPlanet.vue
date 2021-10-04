<template>
    <div class="uk-container uk-margin-top uk-align-center">
      {{info}}
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DwarfPlanet",
  data() {
    return {
      info: null,
      choosedPlanetId: this.$route.params.id
    };
  },
  mounted(){
    let planet = this.choosedPlanetId
    axios.get("../database.json").then((res) => (this.info = res.data.dwarfPlanets[planet]))
    
  }
};
</script>