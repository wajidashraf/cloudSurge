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

    // Allow hero (or any section) to pause/resume smooth scroll via custom events
    const onLock   = () => lenis.stop();
    const onUnlock = () => lenis.start();
    window.addEventListener('hero:lock',   onLock);
    window.addEventListener('hero:unlock', onUnlock);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('hero:lock',   onLock);
      window.removeEventListener('hero:unlock', onUnlock);
    };
  }, []);
}
