import axios from "axios";
const apiInstance = axios.create({
  baseURL: "https://hotels-com-provider.p.rapidapi.com/v2",
  headers: {
    "X-RapidAPI-Key": "9cf609bd10mshbbbebce1e2179c0p18be97jsn372f9a150d24",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
});

export default apiInstance;
