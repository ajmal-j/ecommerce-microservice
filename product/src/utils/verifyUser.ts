import axios from "axios";
import { TODO } from "./types";

export async function verifyUser(req: TODO) {
  if(!req.headers.authorization) throw new Error("Header missing");
  
  return axios
    .get("http://auth:3000/api/auth/current-user", {
      headers: {
        Authorization: req.headers.authorization,
      },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      console.log('Response failed in the auth');
      return err.data;
    });
}
