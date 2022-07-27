import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './layout/footer';
import Header from './layout/header';

import Terms from './layout/terms';
import './static/css/reset.css';
import './static/css/font.css';
import './static/css/style.css';
import './static/css/response.css';
import reportWebVitals from './reportWebVitals';

const app = ReactDOM.createRoot(document.getElementById('app'));

app.render(
    <>
      <Header />
      <main className="main">
      <div className="container">
      <App />
      </div>
      <Terms />
      </main>
      <Footer />
    </>
 
);

reportWebVitals();
