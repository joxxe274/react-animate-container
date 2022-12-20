import React from 'react';
import ReactDOM from 'react-dom/client';

import { AnimateContainer } from 'react-animate-container';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div>
      <AnimateContainer.backInDown>
        <h2>react-animate-container</h2>
      </AnimateContainer.backInDown>
    </div>
    <hr />
    <div></div>
  </React.StrictMode>,
);
