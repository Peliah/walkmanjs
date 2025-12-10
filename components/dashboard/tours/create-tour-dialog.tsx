"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTours } from "@/hooks/use-tours";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CreateTourDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CreateTourDialog({ open, onOpenChange }: CreateTourDialogProps) {
    const router = useRouter();
    const { create } = useTours();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [targetUrl, setTargetUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        setIsLoading(true);
        try {
            const tourId = await create({
                name: name.trim(),
                description: description.trim() || undefined,
                targetUrl: targetUrl.trim() || undefined,
            });
            onOpenChange(false);
            resetForm();
            router.push(`/dashboard/tours/${tourId}`);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setDescription("");
        setTargetUrl("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md font-sans">
                <DialogHeader>
                    <DialogTitle className="text-[#0B192C] font-sans">Create New Tour</DialogTitle>
                    <DialogDescription className="text-[#1E3E62]/60 font-sans">
                        Give your tour a name and optionally add a description.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-[#0B192C] font-sans">
                                Tour Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g., Welcome Tour"
                                className="border-[#1E3E62]/20 focus-visible:ring-[#FF6500] font-sans"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-[#0B192C] font-sans">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="What is this tour about?"
                                className="border-[#1E3E62]/20 focus-visible:ring-[#FF6500] font-sans"
                                rows={3}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="targetUrl" className="text-[#0B192C] font-sans">
                                Target Website URL
                            </Label>
                            <Input
                                id="targetUrl"
                                type="url"
                                value={targetUrl}
                                onChange={(e) => setTargetUrl(e.target.value)}
                                placeholder="https://example.com"
                                className="border-[#1E3E62]/20 focus-visible:ring-[#FF6500] font-sans"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="border-[#1E3E62]/20 text-[#1E3E62] font-sans"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!name.trim() || isLoading}
                            className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90 font-sans"
                        >
                            {isLoading ? "Creating..." : "Create Tour"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

