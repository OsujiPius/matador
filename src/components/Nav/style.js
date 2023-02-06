import styled from "styled-components";

export const Nav = styled.div`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
`;

export const NavContainer = styled.div`
  height: 67px;
  max-width: 90%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavItemsWrapper = styled.div`
  background: ${(props) => (props.active ? "#f5f5f5" : "transparent")};
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 15px;
  gap: 12px;

  p {
    color: #3d3d3d;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    margin-top: 2px;
  }
`;

export const SearchBox = styled.div`
  width: 319px;
  height: 43px;
  background: #f5f5f5;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  .search {
    height: 100%;
    width: 85%;
    font-size: 13px;
    background: transparent;
    border: none;
    border-radius: 12px;
    padding: 0 10px;
    outline: none;
  }
`;

export const WelcomeContainer = styled.div`
  height: 80px;
  background: #f5f5f5;
  padding-top: 20px;
`;

export const WelcomeContent = styled.div`
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.div`
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #191919;
  }

  h2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3d3d3d;
    margin: 10px 8px;
  }
`;
