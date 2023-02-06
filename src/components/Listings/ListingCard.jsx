import React from "react";
import { ListingContainer } from "./style";

export default function ListingCard({ bigSize, showHeader, price, label }) {
  return (
    <ListingContainer bigCard={bigSize}>
      {showHeader && <h2>Top Selling</h2>}
      <h1>₦ {price}</h1>
      <h4>{label}</h4>
    </ListingContainer>
  );
}
