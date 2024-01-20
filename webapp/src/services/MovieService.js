import axios from "axios"

export default {
  async makeQuery(queryString) {
    let res = await axios.get("http://localhost:3000/movies?search=" + queryString);
    return res.data;
  }
}