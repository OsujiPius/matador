import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardHeader, CardItem, Title } from "./style";

export default function statCard({
  url,
  title,
  firstStat,
  secondStat,
  thirdStat,
  firstCard,
  secondCard,
  lastStat,
}) {
  return (
    <CardContainer>
      <CardHeader>
        <Title>
          <img src={url} alt="img" />
          <h3>{title}</h3>
        </Title>
        <Link href="/">
          View all <img src="icons/arrow-right.svg" alt="" />
        </Link>
      </CardHeader>
      <CardBody>
        <CardItem>
          <h2>{firstStat}</h2>
          <h4>Total</h4>
        </CardItem>
        <CardItem>
          <h2>{secondStat}</h2>
          {firstCard ? <h4>Available</h4> : <h4>New</h4>}
        </CardItem>
        <CardItem>
          <h2>{thirdStat}</h2>
          {firstCard ? <h4>Sold Out</h4> : <h4>Active</h4>}
        </CardItem>
        {secondCard && (
          <CardItem>
            <h2>{lastStat}</h2>
            <h4>Inactive</h4>
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}
