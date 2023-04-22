import client from "../config";
import axios from "axios";
import { baseURL } from "../config";

export const createUser = async (name, email, password) => {
  const { data } = await client.post(
    "/api/auth/user",
    {
      fullname: name,
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  console.log(data);
  return data;
};
export const verifyOTP = async (email, otp) => {
  const { data } = await client.post(
    "/api/auth/user/otp",
    {
      email,
      otp,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  console.log(data);
  return data;
};
export const userSignIn = async (email, password) => {
  const { data } = await client.post(
    "/api/auth/user/signIn",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  console.log("user signed in", data);
  return data;
};

export const getSession = (token) => {
  return new Promise((resolve, reject) => {
    let data = "";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseURL}/api/auth/user/jwt`,
      headers: {
        Authorization: ` Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error.message));
      });
  });
};
export const renewSession = (token) => {
  return new Promise((resolve, reject) => {
    let data = "";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseURL}/api/auth/user/renew`,
      headers: {
        Authorization: ` Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error.message));
      });
  });
};
