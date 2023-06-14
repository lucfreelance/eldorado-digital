import { useState } from 'react';
import './custom.css';
import EldoradoStore from './logos/eldorado-logo-small.jpeg';
import ToggleMenu from './icons/icon_menu.svg';
import ShoppingCart from './icons/icon_shopping_cart.svg';

const Store = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [desktopMenuActive, setDesktopMenuActive] = useState(false);
  const [productDetailActive, setProductDetailActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
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
      name: 'Word Soup # 1 - Theme: FAUNA',
      price: 12,
      image: 'https://i.imgur.com/QTIy72i.jpg',
      desc: 'Introducing our 1st Word Soup throught Amazon KDP: FAUNA'
    },
    {
      name: 'Coloring Book 1 - Living the Petty Dream',
      price: 12,
      image: 'https://i.imgur.com/JPH76wV.jpg',
      desc: 'Introducing coloring KDP book for ages 4 to 9'
    },
    {
      name: 'Crossword Innuendo A: Celebrity Stars',
      price: 15,
      image: 'https://i.imgur.com/ScsU1Kr.jpg',
      desc: 'Introducing crosswoard KDP book for solving crosswords'
    },
    {
      name: 'The Origami Resolver Division: Kawaii',
      price: 20,
      image: 'https://i.imgur.com/eCdKkOd.jpg',
      desc: 'Introducing origami KDP book to great activities'
    },
    {
      name: 'Sudoku for Ever [1]',
      price: 15,
      image: 'https://i.imgur.com/GtDpOUP.jpg',
      desc: 'Introducing sudoku KDP serie to smart sudoku enthusiast'
    },
    {
      name: 'Color Pattern Serial: (1) Evocating armony',
      price: 6,
      image: 'https://i.imgur.com/m0VOa4i.jpg',
      desc: 'Introducing serial patterns for prettify your digital spaces'
    }
  ];

  const openProductDetail = (product) => {
    setProductDetailActive(true);
    setDesktopMenuActive(false);
    setMobileMenuActive(false);
    addToCart(product);
  };

  const closeProductDetail = () => {
    setProductDetailActive(false);
  };

  return (
    <>
      <header className="store-header">
        <nav className={`navbar ${desktopMenuActive ? 'active' : ''}`}>
          <div className="navbar-left">
            <img src={EldoradoStore} alt="EldoradoStore" title="EldoradoStore" className="logo" />
            <ul className={`navbar-menu ${mobileMenuActive ? 'active' : ''}`}>
              <li>
                <img
                  src={ToggleMenu}
                  alt="Toggle Menu"
                  className={`toggle-menu ${desktopMenuActive ? 'active' : ''}`}
                  onClick={() => setDesktopMenuActive(!desktopMenuActive)}
                />
              </li>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Patterns</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
                <a href="/" className="sign-out">Close</a>
              </li>
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
            <div key={index} className="product-card" onClick={() => openProductDetail(product)}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {productDetailActive && (
        <div className="product-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            {productList.map((product, index) => (
              <div key={index} className="product-details">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <button className="add-to-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Store;