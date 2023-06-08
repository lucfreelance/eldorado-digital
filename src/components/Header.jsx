import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-video-container">
        <video src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/a00ea7c2-ed9d-4145-9d81-53aac2d29d6d/graphics-20230518-084016.mp4" autoPlay loop muted className="header-video"></video>
      </div>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Welcome to Eldorado</h1>
          <h2 className="header-subtitle">The best Low Content Book Store ever!</h2>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;