<template>
  <div>

    <div class="uk-card uk-card-large uk-card-body uk-card-transparent uk-light">
      <div v-if="info">
        <div class="uk-grid uk-grid-large uk-flex-middle" uk-grid>
          
          <div class="uk-width-2-5@m uk-flex-last@m uk-text-center">
            <img :src="info.image" :alt="info.name">
          </div>

          <div class="uk-width-3-5@m">
              <h1>{{info.name}}</h1>
              <p>{{info.about}}</p>
              
              <section class="uk-grid uk-child-width-1-2@m" uk-grid v-if="info.name !== 'Tierra'">
                <aside>
                  <h4 class="uk-margin-small-bottom">Orbita</h4>
                  <p class="uk-margin-remove-top">{{info.orbit}}</p>
                </aside>
                <aside>
                  <h4 class="uk-margin-small-bottom">Dia</h4>
                  <p class="uk-margin-remove-top">{{info.day}}</p>
                </aside>
              </section>

              <section v-if="info.name !== 'Tierra'">
                  <h4 class="uk-margin-small-bottom">Descubrimiento</h4>
                  <p class="uk-margin-remove-top">{{info.discovery}}</p>
              </section>

              <section>
                  <h4 class="uk-margin-small-bottom">Satelites</h4>
                  <p class="uk-margin-remove-top">{{info.satellites}}</p>
              </section>
            
          </div>
        </div>
      </div>
      <div v-else>Loading...</div>
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

  body {
    background-image: 'url(' + backgroundImg + ')';
  }
</style>