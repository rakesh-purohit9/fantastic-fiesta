import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Cookie: "guest_id=v1%3A165639453227761299",
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAJz5dwEAAAAAhogczt%2BC15j6DyCVrmzHRFVur24%3DysvOEhtwfhxo3ZY5jonEkbUVVVPaTS2yFWyHVcQNFWmdHjmf6P",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getFollowers = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/462967164/followers`,
    method: "get",
    params,
    headers,
    data,
  });
};
