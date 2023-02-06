import React from "react";
import ListingCard from "./ListingCard";
import Overview from "./Overview";

export default function index({ data }) {
  return (
    <>
      <Overview data={data} />
      <ListingCard
        bigSize
        showLink
        price={"912,000,000.00"}
        label={"Total Outstanding Balance"}
        url={"icons/listing1.svg"}
        infoName="Plaza Decan"
        infoLabel="Construed"
      />
      <ListingCard
        topSeller
        price={"86,000,000.00"}
        label={"Property Value"}
        url={"icons/listing2.svg"}
        infoName="Astird 2.0"
        infoLabel="Construed"
      />
    </>
  );
}
