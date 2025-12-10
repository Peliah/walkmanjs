# Widget Integration Guide

This document explains how the WalkmanJS embed code works and how to build the embeddable widget.

## Table of Contents

- [Embed Code Structure](#embed-code-structure)
- [Widget Initialization Flow](#widget-initialization-flow)
- [Data Structures](#data-structures)
- [Convex Functions](#convex-functions)
- [Analytics Events](#analytics-events)
- [Targeting Logic](#targeting-logic)
- [Widget Pseudocode](#widget-pseudocode)
- [UI Requirements](#ui-requirements)

---

## Embed Code Structure

When a user creates a tour in the dashboard, they get an embed code like this:

```html
<script 
  src="https://widget.walkmanjs.com/tour.js" 
  data-tour-id="k57abc123def456" 
  data-api-key="wk_ABCdef123XYZ..."
></script>
```

| Attribute | Description |
|-----------|-------------|
| `src` | URL to the widget bundle |
| `data-tour-id` | Convex document ID of the tour |
| `data-api-key` | User's API key for authentication |

---

## Widget Initialization Flow

```
1. Script loads on customer's website
2. Widget reads data attributes:
   - data-tour-id → Which tour to load
   - data-api-key → Authentication
3. Widget calls Convex to:
   a. Validate API key
   b. Fetch tour config
   c. Fetch steps
4. Widget checks targeting rules (URL, trigger, frequency)
5. If rules pass → Start tour
6. Track analytics events as user progresses
```

---

## Data Structures

### Tour Object

```typescript
interface Tour {
  _id: string;
  name: string;
  description?: string;
  status: "draft" | "active" | "paused";
  targetUrl?: string;
  theme?: {
    primaryColor: string;      // e.g., "#FF6500"
    backgroundColor: string;   // e.g., "#FFFFFF"
    textColor: string;         // e.g., "#0B192C"
    borderRadius: number;      // e.g., 8 (pixels)
    overlayEnabled: boolean;
    overlayOpacity: number;    // e.g., 0.5
  };
  targeting?: {
    urlMatchType: "exact" | "contains" | "regex";
    urlPattern: string;
    triggerType: "pageload" | "delay" | "click";
    triggerDelay?: number;     // seconds
    frequency: "once" | "session" | "always";
  };
}
```

### Step Object

```typescript
interface Step {
  _id: string;
  tourId: string;
  stepId: string;            // Unique identifier for analytics
  title: string;
  content: string;
  targetSelector: string;    // CSS selector, e.g., "#signup-btn"
  position: "top" | "bottom" | "left" | "right";
  order: number;             // 0, 1, 2, 3...
}
```

---

## Convex Functions

### 1. Validate API Key

```typescript
// convex/apiKeys.ts → validate
const isValid = await convex.query(api.apiKeys.validate, { 
  key: "wk_ABCdef123..." 
});
// Returns: boolean
```

### 2. Get Tour by ID

```typescript
// convex/tours.ts → get
const tour = await convex.query(api.tours.get, { 
  tourId: "k57abc123def456" 
});
// Returns: Tour object or null
```

### 3. Get Steps for Tour

```typescript
// convex/steps.ts → list
const steps = await convex.query(api.steps.list, { 
  tourId: "k57abc123def456" 
});
// Returns: Step[] sorted by order
```

### 4. Track Analytics Event

```typescript
// convex/analytics.ts → track
await convex.mutation(api.analytics.track, {
  tourId: "k57abc123def456",
  visitorId: "visitor_unique_id",  // Generate per visitor
  event: "tour_started",           // See event types below
  stepId: "step_123...",           // Optional, for step events
  metadata: {}                     // Optional extra data
});
```

---

## Analytics Events

| Event | When to Fire |
|-------|--------------|
| `tour_started` | User begins the tour |
| `step_viewed` | Step tooltip is shown |
| `step_completed` | User clicks "Next" |
| `step_skipped` | User clicks "Skip" |
| `tour_completed` | User finishes all steps |
| `tour_exited` | User closes tour early |

---

## Targeting Logic

### URL Matching

```typescript
function shouldShowTour(targeting: Targeting, currentUrl: string): boolean {
  if (!targeting?.urlPattern) return true;
  
  switch (targeting.urlMatchType) {
    case "exact":
      return currentUrl === targeting.urlPattern;
    case "contains":
      return currentUrl.includes(targeting.urlPattern);
    case "regex":
      return new RegExp(targeting.urlPattern).test(currentUrl);
    default:
      return true;
  }
}
```

### Frequency Check

```typescript
function hasSeenTour(tourId: string, frequency: string): boolean {
  const key = `walkmanjs_${tourId}`;
  
  switch (frequency) {
    case "once":
      return localStorage.getItem(key) !== null;
    case "session":
      return sessionStorage.getItem(key) !== null;
    case "always":
      return false;
    default:
      return false;
  }
}

function markTourSeen(tourId: string, frequency: string): void {
  const key = `walkmanjs_${tourId}`;
  if (frequency === "once") localStorage.setItem(key, "true");
  if (frequency === "session") sessionStorage.setItem(key, "true");
}
```

### Trigger Handling

```typescript
function initTrigger(targeting: Targeting, startTour: () => void): void {
  switch (targeting?.triggerType) {
    case "pageload":
      startTour();
      break;
    case "delay":
      setTimeout(startTour, (targeting.triggerDelay || 0) * 1000);
      break;
    case "click":
      // Expose global function for manual trigger
      window.WalkmanJS = { start: startTour };
      break;
    default:
      startTour();
  }
}
```

---

## Widget Pseudocode

```typescript
// tour.js entry point
(async function() {
  // 1. Get config from script tag
  const script = document.currentScript;
  const tourId = script?.dataset.tourId;
  const apiKey = script?.dataset.apiKey;

  if (!tourId || !apiKey) {
    console.error("WalkmanJS: Missing tour-id or api-key");
    return;
  }

  // 2. Init Convex client
  const convex = new ConvexClient(CONVEX_URL);

  // 3. Validate API key
  const isValid = await convex.query(api.apiKeys.validate, { key: apiKey });
  if (!isValid) {
    console.error("WalkmanJS: Invalid API key");
    return;
  }

  // 4. Fetch tour
  const tour = await convex.query(api.tours.get, { tourId });
  if (!tour || tour.status !== "active") {
    console.log("WalkmanJS: Tour not found or not active");
    return;
  }

  // 5. Check targeting
  if (!shouldShowTour(tour.targeting, window.location.href)) {
    console.log("WalkmanJS: URL targeting not matched");
    return;
  }
  
  if (hasSeenTour(tourId, tour.targeting?.frequency || "once")) {
    console.log("WalkmanJS: Tour already seen");
    return;
  }

  // 6. Fetch steps
  const steps = await convex.query(api.steps.list, { tourId });
  if (steps.length < 1) {
    console.log("WalkmanJS: No steps found");
    return;
  }

  // 7. Generate visitor ID
  const visitorId = getOrCreateVisitorId();

  // 8. Create tour UI
  const widget = new TourWidget({ 
    tour, 
    steps, 
    visitorId, 
    convex,
    onStart: () => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "tour_started"
      });
    },
    onStepView: (stepId) => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "step_viewed",
        stepId
      });
    },
    onStepComplete: (stepId) => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "step_completed",
        stepId
      });
    },
    onSkip: (stepId) => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "step_skipped",
        stepId
      });
    },
    onComplete: () => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "tour_completed"
      });
      markTourSeen(tourId, tour.targeting?.frequency || "once");
    },
    onExit: () => {
      convex.mutation(api.analytics.track, {
        tourId,
        visitorId,
        event: "tour_exited"
      });
    }
  });

  // 9. Handle trigger
  initTrigger(tour.targeting, () => widget.start());
})();

// Helper: Generate or retrieve visitor ID
function getOrCreateVisitorId(): string {
  const key = "walkmanjs_visitor_id";
  let visitorId = localStorage.getItem(key);
  
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(key, visitorId);
  }
  
  return visitorId;
}
```

---

## UI Requirements

### Core Components

1. **Tooltip/Popover**
   - Positioned relative to `targetSelector` element
   - Respects `position` value (top, bottom, left, right)
   - Auto-adjusts if near viewport edges

2. **Controls**
   - Back button (disabled on first step)
   - Next button
   - Skip button
   - Close (X) button

3. **Progress Indicator**
   - Display: "Step 2 of 5"
   - Or: progress dots/bar

4. **Overlay (Optional)**
   - Dark backdrop when `overlayEnabled: true`
   - Opacity from `overlayOpacity` value
   - Highlight/cutout around target element

### Theming

Apply theme values from `tour.theme`:

```css
.walkmanjs-tooltip {
  background-color: var(--wjs-bg);        /* theme.backgroundColor */
  color: var(--wjs-text);                  /* theme.textColor */
  border-radius: var(--wjs-radius);        /* theme.borderRadius + "px" */
}

.walkmanjs-button-primary {
  background-color: var(--wjs-primary);    /* theme.primaryColor */
}

.walkmanjs-overlay {
  background-color: rgba(0, 0, 0, var(--wjs-overlay-opacity));
}
```

### Animations

- Smooth fade in/out between steps
- Tooltip entrance animation
- Scroll target element into view if needed

### Responsive

- Handle mobile viewports
- Adjust tooltip positioning on small screens
- Touch-friendly button sizes

---

## Convex Connection

The widget needs to connect to the same Convex deployment as the dashboard:

```typescript
const CONVEX_URL = "https://YOUR_DEPLOYMENT.convex.cloud";
```

This should be:
- Hardcoded in the widget build, OR
- Passed as another data attribute: `data-convex-url`

---

## Recommended Tech Stack for Widget

- **Vite** - Fast bundler for small bundle size
- **Preact** or **Vanilla JS** - Lightweight UI
- **Convex Client** - `convex/browser` for queries/mutations
- **Floating UI** - Tooltip positioning

---

## Bundle Optimization

Target bundle size: **< 50KB gzipped**

Tips:
- Use tree-shaking
- Avoid heavy dependencies
- Inline critical CSS
- Use dynamic imports for analytics

---

## Testing

Create a test HTML page:

```html
<!DOCTYPE html>
<html>
<head>
  <title>WalkmanJS Test</title>
</head>
<body>
  <button id="signup-btn">Sign Up</button>
  <nav class="nav-menu">Menu</nav>
  <div id="dashboard">Dashboard</div>

  <script 
    src="http://localhost:5173/tour.js" 
    data-tour-id="YOUR_TOUR_ID" 
    data-api-key="YOUR_API_KEY"
  ></script>
</body>
</html>
```

---

## Questions?

Contact the dashboard team if you need:
- Additional Convex functions
- Changes to data structures
- New analytics events


