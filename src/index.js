import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import App from './App';
// import reportWebVitals from './reportWebVitals';


// ancienne syntaxe
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// nouvelle syntaxe
createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );

// reportWebVitals();
