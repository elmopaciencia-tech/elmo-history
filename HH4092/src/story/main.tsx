import {createRoot} from 'react-dom/client';
import '../styles/tokens.css';
import './story.css';
import {Story} from './Story';

createRoot(document.getElementById('root')!).render(<Story />);
