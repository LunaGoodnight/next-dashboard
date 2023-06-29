"use client";

import { AreaChart } from "@/app/AreaChart";
import { MockNewsFeed } from "@/app/MockNewsFeed";

import { NumberDataSection } from "@/app/NumberDataSection";
import { ProductFunnel } from "@/app/ProductFunnel";
import { RevenueBarChart } from "@/app/RevenueBarChart";
import { VisitedDonut } from "@/app/VisitedDonut";

export const DashboardChartSection = async () => {
  return (
    <div className="flex w-full flex-wrap pt-4">
      <NumberDataSection />
      <div className="grid gap-4 grid-cols-2 w-2/4 pl-4">
        <RevenueBarChart />
        <AreaChart />
      </div>
      <div className="pt-4 w-full flex gap-4">
        <VisitedDonut />
        <MockNewsFeed />
        <ProductFunnel />
      </div>
    </div>
  );
};
