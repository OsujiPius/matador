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

export const ChartBody = styled.div`
  height: 180px;
  display: flex;
`;

export const Nums = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const NumItem = styled.div`
  width: 189px;
  height: 73px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 10px 0 0 5px;

  div {
    display: flex;
    padding: 5px 0;
    gap: 4px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    margin: 3px 2px 0 0;
  }

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    color: #3d3d3d;
  }
`;
