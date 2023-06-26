import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
const series = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
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
  chart: {
    type: "bar",
    height: 350,
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
};
export const RevenueBarChart = () => {
  return (
    <div className="w-2/4 bg-white p-4 text-left rounded shadow-md">
      <Chart type="bar" options={options} series={series} />
    </div>
  );
};
