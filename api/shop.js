import { client } from "../config";
import { renewSession } from "./auth";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "../utils/getTokens";

export const getAllShops = async () => {
  return new Promise(async (resolve, reject) => {
    const rawToken = await getAccessToken();
    const accessToken = rawToken.replace(/['"]+/g, "");

    let data = "";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${client}/api/shop/allShops`,
      headers: {
        Authorization: ` Bearer ${accessToken}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then(async (response) => {
        if (response.data.success === false) {
          const RefreshToken = await AsyncStorage.getItem("refreshToken");
          const { data } = await renewSession(RefreshToken);
          await AsyncStorage.setItem("accessToken", data.access_token);
          getAllShops();
        }
        return resolve(response.data);
      })
      .catch((error) => {
        console.log("AXIOS_ERROR_here", error);
        // return reject(new Error(error.message));
      });
  });
};


export const getShopById = async (id) => {
  return new Promise(async (resolve, reject) => {
    const rawToken = await getAccessToken();
    const accessToken = rawToken.replace(/['"]+/g, "");

    let data = "";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${client}/api/shop/getShopById/?id=${id}`,
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
          getAllShops();
        }
        return resolve(response.data);
      })
      .catch((error) => {
        console.log("AXIOS_ERROR_here", error);
        // return reject(new Error(error.message));
      });
  });
};
