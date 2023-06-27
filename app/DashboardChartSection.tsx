"use client";

import { AreaChart } from "@/app/AreaChart";

import { NumberDataSection } from "@/app/NumberDataSection";
import { RevenueBarChart } from "@/app/RevenueBarChart";
import { VisitedDonut } from "@/app/VisitedDonut";

export const DashboardChartSection = async () => {
  return (
    <div className="flex w-full flex-wrap">
      <NumberDataSection />
      <div className="grid gap-4 grid-cols-2 w-2/4 pl-4">
        <RevenueBarChart />
        <AreaChart />
      </div>
      <div className="pt-4 w-full">
        <VisitedDonut />
      </div>
    </div>
  );
};
