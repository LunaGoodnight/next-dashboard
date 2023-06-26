import { DashboardChartSection } from "@/app/DashboardChartSection";

export default function Home() {
  return (
    <main className="min-h-full text-gray-500 mt-20 p-4 text-left w-full overflow-y-scroll h-screen">
      <h3 className="dashboard font-bold text-xl pb-4">Dashboard</h3>
      <DashboardChartSection />
    </main>
  );
}
