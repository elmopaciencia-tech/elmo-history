import {CHAPTERS} from './ShorthandHeader';
import './shorthand-footer.css';

/** HH4021's Shorthand footer structure, with the reef project's destinations. */
export function ShorthandFooter() {
  return <footer className="Project-FooterContainer" data-project-footer="true">
    <div className="Layout Project-Footer Theme-Project-Footer">
      <div className="Project-Footer--left">
        <div className="Theme-Logos">
          <div className="Theme-Default-Logos">
            <span className="Theme-Logo">
              <a href="#top" aria-label="Shorthand: back to the story">
                <img alt="Shorthand" src="shorthand/assets/preview.shorthand.com/logo-12d0c622a7f8.png" width="250" height="60" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="Project-Footer--center">
        <nav className="Navigation Project-Navigation Theme-NavigationBar" aria-label="Footer navigation">
          <ul className="Navigation__itemList Theme-Navigation-ItemList">
            {CHAPTERS.map(c => <li key={c.id} className="Navigation__item Theme-NavigationBarItem">
              <a className="Theme-NavigationLink" href={`#${c.anchor}`}>{c.label}</a>
            </li>)}
            <li className="Navigation__item Theme-NavigationBarItem"><a className="Theme-NavigationLink" href="#activity">Class activity</a></li>
            <li className="Navigation__item Theme-NavigationBarItem"><a className="Theme-NavigationLink" href="sources.html">Bibliography</a></li>
          </ul>
        </nav>
      </div>
      <div className="Project-Footer--right" aria-hidden="true">
        <div className="Theme-SocialIcons Footer__socialIcons" />
      </div>
    </div>
  </footer>;
}
