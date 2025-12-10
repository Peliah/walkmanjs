import { DashboardHeader } from "@/components/dashboard/header";
import { OverviewStats } from "@/components/dashboard/overview/overview-stats";
import { OverviewChart } from "@/components/dashboard/overview/overview-chart";
import { RecentActivity } from "@/components/dashboard/overview/recent-activity";

export default function DashboardPage() {
    return (
        <>
            <DashboardHeader title="Overview" />
            <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6 font-sans">
                <OverviewStats />
                <div className="grid gap-6 lg:grid-cols-2">
                    <OverviewChart />
                    <RecentActivity />
                </div>
            </div>
        </>
    );
}
