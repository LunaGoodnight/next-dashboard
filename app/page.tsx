import { DashboardChartSection } from "@/app/DashboardChartSection";

export default function Home() {
  return (
    <main className="min-h-full text-gray-500 pt-24 pl-5 w-4/5 text-left">
      <h3 className="dashboard font-bold text-xl pb-4">Dashboard</h3>
      <DashboardChartSection />
    </main>
  );
}
