import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa194d3d6e62465aad78226486555750",
  },
});
