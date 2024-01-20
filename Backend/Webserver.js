const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000


app.get('/movies', (req, res) => {
    console.log(req.query.search)

    const url = `https://api.themoviedb.org/3/search/movie?query=${req.query.search}&include_adult=false&language=en-US&page=1`;
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBmYWI3MWU4YjJmZWM1YjMzYWEyZjdkY2M1Y2E4NCIsInN1YiI6IjY1YWMwZTYwMTU4Yzg1MDBhYzFiNGE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEvZZe-OwCM4vkWtQUpOU5EJ1BjphBF451nYNf7-bio'
    }
  };
    fetch(url, options)  
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
