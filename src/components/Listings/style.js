import styled from "styled-components";

export const ListingContainer = styled.div`
  width: 350px;
  height: 287px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 20px;

  ${({ bigCard }) =>
    bigCard &&
    `
    width: 418px;
  `}

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #12d8a0;
    margin-bottom: 8px;
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #191919;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #606060;
  }

  a {
    display: flex;
    align-items: center;
    color: #4545fe;
    font-size: 13px;
    font-weight: 500;
    gap: 6px;

    img {
      height: 11px;
    }
  }
`;

export const ListingBody = styled.div`
  margin-top: 10px;
  height: auto;
  padding: 10px 0;
  display: flex;
  gap: 15px;

  img {
    width: 154px;
    height: 155px;
    border-radius: 12px;
  }
`;

export const ListingInfo = styled.div`
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #191919;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #606060;
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #606060;
    margin-top: 3px;
  }
`;

export const OverviewContainer = styled.div`
  width: 475px;
  height: 287px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 20px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #191919;
  }

  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #191919;
    margin-bottom: 4px;
  }
`;

export const OverviewItems = styled.div`
  width: 200px;
  height: auto;
  border-top: ${(props) => (props.watchlist ? "none" : " 0.5px solid #e4e4e4")};
  padding-top: ${(props) => (props.watchlist ? "3px" : " 10px")};
  display: flex;

  img {
    width: 67px;
    height: 68px;
    border: 1px solid #12d8a0;
    border-radius: 12px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #191919;
    margin: 13px;
  }
`;

export const WatchlistContainer = styled.div`
  width: 437px;
  height: 109px;
  background: #f5f5f5;

  border-radius: 12px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

export const WatchlistCount = styled.div`
  width: 189px;
  height: 68px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  div {
    margin: 12px;
  }

  img {
    height: 24px;
    width: 24px;
    margin: 10px;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #191919;
  }

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    color: #3d3d3d;
  }
`;
