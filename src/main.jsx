import React from 'react';
import ReactDOM from 'react-dom/client';
import '@telekom-ods/design-tokens/design-tokens.css';
import '@telekom-ods/design-tokens/typography.css';
import '@telekom-ods/react-ui-kit-base/style.css';
import './styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
