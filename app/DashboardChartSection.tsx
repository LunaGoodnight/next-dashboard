"use client";

import { ChartJsBar } from "@/app/ChartJsBar";
import { numberData } from "@/src/config/numberData";
import { calculatePercentageChange } from "@/src/utils/calculatePercentageChange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DashboardChartSection = () => {
  return (
    <div className="flex gap-3 w-full">
      <div className="flex flex-row w-2/4 gap-3 flex-wrap ">
        {numberData.map(
          ({
            title,
            iconColor,
            lastMonth,
            icon,
            thisMonth,
            iconBackground,
            isMoney,
          }) => {
            const { isIncrease, percentage } = calculatePercentageChange(
              lastMonth,
              thisMonth
            );
            return (
              <div
                key={title}
                className="bg-white p-4 rounded text-left shadow-md w-[48.5%]"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-sm text-gray-400">{title}</h4>
                  <div
                    className={`${iconBackground} ${iconColor} rounded w-6 h-6 flex items-center justify-center text-center text-sm`}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </div>
                </div>
                <div className="text-2xl font-bold py-2">
                  {isMoney && "$ "}
                  {thisMonth}
                </div>
                <div className="text-xs flex gap-2">
                  <i
                    className={`text-sky-400 ${
                      isIncrease
                        ? "after:content-['↗']"
                        : "after:content-['↘️']"
                    } font-bold`}
                  />
                  <span>
                    {isIncrease ? "+" : "-"} {percentage}
                  </span>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="w-2/4 bg-white p-4 text-left rounded shadow-md">
        <ChartJsBar />
      </div>
    </div>
  );
};
