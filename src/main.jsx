import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ClickToComponent } from 'click-to-react-component';

import App from './App.jsx'
import './styles/index.css';
import './styles/variables.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickToComponent />
    <App />
  </StrictMode>,
)
