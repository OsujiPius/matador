import React from "react";
import StatCard from "./StatCard";

export default function index({ data }) {
  return (
    <div>
      <StatCard
        url={"icons/property.svg"}
        title={"Property Overview"}
        firstStat={data?.total_project}
        secondStat={data?.available_projects}
        thirdStat={data?.sold_out}
        firstCard
      />
      <StatCard
        url={"icons/users.svg"}
        title={"Customers Overview"}
        firstStat={data?.total_users}
        secondStat={data?.total_new_user}
        thirdStat={data?.total_active_users}
        lastStat={data?.total_inactive_users}
        secondCard
      />
    </div>
  );
}
