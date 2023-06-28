import dynamic from "next/dynamic";
import { productData } from "@/src/config/productData";
import { productFunnelOptions } from "@/src/config/productFunnelOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [
  {
    name: "Product sells",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
];

export const ProductFunnel = () => {
  const totalSells = productData.reduce((sum, num) => sum + num.value, 0);

  return (
    <div className="w-2/6 bg-white p-4 rounded text-left shadow-md relative dark:bg-neutral-600 dark:text-gray-300">
      <h4 className="text-sm text-gray-400 absolute top-3">Product sell</h4>
      <Chart
        type="bar"
        options={productFunnelOptions}
        series={series}
        height={240}
      />
      <div className="text-gray-500 text-sm pb-2">Top selling products:</div>
      <ul className="text-sm">
        {productData
          .slice()
          .sort((a, b) => b.value - a.value)
          .slice(0, 3)
          .map(({ name, value }) => {
            const percentage = (value / totalSells) * 100;
            return (
              <li key={name} className="flex gap-2">
                <span className="font-bold">{name}:</span>
                <span>{percentage.toFixed(2)} %</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
