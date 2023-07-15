import allBeersImg from "../assets/all-beers.jpg";
import randomBeerImg from "../assets/RandomBeer.png";
import newBeerImg from "../assets/NewBeer.png";

import { HomeCard } from "../components/HomeCards";

export const HomePage = () => {
  return (
    <div>
      <HomeCard
        imgSrc={allBeersImg}
        title="All Beers"
        txt="Explore our extensive collection of beers from around the world and discover new flavors and styles."
        linkTo="/beers"
      />

      <HomeCard
        imgSrc={randomBeerImg}
        title="Random Beer"
        txt="Embark on a thrilling adventure of taste with a random selection from our diverse range of beers."
        linkTo="/random"
      />

      <HomeCard
        imgSrc={newBeerImg}
        title="New Beer"
        txt="Indulge in the excitement of trying our latest additions and be the first to savor the flavors of our newest brews."
        linkTo="/new-beer"
      />
    </div>
  );
};
