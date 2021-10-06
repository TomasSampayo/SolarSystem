<template>
  <div class="container" :style="{ backgroundImage: 'url(' + backgroundImg + ')' }">
  <br><br>
    <div class="uk-container uk-align-center">
      <div class="uk-card uk-card-large uk-card-default">
        <div v-if="info">
          <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary" uk-grid>
            <div class="uk-flex-last@s uk-card-media-right uk-cover-container uk-margin-bottom">
              <img  :src="info.image" :alt="info.name" width="400" height="400" uk-cover>
              <canvas width="600" height="400"></canvas>
            </div>
            <div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">{{info.name}}</h3>
                <p>{{info.about}}</p>
                <section class="uk-flex-inline" v-if="info.name !== 'Tierra'">
                  <aside class="uk-margin-right">
                    <h4>Orbita</h4>
                    <p>{{info.orbit}}</p>
                  </aside>
                  <aside class="uk-margin-left">
                    <h4>Dia</h4>
                    <p>{{info.day}}</p>
                  </aside>
                </section>
                <section v-if="info.name !== 'Tierra'">
                  <div>
                    <h4>Descubrimiento</h4>
                    <p>{{info.discovery}}</p>
                  </div>
                </section>
                <section>
                  <div>
                    <h4>Satelites</h4>
                    <p>{{info.satellites}}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Planet",
  data() {
    return {
      info: null,
      choosedPlanetId: this.$route.params.id - 1,
      backgroundImg: null
    };
  },
  mounted(){
    let planet = this.choosedPlanetId
    axios.get("../database.json").then((res) => (this.info = res.data.planets[planet])).then(res => this.backgroundImg = res.backgroundImage)
  }
};
</script>

<style>
  @import '../styles/planet.css';
</style>