import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export async function getWeatherData(endPoint, place_id, measurmentSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endPoint}`,
    params: {
      place_id: place_id,
      timezone: "auto",
      language: "en",
      units: measurmentSystem,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function searchPlaces(text) {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
