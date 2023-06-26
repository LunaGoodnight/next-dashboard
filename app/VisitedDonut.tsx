import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const series = [44, 55, 41, 17, 15];
const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  labels: ["data", "data", "data", "data", "data"],
  dataLabels: {
    style: {
      fontFamily: "inherit",
      fontWeight: 800,
    },
    dropShadow: {
      enabled: false,
    },
  },
};
export const VisitedDonut = () => {
  return (
    <div className="bg-white p-4 rounded text-left shadow-md relative w-2/6 pt-10">
      <h4 className="text-sm text-gray-400 absolute top-3">
        Store Visits by Source
      </h4>
      <Chart type="donut" options={options} series={series} />
    </div>
  );
};
