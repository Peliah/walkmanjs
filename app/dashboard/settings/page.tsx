import { DashboardHeader } from "@/components/dashboard/header";
import { SettingsContent } from "@/components/dashboard/settings/settings-content";

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <div className="flex flex-1 flex-col items-center p-4 lg:p-6">
        <SettingsContent />
      </div>
    </>
  );
}

