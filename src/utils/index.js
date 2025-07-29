import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetcher(URL) {
  const resObj = {
    errorMessage: "",
    data: [],
  };
  try {
    const res = await axios.get(`${BASE_URL}/${URL}`);

    // if (res.statusText !== "OK") throw new Error(`HTTP Error ${res.status}`);
    resObj.errorMessage = "";
    resObj.data = res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        resObj.errorMessage = `HTTP Error ${error.response.status}`;
      } else if (error.request) {
        resObj.errorMessage = "No response received from the server";
      } else {
        resObj.errorMessage = `${error.message}`;
      }
    } else {
      resObj.errorMessage = "An unexpected error occurred.";
    }
    console.error(resObj.errorMessage);
  }

  return resObj;
}

export async function createCheckout(items) {
  console.log(items);

  try {
    const res = await axios.post(`${BASE_URL}/stripe/create-checkout-session`, {
      items: items.map((item) => ({
        name: item.title,
        price: item.price,
        quantity: item.quantity,
        image: `https://e-store-server-u54t.onrender.com/uploads/${item.image}`,
      })),
    });
    window.open(res.data.url, "_blank");
    // window.location.href = res.data.url;
  } catch (error) {
    console.log("Checkout Error:", error);
    toast.error("Checkout faild");
  }
}

/* 
Handle Axois Error:  inside catch
// if (axios.isAxiosError(error)) {
    //   // Handle Axios-specific errors (e.g., network issues, server errors)
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.error("Server responded with an error:", error.response.data);
    //     console.error("Status code:", error.response.status);
    //     resObj.errorMessage = error.response.status;
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     resObj.errorMessage = error.request;
    //     console.error("No response received from the server:", error.request);
    //   } else {
    //     // Something else happened in setting up the request that triggered an Error
    //     resObj.errorMessage = error.message;
    //     console.error("Error in setting up the request:", error.message);
    //   }
    // } else {
    //   // Handle other types of errors (e.g., syntax errors in your code)
    //   console.error("An unexpected error occurred:", error);
    //   // resObj.errorMessage = error;
    // }
    

*/
