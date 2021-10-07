<template>
    <div class="uk-card uk-card-default uk-card-body uk-card-small uk-text-center">
        <h3 class="uk-card-title">{{planetName}}</h3>
        <img v-bind:src="planetImg" :alt="planetName">
    </div>
</template>

<script>
    export default {
        name: "PlanetCard",
        props: 
        ['planetName', 'planetImg'],  
    }
</script>



