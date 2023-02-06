import React from "react";
import {
  OverviewContainer,
  OverviewItems,
  WatchlistContainer,
  WatchlistCount,
} from "./style";

export default function Overview({ data }) {
  return (
    <OverviewContainer>
      <h2>Listing Overview</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <div>
          <p>Most viewed</p>
          <OverviewItems>
            <img
              src={data?.most_viewed.project.project_image}
              alt={data?.most_viewed.project.name}
            />
            <h2>{data?.most_viewed.project.name}</h2>
          </OverviewItems>
        </div>
        <div>
          <p>Most shared</p>
          <OverviewItems>
            <img
              src={data?.most_shared.project.project_image}
              alt={data?.most_shared.project.name}
            />
            <h2>{data?.most_shared.project.name}</h2>
          </OverviewItems>
        </div>
      </div>
      <WatchlistContainer>
        <div>
          <p>Most watchlisted</p>
          <OverviewItems watchlist>
            <img
              src={data?.most_watchlisted.project.project_image}
              alt={data?.most_watchlisted.project.name}
            />
            <h2>{data?.most_watchlisted.project.name}</h2>
          </OverviewItems>
        </div>
        <WatchlistCount>
          <div>
            <h2>204</h2>
            <p>Number of watchlists</p>
          </div>
          <img src="icons/bookmark.svg" alt="bookmark" />
        </WatchlistCount>
      </WatchlistContainer>
    </OverviewContainer>
  );
}
