import { DashboardHeader } from "@/components/dashboard/header";
import { TourList } from "@/components/dashboard/tours/tour-list";
import { CreateTourButton } from "@/components/dashboard/tours/create-tour-button";

export default function ToursPage() {
  return (
    <>
      <DashboardHeader title="Tours">
        <CreateTourButton />
      </DashboardHeader>
      <div className="flex flex-1 flex-col p-4 lg:p-6">
        <TourList />
      </div>
    </>
  );
}

