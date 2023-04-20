import AsyncStorage from "@react-native-async-storage/async-storage";
export const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    return token;
  } catch (err) {
    console.log(err);
  }
};
export const getRefreshToken = async () => {
  try {
    const token = await AsyncStorage.getItem("refreshToken");
    return token;
  } catch (err) {
    console.log(err);
  }
};
