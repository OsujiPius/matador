import styled from "styled-components";

export const CardContainer = styled.div`
  width: 407px;
  height: 157px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  margin: 20px 0;
`;

export const CardHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px 7px 10px;

  a {
    display: flex;
    color: #4545fe;
    font-size: 13px;
    font-weight: 500;
    gap: 6px;
  }
`;

export const Title = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #3d3d3d;
  }
`;

export const CardBody = styled.div`
  height: auto;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const CardItem = styled.div`
  width: 117px;
  height: 79px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 12px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #191919;
    margin: 10px 0 8px 0;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #606060;
  }
`;
