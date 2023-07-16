"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

const colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];

const options: ApexOptions = {
  chart: {
    type: "bar",

    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
    },
  },
  colors: colorPalette,
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: "#adadad",
    },
    fontFamily: "inherit",
    fontSize: "14px",
  },
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  tooltip: {
    cssClass: "apexChartTooltip",
  },
};

const series = [
  {
    name: "Clothing",
    data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51],
  },
  {
    name: "Food Products",
    data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6],
  },
];
export const MonthlySalesBarChart = () => {
  return (
    <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative dark:bg-neutral-600 dark:text-gray-300">
      <h4 className="text-sm text-gray-400 absolute top-3">Monthly Sales</h4>
      <Chart type="bar" options={options} series={series} />
    </div>
  );
};
