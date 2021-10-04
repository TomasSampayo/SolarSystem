<template>
  <div class="uk-container container uk-container-xlarge">
    <nav  uk-navbar>
    <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#" class="uk-text-bold uk-text-large"><router-link :to="{ name: 'Planets' }">Planets</router-link></a></li>
            <li class="uk-active"><a href="#" class="uk-text-bold uk-text-large"><router-link :to="{ name: 'DwarfPlanets' }">Dwarf Planets</router-link></a></li>
        </ul>

    </div>
</nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import axios from "axios";

export default {
  name: "App",
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