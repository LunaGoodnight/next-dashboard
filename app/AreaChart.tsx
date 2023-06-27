import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    height: 280,
    type: "area",

    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    show: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      style: {
        colors: "#b4b4b4",
      },
    },
  },
};
const series = [
  {
    name: "Series 1",
    data: [45, 52, 38, 45, 19, 23, 2],
  },
];
export const AreaChart = () => {
  return (
    <div className="bg-white p-4 text-left rounded shadow-md max-h-[20rem] relative">
      <h4 className="text-sm text-gray-400 absolute top-3">Revenue</h4>
      <Chart type="area" options={options} series={series} height={240} />
    </div>
  );
};
