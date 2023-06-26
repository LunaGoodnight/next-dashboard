import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const series = [44, 55, 41, 17, 15];
const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const VisitedDonut = () => {
  return (
    <div className="bg-white p-4 rounded text-left shadow-md relative w-2/4">
      <Chart type="donut" options={options} series={series} />
    </div>
  );
};
