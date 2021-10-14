<template>
    <div class="uk-light">
      <Navbar />
      <div class="uk-container uk-container-large">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      info: null,
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    axios.get("./database.json").then((res) => (this.info = res.data));
  },
};
</script>
<style lang="scss">
  
  @import "./assets/css/app.css";
</style>
