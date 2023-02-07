import React from "react";
import { ChartBody, NumItem, Nums } from "./style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartData({ data }) {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: [40, 10, 20, 20, 15, 40, 18, 30, 35],
        backgroundColor: "#4545FE",
      },
      {
        label: "Revenue",
        data: [30, 30, 10, 20, 5, 45, 40, 5, 32],
        backgroundColor: "#12D8A0",
      },
      {
        label: "Withdrawals",
        data: [10, 10, 5, 10, 8, 8, 20, 10, 10],
        backgroundColor: "#FF6A6A",
      },
    ],
  };

  const formatCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <ChartBody>
      <div style={{ width: "50%", height: "100%" }}>
        <Bar data={chartData} />
      </div>
      <Nums>
        <NumItem>
          <h3 style={{ color: "#4545FE" }}>
            {formatCurrency.format(data?.wallet.total)}
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
            {formatCurrency.format(data?.withdrawals.total)}
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
