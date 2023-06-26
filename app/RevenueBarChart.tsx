import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
const series = [
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];
const options: ApexOptions = {
  colors: ["#62eed2", "#209ff2"],
  chart: {
    type: "bar",

    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      style: {
        colors: "#b4b4b4",
      },
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
};
export const RevenueBarChart = () => {
  return (
    <div className="w-2/4 bg-white p-4 text-left rounded shadow-md max-h-[20rem] relative">
      <h4 className="text-sm text-gray-400 absolute top-3">Revenue</h4>
      <Chart type="bar" options={options} series={series} height={240} />
    </div>
  );
};
