import { useEffect, useState } from 'react';

/** 0 → 1 as the page scrolls from the top to `distance()` px. rAF-throttled. */
export function useScrollProgress(distance: () => number): number {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setP(Math.min(1, Math.max(0, window.scrollY / Math.max(1, distance()))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [distance]);

  return p;
}
