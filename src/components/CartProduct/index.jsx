import "./style.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartProduct(props) {
  const notifyInfo = () => toast.info("Produto removido do carrinho!");

  return (
    <div className="product-cart-card">
      <div className="img-text">
        <div className="cart-img-container">
          <img className="cart-img" alt={props.name} src={props.img} />
        </div>

        <div className="cart-title-cat">
          <h3>{props.name}</h3>
          <h4 className="cart-category">{props.category}</h4>
        </div>
      </div>

      <div className="remove-btn">
        <button
          onClick={() => {
            props.removeFromCart(props.id);
            notifyInfo();
          }}
          className="cart-rmv-btn"
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
