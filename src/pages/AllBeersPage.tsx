import { useEffect, useState } from "react";
import { BeerList } from "../components/BeerList";
import { fetchBeers } from "../components/FetchBeers";
import { Beer } from "../components/BeerCard";
import NotFoundPage from "./NotFoundPage";

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const getBeers = async () => {
      const beersData = await fetchBeers();
      setBeers(beersData);
    };

    getBeers();
  }, []);

  if (beers.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <>
      <BeerList beers={beers} />
    </>
  );
};
