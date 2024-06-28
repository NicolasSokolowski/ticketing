import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // Server side !
    return axios.create({
      baseURL: "http://www.ticketing-app-test.xyz",
      headers: req.headers
    })
  } else {
    // Browser side !

    return axios.create({
      baseUrl: "/"
    })
  }
}