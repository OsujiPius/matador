import React from "react";
import { ChartBody, NumItem, Nums } from "./style";

export default function ChartData({ data }) {
  const formatCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <ChartBody>
      <div style={{ width: "50%" }}>hh</div>
      <Nums>
        <NumItem>
          <h3 style={{ color: "#4545FE" }}>
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(data?.wallet.total)}
          </h3>
          <div>
            <p>Balance</p>
            <img src="icons/increase.svg" alt="" />
            <p>2.5%</p>
          </div>
        </NumItem>
        <NumItem>
          <h3 style={{ color: "#12D8A0" }}>₦ 800,000,000.00</h3>
          <div>
            <p>Revenue</p>
            <img src="icons/increase.svg" alt="" />
            <p>2.5%</p>
          </div>
        </NumItem>
        <NumItem></NumItem>
        <NumItem>
          <h3 style={{ color: "#FF6A6A" }}>
            ₦ {new Intl.NumberFormat("en-NG").format(data?.withdrawals.total)}
          </h3>
          <div>
            <p>Withdrawal</p>
            <img src="icons/decrease.svg" alt="" />
            <p>0.5%</p>
          </div>
        </NumItem>
      </Nums>
    </ChartBody>
  );
}
