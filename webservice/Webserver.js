const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000
const API_KEY = process.env.API_KEY

/*
    TODO: 
    - Add error Handling. 
    - Separate functinoality to separate files. 
    - Move variables to .env file
*/
app.get('/movies', (req, res) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${req.query.search}&include_adult=false&language=en-US&page=1`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };
    const express_res = res;
    fetch(url, options)  
        .then(res => res.json())
        .then(json => express_res.status(200).send(process_data(json)))
        .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function process_data(json) {
    let return_data = [];
    for (let i = 0; i < 10 && i < json.results.length; i++) {
        return_data.push({
            movie_id: json.results[i].id,
            title: json.results[i].title,
            poster_image_url: `http://image.tmdb.org/t/p/original${json.results[i].poster_path}`,
            popularity_summary: `${json.results[i].popularity} out of ${json.results[i].vote_count}`
        })
    }
    return JSON.stringify(return_data);
}

