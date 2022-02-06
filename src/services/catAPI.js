import axios from "axios";

export default async function getCats(query_params) {
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
