import { MonthlySalesBarChart } from "@/app/analytics/MonthlySalesBarChart";
import { PageTitle } from "@/src/utils/ui/PageTitle";

export default function Home() {
  return (
    <main className="min-h-full text-gray-500 mt-20 p-4 text-left w-full overflow-y-scroll h-screen">
      <PageTitle title="Analytics" />
      <MonthlySalesBarChart />
    </main>
  );
}
