import React from "react";
import Selector from "../../components/atoms/Selector";
import { Message, WelcomeContainer, WelcomeContent } from "./style";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <Message>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img src="icons/hand.svg" alt="hand" /> <h1>Hi Ahmed</h1>
          </div>
          <h2>Welcome to your Dashboard</h2>
        </Message>
        <Selector borderColor={"#E4E4E4"} placeholder={"Jan 2022 - Sep 2022"} />
      </WelcomeContent>
    </WelcomeContainer>
  );
}
