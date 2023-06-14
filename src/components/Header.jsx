import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from "styled-components";
import { FaStop, FaPlay, FaShoppingCart } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

const VideoButton = styled.button`
  position: absolute;
  z-index: 2;
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  bottom: 1rem;
  right: 1rem;
`;

const CartButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 2;
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
`;

const Header = () => {
  const videoRef = useRef(null);
  const isVideoPlaying = useRef(true);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying.current) {
        video.pause();
      } else {
        video.play();
      }
      isVideoPlaying.current = !isVideoPlaying.current;
    }
  };

  return (
    <HeaderContainer>
      <div className="header-video-container">
        <video ref={videoRef} src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/a00ea7c2-ed9d-4145-9d81-53aac2d29d6d/graphics-20230518-084016.mp4" autoPlay loop muted className="header-video"></video>
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
      <VideoButton onClick={handleVideoToggle}>
        {isVideoPlaying.current ? <FaStop /> : <FaPlay />}
      </VideoButton>
      <CartButton>
        <FaShoppingCart />
      </CartButton>
    </HeaderContainer>
  );
};

export default Header;
