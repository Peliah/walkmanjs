import { DashboardHeader } from "@/components/dashboard/header";
import { TourEditor } from "@/components/dashboard/tour-editor/tour-editor";

interface TourPageProps {
  params: Promise<{ tourId: string }>;
}

export default async function TourPage({ params }: TourPageProps) {
  const { tourId } = await params;

  return (
    <>
      <DashboardHeader />
      <div className="flex flex-1 flex-col">
        <TourEditor tourId={tourId} />
      </div>
    </>
  );
}

