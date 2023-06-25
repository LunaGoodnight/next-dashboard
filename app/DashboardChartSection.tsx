"use client";
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

export const DashboardChartSection = () => {
  return (
    <div className="flex gap-5">
      <div className="flex gap-5 flex-col">
        <div className="bg-white p-4 rounded text-left shadow-md">
          <h4 className="text-sm text-gray-400">Sales</h4>
          <div className="bg-amber-200 rounded-full w-10 h-10 flex">
            <FontAwesomeIcon icon={faMoneyBill1} />
          </div>
          <div className="text-2xl font-bold py-2">$559.25k</div>
        </div>
        <div className="bg-white p-4 rounded text-left shadow-md">
          <h4 className="text-sm text-gray-400">New Member</h4>
          <div className="text-2xl font-bold py-2">256</div>
        </div>
      </div>

      <div className="w-2/4 h-64 bg-white p-4 text-left rounded shadow-md">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
