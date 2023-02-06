import Link from "next/link";
import React from "react";
import { ListingBody, ListingContainer, ListingInfo } from "./style";

export default function ListingCard({
  bigSize,
  topSeller,
  price,
  label,
  showLink,
  url,
  infoName,
  infoLabel,
}) {
  return (
    <ListingContainer bigCard={bigSize}>
      {topSeller && <h2>Top Selling</h2>}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>₦ {price}</h1>
        {showLink && (
          <Link href="/">
            View all <img src="icons/arrow-right.svg" alt="" />
          </Link>
        )}
      </div>

      <h4>{label}</h4>
      <ListingBody>
        <img src={url} alt="card-image" />
        <ListingInfo>
          <h1>{infoName}</h1>
          <p>{infoLabel}</p>
          {topSeller ? (
            <>
              <div style={{ marginTop: 15 }}>
                <h5 style={{ color: "#4545FE" }}>2/10</h5>
                <p>Units sold</p>
              </div>
              <div style={{ marginTop: 15 }}>
                <h5 style={{ color: "#12D8A0" }}>20k/80k</h5>
                <p>Fractions available</p>
              </div>
            </>
          ) : (
            <div style={{ marginTop: "1.9rem" }}>
              <h5 style={{ color: "#FF3636" }}>₦ 12,000,000.00</h5>
              <p>Outstanding Balance</p>
            </div>
          )}
        </ListingInfo>
      </ListingBody>
    </ListingContainer>
  );
}
