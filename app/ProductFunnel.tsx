import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

const series = [
  {
    name: "",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
];

const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: "80%",
      isFunnel: true,
    },
  },
  colors: [
    "#F44F5E",
    "#E55A89",
    "#D863B1",
    "#CA6CD8",
    "#B57BED",
    "#8D95EB",
    "#62ACEA",
    "#4BC3E6",
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  },

  xaxis: {
    categories: [
      "Sweets",
      "Processed Foods",
      "Healthy Fats",
      "Meat",
      "Beans & Legumes",
      "Dairy",
      "Fruits & Vegetables",
      "Grains",
    ],
  },
  legend: {
    show: false,
  },
};
export const ProductFunnel = () => {
  return (
    <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative">
      <h4 className="text-sm text-gray-400 absolute top-3">Product</h4>
      <Chart type="bar" options={options} series={series} height={240} />
    </div>
  );
};
