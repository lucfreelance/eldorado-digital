import './main.jsx';
import './custom.css';
import ShoppingCart from './icons/icon_shopping_cart.svg';

const Store = () => {
  return (
    <div>
      <nav>
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Word Soups</a>
            </li>
            <li>
              <a href="/">Coloring Books</a>
            </li>
            <li>
              <a href="/">Sudokus</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="./mi-orden.html">My order</a>
            </li>
            <li>
              <a href="./mi-cuenta.html">My account</a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="https://wa.me/573163608459?text=Hola,%20inicia%20una%20conversación%20con%20Ceci%20o%20alguien%20de%20su%20equipo,"
                className="email"
              >
                eldoradodigital@hotmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">eldoradodigital@hotmail.com</li>
            <li className="navbar-shopping-cart">
              <img src={ShoppingCart} alt="shopping cart" />
              <div>0</div>
            </li>
          </ul>
        </div>
        <div className="desktop-menu inactive">
          <ul>
            <li>
              <a href="https://wa.me/573232329459?text=Hola,%20inicia%20una%20conversación%20con%20Ceci%20o%20alguien%20de%20su%20equipo,">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="./mi-orden.html" className="title">
                My order
              </a>
            </li>
            <li>
              <a href="./mi-cuenta.html">My account</a>
            </li>
            <li>
              <a href="/">Sign out</a>
            </li>
          </ul>
        </div>
      </nav>

      <aside className="product-detail inactive">
        <div className="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">Mi orden</p>
        </div>

        <div className="my-order-content"></div>

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p className="total">$888</p>
        </div>
        <div className="button-product-detail--container">
          <button className="primary-button">Complete your purchase</button>
        </div>
      </aside>

      <aside className="product-detail-left inactive">
        <div className="product-detail-close">
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <img src="https://ibb.co/6RXRBG6" alt="Interesting coloring book TOPIC SUMMER" />
        <div className="product-info-left">
          <p>$8,88</p>
          <p>Book</p>
          <button className="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
            Agregar al carrito
          </button>
        </div>
      </aside>

      <section className="main-container">
        <div className="cards-container"></div>
      </section>

      <div className="modal inactive">
        <div className="modal-contenido">
          <p className="modal-title">
            This produc was already added to shop list; try another one...
          </p>
          <div className="boton-modal">
            <p>Confirm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
