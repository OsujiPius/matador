import React from "react";
import ListingCard from "./ListingCard";

export default function index({ data }) {
  return (
    <>
      <ListingCard
        bigSize
        price={"912,000,000.00"}
        label={"Total Outstanding Balance"}
      />
      <ListingCard
        showHeader
        price={"86,000,000.00"}
        label={"Property Value"}
      />
    </>
  );
}
