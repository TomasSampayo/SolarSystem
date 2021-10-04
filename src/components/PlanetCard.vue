<template>
    <div>
        <h3 class="uk-text-center uk-card-title">{{planetName}}</h3>
        <div class="uk-card-body">
            <img v-bind:src="planetImg" alt="planetName">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlanetCard",
        props: 
            ['planetName', 'planetImg'],  
    }
</script>



