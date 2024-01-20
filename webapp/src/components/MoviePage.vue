<template>
	<div class="hello">
		<MovieSearch @makeQuery="makeQuery($event)"/>
		<div style="display: flex; flex-direction: column; ">
			<div v-for="movie in dumbyData" :key="movie.movie_id" style="display:flex flex-direction: column; padding-top: 30px; ">
				<div>{{movie.title}}</div>
				<img :src="movie.poster_image_url" width="100" height="200">
				<div>
					{{movie.popularity_summary}}
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import MovieSearch from '@/components/MovieSearch.vue';
// import MovieService from '@/services/MovieService.js';
export default {
	name: 'MoviePage',
	components: {
		MovieSearch,
	},
	props: {
	msg: String
	},  
	data: function () {
		return {
			dumbyData: [{"movie_id":109445,"title":"Frozen","poster_image_url":"http://image.tmdb.org/t/p/original/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg","popularity_summary":"88.291 out of 15807"},{"movie_id":44363,"title":"Frozen","poster_image_url":"http://image.tmdb.org/t/p/original/kEiMX42a35S4blAw4KrQe3U5zNc.jpg","popularity_summary":"21.47 out of 1702"},{"movie_id":26041,"title":"Frozen","poster_image_url":"http://image.tmdb.org/t/p/original/a6RlPQUerliQLkAieku5B8Loamk.jpg","popularity_summary":"3.03 out of 17"},{"movie_id":170986,"title":"Frozen","poster_image_url":"http://image.tmdb.org/t/p/original/2GL9yZtrgbYKCeKBc3TF9gGfZpX.jpg","popularity_summary":"3.185 out of 4"},{"movie_id":950554,"title":"Frozen","poster_image_url":"http://image.tmdb.org/t/p/originalnull","popularity_summary":"0.6 out of 0"},{"movie_id":573171,"title":"A Frozen Rooster","poster_image_url":"http://image.tmdb.org/t/p/original/Qotf3QgDqUZEW6pfQl2BPxZCRn.jpg","popularity_summary":"90.208 out of 327"},{"movie_id":330457,"title":"Frozen II","poster_image_url":"http://image.tmdb.org/t/p/original/mINJaa34MtknCYl5AjtNJzWj8cD.jpg","popularity_summary":"87.569 out of 9258"},{"movie_id":566451,"title":"Re:ZERO -Starting Life in Another World- The Frozen Bond","poster_image_url":"http://image.tmdb.org/t/p/original/ca2ZsUa4Qeik2IwlXFzV51hdxh0.jpg","popularity_summary":"18.87 out of 178"},{"movie_id":17903,"title":"A Frozen Flower","poster_image_url":"http://image.tmdb.org/t/p/original/jvGmbNUh0eq9ShQmMSof0DXXHWY.jpg","popularity_summary":"15.92 out of 127"},{"movie_id":326359,"title":"Frozen Fever","poster_image_url":"http://image.tmdb.org/t/p/original/mPrDJ7puYzPLG5kPM96iNszF2sM.jpg","popularity_summary":"38.633 out of 1761"}]
		};
	},
	methods: {
		// async makeQuery(queryString) {
		// 	MovieService.makeQuery(`http://localhost:3000/movie?search=${queryString}`)
		// }
		makeQuery: function(queryString) {
			console.log(queryString)
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
