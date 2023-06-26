"use client";

import { AreaChart } from "@/app/AreaChart";
import { NumberDataSection } from "@/app/NumberDataSection";
import { RevenueBarChart } from "@/app/RevenueBarChart";
import { VisitedDonut } from "@/app/VisitedDonut";

export const DashboardChartSection = () => {
  return (
    <div className="flex w-full flex-wrap">
      <NumberDataSection />
      <div className="w-2/4 flex justify-between">
        <RevenueBarChart />
        <AreaChart />
      </div>

      <VisitedDonut />
    </div>
  );
};
