<template>
	<div>
		<header class="uk-text-center uk-margin-bottom uk-section">
			<h1 class="uk-margin-remove-bottom">Planetas</h1>
			<h2 class="uk-h4 uk-margin-remove-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
		</header>

		<section class="uk-section uk-section-small">
			<div v-if="info" class="uk-grid uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m" uk-grid>
				<router-link
					:to="{ name: 'Planet', params: { id: planet.id } }"
					v-for="planet in info.planets"
					:key="planet.id"
				>
					<PlanetCard
					v-bind:planetName="planet.name"
					v-bind:planetImg="planet.image"
					/>
				</router-link>
			</div>

			<div v-else>Loading...</div>
		</section>
	</div>
</template>


<script>
	import axios from "axios";
	import PlanetCard from "../components/PlanetCard.vue";
	export default{
		name: "Planets",
		components: {
			PlanetCard: PlanetCard,
		},
		data() {
			return {
				info: null,
			};
		},
		mounted(){
			axios.get("./database.json").then((res) => (this.info = res.data));
		}

	}
</script>