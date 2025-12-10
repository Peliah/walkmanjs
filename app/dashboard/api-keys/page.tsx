import { DashboardHeader } from "@/components/dashboard/header";
import { ApiKeySection } from "@/components/dashboard/settings/api-key-section";

export default function ApiKeysPage() {
  return (
    <>
      <DashboardHeader title="API Keys" />
      <div className="flex flex-1 flex-col items-center p-4 lg:p-6">
        <div className="w-full max-w-2xl">
          <ApiKeySection />
        </div>
      </div>
    </>
  );
}

