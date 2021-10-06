<template>
    <nav uk-navbar class="uk-navbar-container uk-navbar-transparent">
        <div class="uk-navbar-center">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="#" class="uk-text-bold uk-text-large"
                ><router-link :to="{ name: 'Home' }">Home</router-link></a
              >
            </li>
            <li class="uk-active">
              <a href="#" class="uk-text-bold uk-text-large"
                ><router-link :to="{ name: 'Planets' }">Planetas</router-link></a
              >
            </li>
            <li class="uk-active">
              <a href="#" class="uk-text-bold uk-text-large"
                ><router-link :to="{ name: 'DwarfPlanets' }"
                  >Planetas Enanos</router-link
                ></a
              >
            </li>
          </ul>
        </div>
      </nav>
</template>


<script>
export default {
    name: "Navbar"
}
</script>