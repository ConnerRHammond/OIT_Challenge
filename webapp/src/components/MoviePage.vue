<template>
	<div class="hello">
		Hello there
		<MovieSearch @makeQuery="makeQuery($event)"/>
	</div>
</template>

<script>
import MovieSearch from '@/components/MovieSearch.vue';
import MovieService from '@/services/MovieService.js';
export default {
	name: 'MoviePage',
	components: {
		MovieSearch
	},
	props: {
	msg: String
	},  
	data: function () {
		return {
			
		};
	},
	methods: {
		async makeQuery(queryString) {
			console.log()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
