"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateTourDialog } from "./create-tour-dialog";

export function CreateTourButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
      >
        <Plus className="mr-2 h-4 w-4" />
        Create Tour
      </Button>
      <CreateTourDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

