import React from "react";
import Selector from "../atoms/Selector";
import Tabs from "../atoms/Tabs";
import { ChartBody, ChartContainer, ChartHeader } from "./style";

export default function index({ data }) {
  return (
    <ChartContainer>
      <ChartHeader>
        <div>
          <h1>Overview</h1>
          <p>Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <Selector borderColor={"#4545FE"} placeholder={"Download report"} />
      </ChartHeader>
      <Tabs data={data} />
    </ChartContainer>
  );
}
