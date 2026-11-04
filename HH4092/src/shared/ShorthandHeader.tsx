import {useEffect, useState} from 'react';
import './shorthand-header.css';

export const CHAPTERS = [
  {id: 'intro', anchor: 'top', label: 'Question'},
  {id: 'one', anchor: 'ch-one', label: 'The Odums'},
  {id: 'two', anchor: 'ch-two', label: 'The 1955 paper'},
  {id: 'three', anchor: 'ch-three', label: 'Historians'},
  {id: 'four', anchor: 'ch-four', label: 'Synthesis'}
];

export function ShorthandHeader({page = 'story', chapter, hidden = false}: {
  page?: 'story' | 'activity' | 'sources'; chapter?: string; hidden?: boolean;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('shorthand-menu-toggle')?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!(event.target as HTMLElement).closest('.shorthand-header')) setOpen(false);
    };
    addEventListener('keydown', close);
    addEventListener('pointerdown', outside);
    return () => { removeEventListener('keydown', close); removeEventListener('pointerdown', outside); };
  }, [open]);

  return <header className={`shorthand-header${hidden && !open ? ' is-hidden' : ''}${open ? ' menu-open' : ''}`}>
    <div className="shorthand-header-left">
      <a className="shorthand-logo" href={page === 'story' ? '#top' : 'index.html'} aria-label="Shorthand: back to the story">
        <img src="shorthand/assets/preview.shorthand.com/logo-12d0c622a7f8.png" alt="Shorthand" width="250" height="60" />
      </a>
    </div>
    <nav id="shorthand-navigation" className={`shorthand-navigation${open ? ' is-open' : ''}`} aria-label="Project navigation">
      <ul>
        {CHAPTERS.map(c => <li key={c.id}><a href={`${page === 'story' ? '' : 'index.html'}#${c.anchor}`}
          aria-current={page === 'story' && c.id === chapter ? 'location' : undefined}
          onClick={() => setOpen(false)}>{c.label}</a></li>)}
        <li><a href={`${page === 'story' ? '' : 'index.html'}#activity`} onClick={() => setOpen(false)}>Class activity</a></li>
        <li><a href="sources.html" onClick={() => setOpen(false)} aria-current={page === 'sources' ? 'page' : undefined}>Bibliography</a></li>
      </ul>
    </nav>
    <div className="shorthand-header-right">
      <button id="shorthand-menu-toggle" className="shorthand-menu-toggle" aria-expanded={open}
        aria-controls="shorthand-navigation" aria-label={open ? 'Close navigation menu' : 'Navigation menu'} onClick={() => setOpen(value => !value)}>
        <span /><span /><span />
      </button>
    </div>
  </header>;
}
