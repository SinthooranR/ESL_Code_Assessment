import axios from "axios";

// using this url as the base link for the other APIs
export default axios.create({
  baseURL: "https://api.eslgaming.com/play/v1/leagues/177161",
});
