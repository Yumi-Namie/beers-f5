import allBeersImg from "../assets/all-beers.jpg";

import {HomeCard} from "../components/HomeCards"

export const HomePage = () => {
  return (
    <>
      <HomeCard
        imgSrc= {allBeersImg}
        title="All Beers"
        txt="Explore all the beers in our collection."
        linkTo="/beers"
      />

      <HomeCard
        imgSrc="../assets/random-beer.jpg"
        title="Random Beer"
        txt="Discover a random beer from our selection."
        linkTo="/random"
      />

      <HomeCard
        imgSrc="../assets/random-beer.jpg"
        title="Random Beer"
        txt="Discover a random beer from our selection."
        linkTo="/random-beer"
      />

    </>
  )
}
