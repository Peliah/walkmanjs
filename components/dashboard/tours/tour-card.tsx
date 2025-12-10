"use client";

import Link from "next/link";
import { MoreHorizontal, Pencil, Copy, Trash2, ExternalLink } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { useTours } from "@/hooks/use-tours";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TourStatusBadge } from "./tour-status-badge";

interface TourCardProps {
  tour: Doc<"tours">;
}

export function TourCard({ tour }: TourCardProps) {
  const { remove, duplicate } = useTours();

  const handleDuplicate = async () => {
    await duplicate({ tourId: tour._id });
  };

  const handleDelete = async () => {
    await remove({ tourId: tour._id });
  };

  return (
    <div className="group rounded-xl border border-[#1E3E62]/10 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link
            href={`/dashboard/tours/${tour._id}`}
            className="font-semibold text-[#0B192C] hover:text-[#FF6500]"
          >
            {tour.name}
          </Link>
          <TourStatusBadge status={tour.status} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/tours/${tour._id}`}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDuplicate}>
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </DropdownMenuItem>
            {tour.targetUrl && (
              <DropdownMenuItem asChild>
                <a href={tour.targetUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Site
                </a>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDelete}
              className="text-red-600 focus:text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {tour.description && (
        <p className="mt-2 line-clamp-2 text-sm text-[#1E3E62]/70">
          {tour.description}
        </p>
      )}

      {tour.targetUrl && (
        <p className="mt-3 truncate text-xs text-[#1E3E62]/50">
          {tour.targetUrl}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-[#1E3E62]/10 pt-4">
        <span className="text-xs text-[#1E3E62]/50">
          {new Date(tour._creationTime).toLocaleDateString()}
        </span>
        <Link
          href={`/dashboard/tours/${tour._id}`}
          className="text-xs font-medium text-[#FF6500] hover:underline"
        >
          Edit Tour →
        </Link>
      </div>
    </div>
  );
}

