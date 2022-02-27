import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-d34b8/us-central1/api", //API (cloud fuction ) URL
});

export default instance;
