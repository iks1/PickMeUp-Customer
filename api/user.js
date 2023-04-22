import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getAccessToken } from "../utils/getTokens";
import { baseURL } from "../config";

export const getFavouritesItems = async (userId) => {
  return new Promise(async (resolve, reject) => {
    const rawToken = await getAccessToken();
    const accessToken = rawToken.replace(/['"]+/g, "");

    let data = "";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${baseURL}/api/user/getFavouriteItems?userId=${userId}`,
      headers: {
        Authorization: ` Bearer ${accessToken}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then(async (response) => {
        if (
          response.data.err === "JWT_EXPIRED" ||
          response.data.err === "JWT_TOKEN_INVALID"
        ) {
          const RefreshToken = await AsyncStorage.getItem("refreshToken");
          const { data } = await renewSession(RefreshToken);
          await AsyncStorage.setItem("accessToken", data.access_token);
          getFavouritesItems();
        }
        return resolve(response.data);
      })
      .catch((error) => {
        console.log("AXIOS_ERROR_here", error);
        // return reject(new Error(error.message));
      });
  });
};
export const getUser = async () => {
  return new Promise(async (resolve, reject) => {
    const rawToken = await getAccessToken();
    const accessToken = rawToken.replace(/['"]+/g, "");

    let data = "";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${baseURL}/api/user/getUser`,
      headers: {
        Authorization: ` Bearer ${accessToken}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then(async (response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        console.log("AXIOS_ERROR_here in fetching user details", error);
        // return reject(new Error(error.message));
      });
  });
};
