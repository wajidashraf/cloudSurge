# Lenis Smooth Scroll Implementation

## Overview

Lenis is used for smooth scrolling across all pages. It is encapsulated in a custom hook `useLenis` located at `src/hooks/useLenis.ts`.

## Hook: `useLenis`

**File:** `src/hooks/useLenis.ts`

```ts
import Lenis from 'lenis';
import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
```

### Config options

| Option | Value | Description |
|---|---|---|
| `duration` | `1.2` | Scroll animation duration in seconds |
| `easing` | exponential decay | Smooth deceleration curve |
| `smoothWheel` | `true` | Enables smooth mouse wheel scrolling |
| `touchMultiplier` | `2` | Multiplies touch scroll distance for responsiveness |

The hook starts a `requestAnimationFrame` loop that drives Lenis on every frame. On unmount it cancels the RAF loop and destroys the Lenis instance to prevent memory leaks.

## Usage on a Page

Import and call `useLenis()` at the top of the page component (inside the component body):

```tsx
import { useLenis } from '@/hooks/useLenis';

export const MyPage: React.FC = () => {
  useLenis();
  // ...
};
```

## Pages using Lenis

| Page | File |
|---|---|
| Home | `src/pages/Home.tsx` |
| Fusion Pods | `src/pages/FusionPod.tsx` |

## Notes

- Only one Lenis instance should be active at a time. Because it is scoped inside a `useEffect`, it is automatically cleaned up on page unmount when using a SPA router.
- Do **not** call `useLenis` in child components — call it once per page at the root level.
