"use client";

import { ProfileSection } from "./profile-section";
import { ApiKeySection } from "./api-key-section";
import { DangerZone } from "./danger-zone";

export function SettingsContent() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      <ProfileSection />
      <ApiKeySection />
      <DangerZone />
    </div>
  );
}

