import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Store from '../store/Store';
import './App.css';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Helmet>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>eldorado-digital Ⓤ Find your eldorado 💰</title>
          <meta name="eldorado-digital" content="eldorado-digital" />
          <meta property="og:image" content="Time to be booky with @eldoradodigital" />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
