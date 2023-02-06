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
`;
