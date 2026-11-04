import {createRoot} from 'react-dom/client';
import '../styles/tokens.css';
import './sources.css';
import {sources, citedIds, deck, type Source} from '../lib/content';
import {rich} from '../lib/rich';
import {ShorthandHeader} from '../shared/ShorthandHeader';

function Entry({s}: {s: Source}) {
  return (
    <article id={s.id} className="entry" tabIndex={-1}>
      <p className="bib">{rich(s.bib)}</p>
    </article>
  );
}

function Bibliography() {
  return (
    <div className="reg">
      <ShorthandHeader page="sources" />
      <header>
        <p className="eyebrow"><a href="index.html">← {deck.title}</a></p>
        <h1>Bibliography</h1>
      </header>
      <section>
        {sources.filter(s => citedIds.has(s.id)).sort((a, b) => a.bib.localeCompare(b.bib)).map(s => <Entry key={s.id} s={s} />)}
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Bibliography />);
