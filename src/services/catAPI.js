import axios from "axios";

export async function getCats(query_params) {
  try {
    axios.defaults.headers.common["x-api-key"] = "DEMO-API-KEY"; // Replace this with your API Key

    let response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      { params: query_params }
    );

    return {
      pagination_count: response.headers["pagination-count"],
      images: response.data,
    };
  } catch (err) {
    console.log(err);
  }
}
export async function getCatbyID(id) {
  try {
    axios.defaults.headers.common["x-api-key"] = "DEMO-API-KEY"; // Replace this with your API Key

    let response = await axios.get("https://api.thecatapi.com/v1/images/" + id);

    return {
      cat: response.data,
    };
  } catch (err) {
    console.log(err);
  }
}
