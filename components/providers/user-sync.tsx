"use client";

import { useMutation } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

export function UserSync() {
  const { isSignedIn, isLoaded } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      syncUser().catch(console.error);
    }
  }, [isLoaded, isSignedIn, syncUser]);

  return null;
}

