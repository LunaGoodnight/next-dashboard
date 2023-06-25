"use client";
import { calculatePercentageChange } from "@/src/utils/calculatePercentageChange";
import { faMoneyBill1, faUser } from "@fortawesome/free-regular-svg-icons";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(39,197,255,0.5)",
    },
  ],
};

export const numberData = [
  {
    title: "Sales",
    thisMonth: 52168,
    icon: faMoneyBill1,
    lastMonth: 43854,
  },
];

export const DashboardChartSection = () => {
  return (
    <div className="flex gap-5">
      <div className="flex gap-5 flex-col">
        {numberData.map(({ title, lastMonth, icon, thisMonth }) => {
          const { isIncrease, percentage } = calculatePercentageChange(
            lastMonth,
            thisMonth
          );
          return (
            <div
              key={title}
              className="bg-white p-4 rounded text-left shadow-md"
            >
              <div className="flex items-start justify-between">
                <h4 className="text-sm text-gray-400">Sales</h4>
                <div className="bg-amber-200 rounded w-6 h-6 flex items-center justify-center text-center text-yellow-600 text-sm">
                  <FontAwesomeIcon icon={faMoneyBill1} />
                </div>
              </div>
              <div className="text-2xl font-bold py-2">$559.25k</div>
              <div className="text-xs flex gap-2">
                <i
                  className={`text-sky-400 ${
                    isIncrease ? "after:content-['↗']" : "after:content-['↘️']"
                  } font-bold`}
                />
                <span>
                  {isIncrease ? "+" : "-"} {percentage}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-2/4 h-64 bg-white p-4 text-left rounded shadow-md">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
