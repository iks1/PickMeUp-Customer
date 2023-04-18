import client from "../config";

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
  console.log(data);
  return data;
};
