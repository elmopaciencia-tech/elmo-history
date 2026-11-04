import {Fragment, type ReactNode} from 'react';

/** Render bibliography text: *italics* and bare URLs become elements. */
export function rich(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*|https?:\/\/[^\s]+?(?=\.?(?:\s|$)))/g);
  return parts.map((p, i) => {
    if (p.startsWith('*') && p.endsWith('*')) return <i key={i}>{p.slice(1, -1)}</i>;
    if (/^https?:\/\//.test(p)) return <a key={i} href={p} target="_blank" rel="noreferrer">{p}</a>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}
