import { ApexOptions } from "apexcharts";

export const productFunnelOptions: ApexOptions = {
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
