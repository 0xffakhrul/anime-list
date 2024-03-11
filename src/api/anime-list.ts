import { Anime } from "@/utils/types";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?limit=20"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchDataById = async (id: string): Promise<Anime> => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchData, fetchDataById };
