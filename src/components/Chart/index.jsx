import React from "react";
import Selector from "../atoms/Selector";
import { ChartContainer, ChartHeader } from "./style";

export default function index() {
  return (
    <ChartContainer>
      <ChartHeader>
        <div>
          <h1>Overview</h1>
          <p>Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <Selector />
      </ChartHeader>
    </ChartContainer>
  );
}
