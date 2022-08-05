import "./style.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price);

  const notifySuccess = () => toast.success("Produto adicionado ao carrinho!");
  const notifyError = () => toast.error("O produto já está no carrinho!");

  return (
    <div className="card">
      <div className="card-img">
        <img className="product-img" src={props.img} alt={props.name} />
      </div>

      <div className="card-text">
        <h2>{props.name}</h2>
        <h4 className="card-category">{props.category}</h4>
        <div className="card-price">{formatedValue}</div>

        <button
          onClick={() => {
            props.addToCart(props.productObj);
            props.checkCartItem(props.id) ? notifyError() : notifySuccess();
          }}
          className="add-to-cart-btn"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Product;
