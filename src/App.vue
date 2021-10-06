<template>
  <div>
    <div class="uk-container container uk-container-xlarge">
      <Navbar />
      <div>
        <router-view></router-view>
      </div>
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
@import "./style.scss";
@import "../node_modules/uikit/src/scss/uikit.scss";
@import "./styles/app.css";
</style>
