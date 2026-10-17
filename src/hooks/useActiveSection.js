import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently "active" for scroll-spy navigation.
 * Pass a stable (module-level) array of ids so the effect doesn't re-subscribe.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;

      // Snap to the last section once the page is scrolled to the bottom.
      if (scrollable > 0 && window.scrollY >= scrollable - 4) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const threshold = window.innerHeight * 0.35;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return active;
}
