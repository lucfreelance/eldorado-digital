import './main.jsx';
import './custom.css';
// import LogoStore from './logos/logo.svg';        <LogoStore />


const Store = () => {
  return (
    <>  
    <div>
      <nav>
        


        <div className="mobile-menu inactive">
          <ul>
            <li>
              <a href="./index.html">Todos</a>
            </li>
            <li>
              <a href="./index.html">Bolsos</a>
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
              <a
                href="https://wa.me/573232329459?text=Hola,%20inicia%20una%20conversación%20con%20Ceci%20o%20alguien%20de%20su%20equipo,"
                className="email"
              >
                ceciartesanias@gmail.com
              </a>
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
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">ceciartesanias@gmail.com</li>
            <li className="navbar-shopping-cart">
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              <div>0</div>
            </li>
          </ul>
        </div>
        <div className="desktop-menu inactive">
          <ul>
            <li>
              <a
                href="https://wa.me/573232329459?text=Hola,%20inicia%20una%20conversación%20con%20Ceci%20o%20alguien%20de%20su%20equipo,"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="./mi-orden.html" className="title">Mi orden</a>
            </li>
            <li>
              <a href="./mi-cuenta.html">Mi cuenta</a>
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
          <button className="primary-button">Completa tu compra</button>
        </div>
      </aside>

      <aside className="product-detail-left inactive">
        <div className="product-detail-close">
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <img src="https://ibb.co/6RXRBG6" alt="Hermoso collar" />
        <div className="product-info-left">
          <p>$8,88</p>
          <p>Collar</p>
          <p>
            Este hermoso collar largo de estilo florido ha sido hecho a mano en
            base a semillas y materiales ecológicos.
          </p>
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
            Este producto ya fue agregado a la lista. Prueba otros productos.
          </p>
          <div className="boton-modal">
            <p>Aceptar</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Store;