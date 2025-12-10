"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProfileSection() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <ProfileSectionSkeleton />;
  }

  if (!user) return null;

  const initials = user.fullName
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <h2 className="text-lg font-semibold text-[#0B192C]">Profile</h2>
      <p className="text-sm text-[#1E3E62]/60">
        Manage your account settings
      </p>

      <div className="mt-6 flex items-start gap-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
          <AvatarFallback className="bg-[#1E3E62] text-xl text-white">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-[#0B192C]">First Name</Label>
              <Input
                value={user.firstName || ""}
                disabled
                className="border-[#1E3E62]/20 bg-[#FBFBFB]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[#0B192C]">Last Name</Label>
              <Input
                value={user.lastName || ""}
                disabled
                className="border-[#1E3E62]/20 bg-[#FBFBFB]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Email</Label>
            <Input
              value={user.primaryEmailAddress?.emailAddress || ""}
              disabled
              className="border-[#1E3E62]/20 bg-[#FBFBFB]"
            />
          </div>
          <p className="text-xs text-[#1E3E62]/50">
            To update your profile, please visit your{" "}
            <a
              href="https://accounts.clerk.dev/user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6500] hover:underline"
            >
              Clerk account settings
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ProfileSectionSkeleton() {
  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <div className="h-6 w-24 animate-pulse rounded bg-[#1E3E62]/10" />
      <div className="mt-6 flex items-start gap-6">
        <div className="h-20 w-20 animate-pulse rounded-full bg-[#1E3E62]/10" />
        <div className="flex-1 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-10 animate-pulse rounded-lg bg-[#1E3E62]/10" />
            <div className="h-10 animate-pulse rounded-lg bg-[#1E3E62]/10" />
          </div>
          <div className="h-10 animate-pulse rounded-lg bg-[#1E3E62]/10" />
        </div>
      </div>
    </div>
  );
}

