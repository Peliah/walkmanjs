import { DashboardHeader } from "@/components/dashboard/header";
import { AnalyticsContent } from "@/components/dashboard/analytics/analytics-content";

export default function AnalyticsPage() {
  return (
    <>
      <DashboardHeader title="Analytics" />
      <div className="flex flex-1 flex-col p-4 lg:p-6">
        <AnalyticsContent />
      </div>
    </>
  );
}

