"use client";
import { calculatePercentageChange } from "@/src/utils/calculatePercentageChange";
import {
  faMoneyBill1,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
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
    iconBackground: "bg-amber-400",
    // iconColor: "text-[#8b939f]",
    iconColor: "text-white",
    lastMonth: 43854,
    isMoney: true,
  },
  {
    title: "New Member",
    thisMonth: 336,
    icon: faUser,
    iconBackground: "bg-indigo-200",
    iconColor: "text-white",

    lastMonth: 423,
    isMoney: false,
  },
  {
    title: "Total Expenses",
    thisMonth: 1200.0,
    icon: faCreditCard,
    iconBackground: "bg-blue-200",
    iconColor: "text-white",
    lastMonth: 1123.25,
    isMoney: false,
  },
  {
    title: "Orders",
    thisMonth: 36894,
    icon: faPenToSquare,
    iconBackground: "bg-emerald-200",
    iconColor: "text-white",
    lastMonth: 32844,
    isMoney: false,
  },
];

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
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
