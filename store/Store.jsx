import React, { useState } from 'react';
import './custom.css'

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
      name: 'Collar - Princesa Flor',
      price: 30000,
      image: 'https://i.ibb.co/svWvHcL/flor.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Este hermoso collar largo de estilo florido ha sido hecho a mano en base a semillas y materiales ecológicos.'
    },
    // Add more products here
  ];

  return (
    <>
      <nav>
        <img src="./icons/icon_menu.svg" alt="menu" className="menu" onClick={toggleMobileMenu} />

        <div className={`mobile-menu ${mobileMenuActive ? '' : 'inactive'}`}>
          <ul>
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

          <ul>
            <li>
              <a href="./mi-orden.html">Mi orden</a>
            </li>
            <li>
              <a href="./mi-cuenta.html">Mi cuenta</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://wa.me/573232329459?text=Hola,%20inicia%20una%20conversación%20con%20Ceci%20o%20alguien%20de%20su%20equipo," className="email">ceciartesanias@gmail.com</a>
            </li>
            <li>
              <a href="/" className="sign-out">Cerrar sesión</a>
            </li>
          </ul>
        </div>

        <div className="navbar-left">
          <img src="./logos/logo_ceci.svg" alt="logo" className="logo" />
          <ul>
            <li>
              <a href="./index.html">Todos</a>
            </li>
            <li>
              <a href="./index.html">Bolsos</a>
            </li>
            <li>
              <a href="./moda-mujer.html">Moda Mujer</a>
            </li>
            {/* Add more menu items */}
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">ceciartesanias@gmail.com</li>
            <li>
              <a href="./mi-orden.html" className="navbar-cart">
                <img src="./icons/icon_cart.svg" alt="cart" />
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
              </a>
            </li>
            <li>
              <a href="/" className="sign-out">Cerrar sesión</a>
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
              <button className="add-to-cart" onClick={() => addToCart(product)}>Agregar al carrito</button>
              <p className="product-desc">{product.desc}</p>
            </div>
          ))}
        </section>

        {productDetailActive && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <h2>Detalle del producto</h2>
              {/* Add product detail information here */}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Store;
