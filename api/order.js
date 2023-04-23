import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { getAccessToke } from "../utils/getTokens";

export const postOrder = async (
  userId,
  shopId,
  orderNumber,
  totalPrice,
  status
) => {
  const ctx = useContext(ShopContext);
  return new Promise(async (resolve, reject) => {
    const rawToken = await getAccessToken();
    const accessToken = rawToken.replace(/['"]+/g, "");

    let data = JSON.stringify({
      userId: userId,
      shopId: shopId,
      bill: ctx.itemList,
      order_number: orderNumber,
      total_price: totalPrice,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseURL}/api/order/postOrder`,
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
          postOrder();
        }
        console.log(response.data);
        return resolve(response.data);
      })
      .catch((error) => {
        console.log("AXIOS_ERROR_here", error);
        // return reject(new Error(error.message));
      });
  });
};
