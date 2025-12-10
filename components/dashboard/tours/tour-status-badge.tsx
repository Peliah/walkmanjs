import { cn } from "@/lib/utils";

interface TourStatusBadgeProps {
  status: "draft" | "active" | "paused";
}

const statusConfig = {
  draft: {
    label: "Draft",
    className: "bg-[#1E3E62]/10 text-[#1E3E62]",
  },
  active: {
    label: "Active",
    className: "bg-green-100 text-green-700",
  },
  paused: {
    label: "Paused",
    className: "bg-yellow-100 text-yellow-700",
  },
};

export function TourStatusBadge({ status }: TourStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "ml-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}

