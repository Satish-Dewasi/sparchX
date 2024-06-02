import React from "react";
import HeroImageSlider from "../components/HeroImageSlider";
import HeroCategories from "../components/HeroCategories";
import HeroCarausel from "../components/HeroCarausel";
import Deals from "../components/Deals";
import HeroList from "../components/HeroList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { products } from "../data/ProductData.js";

function Hero() {
  function getRandomElements(array, count) {
    let result = [];
    let usedIndices = new Set();

    while (result.length < count) {
      let randomIndex = Math.floor(Math.random() * array.length);
      if (!usedIndices.has(randomIndex)) {
        result.push(array[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    return result;
  }

  const popular_products = getRandomElements(products, 8);
  const best_selling = getRandomElements(products, 8);
  const deals = getRandomElements(products, 6);
  const newly_added = getRandomElements(products, 4);
  const top_rated = getRandomElements(products, 4);
  const best_seller = getRandomElements(products, 4);
  const popular = getRandomElements(products, 4);

  return (
    <div className="w-full h-screen  mt-[10vh] ">
      <div className="w-full  m-[auto] ">
        <HeroImageSlider />
        <HeroCategories />
        <HeroCarausel title="Popular Products" products={popular_products} />
        <HeroCarausel title="Best Selling" products={best_selling} />
        <Deals title={"Deals of the Day"} deals={deals} />

        <section className="w-full px-5 py-4 h-auto flex flex-wrap  md:gap-0 gap-10 items-center justify-evenly ">
          <HeroList title={"Newly Added"} products={newly_added} />
          <HeroList title={"Top Rated"} products={top_rated} />
          <HeroList title={"Best Seller"} products={best_seller} />
          <HeroList title={"Popular"} products={popular} />
        </section>

        <section className="w-full px-5 py-4 h-auto">
          <NewsLetter />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
