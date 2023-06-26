import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

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
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
    ],
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
    <div className="w-1/4 bg-white p-4 text-left rounded shadow-md max-h-[20rem] relative">
      <h4 className="text-sm text-gray-400 absolute top-3">Revenue</h4>
      <Chart type="area" options={options} series={series} height={240} />
    </div>
  );
};
