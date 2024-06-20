/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OfferCarousel from "../../components/custom/carousel/offer-carousel";
import FavouriteCarousel from "../../components/custom/carousel/favourite-carousel";
import TopChainsCarousel from "../../components/custom/carousel/topchains-carousel";
import List from "./list";

import data from "./data.json";

const Restaurants = () => {
  return (
    <main>
      <OfferCarousel header="Best offers for you" data={data.bestOffers} />
      <FavouriteCarousel
        header="What's on your mind?"
        data={data.whatsOnYourMind}
      />
      <TopChainsCarousel
        header="Top restaurant chains in Pune"
        data={data.topChains}
      />
      <List />
    </main>
  );
};

export default Restaurants;
