import React from "react";
import { Select } from "@chakra-ui/react";

export default function Selector() {
  return (
    <Select
      placeholder="Jan 2022 - Sep 2022"
      borderColor={"#E4E4E4"}
      width="180px"
      height="48px"
      color="#4545FE"
      fontSize="13px"
      bg="white"
      borderRadius={16}
    >
      <option value="option1">Jan 2022 - Sep 2022</option>
      <option value="option2">Jan 2022 - Sep 2022</option>
    </Select>
  );
}
