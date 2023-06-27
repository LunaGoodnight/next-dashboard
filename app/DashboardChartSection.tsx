"use client";

import { AreaChart } from "@/app/AreaChart";
import { MockNewsFeed } from "@/app/MockNewsFeed";

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
      <div className="pt-4 w-full flex gap-4">
        <VisitedDonut />
        <MockNewsFeed />
        <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative">
          <h4 className="text-sm text-gray-400 absolute top-3">News Feed</h4>
          <div>adfasdf</div>
        </div>
      </div>
    </div>
  );
};
