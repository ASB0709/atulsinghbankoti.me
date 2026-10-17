import { useEffect, useRef } from 'react';

/**
 * Radial glow that follows the cursor — the signature effect of
 * brittanychiang.com. Purely decorative.
 */
export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (event) => {
      el.style.setProperty('--x', `${event.clientX}px`);
      el.style.setProperty('--y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div className="spotlight" ref={ref} aria-hidden="true" />;
}
