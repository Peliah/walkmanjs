import { useState, useEffect } from 'react';

// --- REAL DATA IMPORTS ---
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"; 

// --- INTERFACES ---
export interface Step {
  _id: string;
  tourId: string;
  stepId: string;
  title: string;
  content: string;
  targetSelector: string;
  position: "top" | "bottom" | "left" | "right";
  order: number;
}

export interface TourConfig {
  _id: string;
  name: string;
  status: "draft" | "active" | "paused";
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    borderRadius: number;
    overlayEnabled: boolean;
    overlayOpacity: number;
  };
  targeting: {
    urlMatchType: "exact" | "contains" | "regex";
    urlPattern: string;
    frequency: "once" | "session" | "always";
  };
  steps: Step[];
}

// --- HOOK ---

export function useTourData(tourId: string, apiKey?: string) {
  
  const [data, setData] = useState<TourConfig | null>(null);

  // 1. VALIDATE API KEY (Security Layer)
  // If apiKey is missing, we pass "skip" to avoid calling the backend unnecessarily.
  // Note: Ensure 'api.apiKeys.validate' exists in your backend schema!
  const isKeyValid = useQuery(api.apiKeys.validate, apiKey ? { key: apiKey } : "skip");

  // 2. FETCH TOUR DATA
  const realTour = useQuery(api.tours.get, { tourId: tourId as any });
  const realSteps = useQuery(api.steps.list, { tourId: tourId as any });

  // 3. TARGETING HELPER
  const shouldShowTour = (targeting: any, currentUrl: string) => {
    if (!targeting?.urlPattern) return true;
    if (targeting.urlMatchType === "contains") return currentUrl.includes(targeting.urlPattern);
    return true; 
  };

  useEffect(() => {
    // SECURITY CHECK: Only proceed if the API key returned TRUE
    if (isKeyValid !== true) {
        if (isKeyValid === false) console.error("WalkmanJS: Invalid API Key");
        return; 
    }

    // DATA MERGE: Proceed only if we have both Tour and Steps
    if (realTour && realSteps) {
       // @ts-ignore: Ignoring strict type check for quick integration
       const fullConfig: TourConfig = { 
           ...realTour, 
           steps: realSteps 
       };
       
       if (shouldShowTour(fullConfig.targeting, window.location.href)) {
         setData(fullConfig);
       }
    }
  }, [isKeyValid, realTour, realSteps]);

  return data;
}