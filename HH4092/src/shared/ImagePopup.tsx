import {useEffect, useRef} from 'react';
import {docById} from '../lib/docs';

/** Minimal popup: the page image, a close (×) button, and click-outside / Esc to close. */
export function ImagePopup({docId, pdf, onClose}: {docId: string; pdf: number; onClose: () => void}) {
  const doc = docById(docId);
  const page = doc.pages.find(p => p.pdf === pdf) ?? doc.pages[0];
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.stopPropagation(); onClose(); } };
    addEventListener('keydown', onKey, true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', onKey, true); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div className="img-popup" role="dialog" aria-modal="true" aria-label={`${doc.short}, ${page.printed}`} data-own-keys
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <img src={page.src} alt={`${doc.short}, ${page.printed}`} draggable={false} />
      <button ref={closeBtn} type="button" className="img-popup-close" onClick={onClose} aria-label="Close">×</button>
    </div>
  );
}
