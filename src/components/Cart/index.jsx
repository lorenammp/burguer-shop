import "./style.css";

import CartProduct from "../CartProduct";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart(props) {
  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.cartTotal());

  const notifyWarning = () => toast.warning("Todos produtos foram removidos!");

  return (
    <section className="shopping-cart">
      <div className="card-title">
        <h2>Carrinho de compras</h2>
      </div>

      <div className="cart-products">
        {props.currentSale.length === 0 ? (
          <div className="empty-cart">
            <div className="align-message">
              <h2>Seu carrinho está vazio</h2>
              <h3>Adicione mais itens</h3>
            </div>
          </div>
        ) : (
          props.currentSale.map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.img}
              category={product.category}
              removeFromCart={props.removeFromCart}
            />
          ))
        )}
      </div>

      {props.currentSale.length !== 0 ? (
        <div className="cart-total-remove">
          <div className="cart-total">
            <div className="total-text">Total</div>
            <div className="total-price">{formatedValue}</div>
          </div>

          <div className="remove-all">
            <button
              onClick={() => {
                props.removeAll();
                notifyWarning();
              }}
              className="rmv-all-btn"
            >
              Remover todos
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Cart;
