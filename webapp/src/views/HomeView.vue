<template>
	<div class="home">
		<MoviePage msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
// @ is an alias to /src
import MoviePage from '@/components/MoviePage.vue'

export default {
	name: 'HomeView',
	components: {
		MoviePage
	}
}
</script>
