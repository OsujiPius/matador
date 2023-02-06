import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 82px;
  background: #191919;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
`;

export const HeaderFlex = styled.div`
  height: 100%;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
`;

export const Logo = styled.img.attrs({
  src: "/icons/logo.svg",
  alt: "Logo",
})`
  width: 170px;
  height: 60px;
`;

export const ProfileSection = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Button = styled.button`
  height: ${(props) => (props.icon ? "auto" : "40px")};
  width: ${(props) => (props.icon ? "auto" : "139px")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${(props) => (props.light ? "#fff" : "transparent")};
  color: ${(props) => (props.light ? " #191919;" : "#cbcbcb")};
  font-size: 14px;
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Dropdown = styled.div`
  position: relative;
  width: 178px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img:nth-of-type(2) {
    cursor: pointer;
  }
`;

export const UserName = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  width: 172px;
  height: 120px;
  background: rgba(255, 255, 255, 0.7);
  top: 7%;
  right: 5%;
  z-index: 10;
  border: 1px solid rgb(227, 228, 227);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 20px;
    margin: 10px 0;
  }
`;
