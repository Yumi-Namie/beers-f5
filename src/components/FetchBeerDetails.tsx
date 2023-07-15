import axios from "axios";
import { Beer } from "./BeerCard";

export const fetchBeerDetails = async (beerId: string ) => {
  try {
    const response = await axios.get<Beer>(
      `https://f5-beers-065cad3017be.herokuapp.com/beers/${beerId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching beer details:", error);
    return null;
  }
};
