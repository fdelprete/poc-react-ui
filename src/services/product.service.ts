import request from "request-promise-native";
import urlencode from "urlencode";
import config from "../config";

const apiUrl = config.apiUrl.dev;

const requestProductDetails = async (
  productId: string,
  setIsLoading: Function,
  setProductDetails: Function
) => {
  try {
    const requestUrl = `${apiUrl}/${urlencode(productId)}/510`;
    const options = {
      resolveWithFullResponse: false,
      json: true,
      Authorization: ""
    };

    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      console.log(authToken);
      options.Authorization = authToken;
    }

    const response = await request(requestUrl, options);
    setProductDetails(response.body);
  } catch (e) {
    console.log(e);
    //setError
  }
  setIsLoading(false);
};

export { requestProductDetails };
