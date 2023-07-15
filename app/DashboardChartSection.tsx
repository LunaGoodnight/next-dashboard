"use client";

import { AreaChart } from "@/app/AreaChart";
import { MockNewsFeed } from "@/app/MockNewsFeed";

import { NumberDataSection } from "@/app/NumberDataSection";
import { ProductFunnel } from "@/app/ProductFunnel";
import { RevenueBarChart } from "@/app/RevenueBarChart";
import { VisitedDonut } from "@/app/VisitedDonut";

export const DashboardChartSection = () => {
  return (
    <div className="w-full pt-4">
      <div className="flex gap-4 w-full">
        <NumberDataSection />
        <div className="grid gap-4 grid-cols-2 sm:w-2/4 w-full">
          <RevenueBarChart />
          <AreaChart />
        </div>
      </div>
      <div className="w-full flex gap-4 pt-4">
        <VisitedDonut />
        <MockNewsFeed />
        <ProductFunnel />
      </div>
    </div>
  );
};
