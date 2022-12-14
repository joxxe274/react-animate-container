import React from 'react';
import ReactDOM from 'react-dom/client';
import { Demo } from 'react-animate-container';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div>
      <h2>Default Demo</h2>
      <Demo />
    </div>
    <hr />
    <div>
      <h2>Demo with predefined greeting</h2>
      <Demo greeting='Joxxe274' />
    </div>
  </React.StrictMode>,
);
