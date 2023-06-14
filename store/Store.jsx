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
      <nav className="navbar">
        <div className="navbar-left">
          <img src={EldoradoStore} alt="EldoradoStore" title="EldoradoStore" className="logo" />
          <ul className="navbar-menu">
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
          <ul className="navbar-links">
            <li className="navbar-email">eldorado@digital.com</li>
            <li>
              <a href="./mi-orden.html" className="navbar-cart">
                <img src={ShoppingCart} alt="cart" />
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
              </a>
            </li>
            <li>
              <a href="/" className="sign-out">Cerrar</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="product-list">
          {productList.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
              <p className="product-desc">{product.desc}</p>
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
