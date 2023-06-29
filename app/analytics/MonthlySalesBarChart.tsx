"use client";
import { fa } from "@faker-js/faker";
import _default from "chart.js/dist/plugins/plugin.legend";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";
import labels = _default.defaults.labels;

// data for the sparklines that appear below header area
const sparklineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
];

const colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];

const randomizeArray = (arg: number[]) => {
  const array = arg.slice();
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex = 0;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
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
    fontSize: "16px",
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
