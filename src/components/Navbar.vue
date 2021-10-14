<template>
  <nav uk-navbar class="uk-navbar-container">
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Planets' }">Planetas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DwarfPlanets' }">Planetas Enanos</router-link>
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