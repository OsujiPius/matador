import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 856px;
  height: 325px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
`;

export const ChartHeader = styled.div`
  height: auto;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;

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
    margin-top: 7px;
  }
`;
