import React, { useState } from 'react';
import './custom.css';
import EldoradoStore from './logos/eldorado-logo-small.jpeg';
import ToggleMobileMenu from './icons/icon_menu.svg';
import ShoppingCart from './icons/icon_shopping_cart.svg';

const Store = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [desktopMenuActive, setDesktopMenuActive] = useState(false);
  const [productDetailActive, setProductDetailActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuActive(!desktopMenuActive);
  };

  const toggleProductDetail = () => {
    setProductDetailActive(!productDetailActive);
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  const closeModal = () => {
    setProductDetailActive(false);
  };

  const productList = [
    {
      name: 'Collar - Flower Princess',
      price: 30000,
      image: 'https://i.ibb.co/svWvHcL/flor.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Beautiful collar'
    },
    // Add more products here
  ];

  return (
    <>
      <header className="store-header">
        <nav className="navbar">
          <div className="navbar-left">
            <img src={EldoradoStore} alt="EldoradoStore" title="EldoradoStore" className="logo" />
            <ul className={`navbar-menu ${mobileMenuActive ? 'active' : ''}`}>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Patterns</a>
              </li>
              {/* Add more menu items */}
            </ul>
          </div>

          <div className="navbar-right">
            <ul className={`navbar-links ${desktopMenuActive ? 'active' : ''}`}>
              <li className="navbar-email">eldorado@digital.app</li>
              <li>
                <a href="/" className="sign-out">Cerrar</a>
              </li>
            {/* <li><img
              src={ToggleMobileMenu}
              alt="Toggle Desktop Menu"
              className="toggle-desktop-menu inactive"
              onClick={toggleDesktopMenu}
            /></li> */}
            <li>
              <a href="./mi-orden.html" className="navbar-cart">
                <img src={ShoppingCart} alt="cart" />
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
              </a>
            </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="store-main">
        <section className="product-list">
          {productList.map((product, index) => (
            <div key={index} className="product-card" onClick={toggleProductDetail}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <p className="product-desc">{product.desc}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          ))}
        </section>

        {productDetailActive && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <h2>Product detail</h2>
              {/* Add product detail information here */}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Store;
