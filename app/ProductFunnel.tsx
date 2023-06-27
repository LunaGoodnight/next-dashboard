import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

const productData = [
  {
    name: "Grains",
    value: 1380,
  },
  {
    name: "Fruits & Vegetables",
    value: 1100,
  },
  {
    name: "Dairy",
    value: 990,
  },
  {
    name: "Beans & Legumes",
    value: 880,
  },
  {
    name: "Meat",
    value: 740,
  },
  {
    name: "Healthy Fats",
    value: 548,
  },
  {
    name: "Processed Foods",
    value: 330,
  },
  {
    name: "Sweets",
    value: 200,
  },
];

const series = [
  {
    name: "Product sells",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
];

const options: ApexOptions = {
  chart: {
    type: "bar",

    toolbar: {
      show: false,
    },
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
    style: {
      fontFamily: "inherit",
      fontWeight: 800,
    },
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: false,
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
  const totalSells = productData.reduce((sum, num) => sum + num.value, 0);

  return (
    <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative">
      <h4 className="text-sm text-gray-400 absolute top-3">Product sell</h4>
      <Chart type="bar" options={options} series={series} height={240} />
      <div className="text-gray-500 text-sm">Top selling products:</div>
      <ul>
        {productData
          .slice()
          .sort((a, b) => b.value - a.value)
          .slice(0, 3)
          .map(({ name, value }) => {
            return (
              <li key={name}>
                {name}
                {(value / totalSells) * 100} %
              </li>
            );
          })}
      </ul>
    </div>
  );
};
