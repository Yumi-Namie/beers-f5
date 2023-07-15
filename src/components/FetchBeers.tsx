import axios from "axios";
import { Beer } from "./BeerCard";

export const fetchBeers = async () => {
  try {
    const response = await axios.get<Beer[]>(
      "https://f5-beers-065cad3017be.herokuapp.com/beers"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
