import Product from "../Product";

import "./style.css";

function ProductList(props) {
  return (
    <div className="product-cards">
      {props.products.map((product) => (
        <Product
          key={product.id}
          productObj={product}
          id={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          price={product.price}
          addToCart={props.addToCart}
          checkCartItem={props.checkCartItem}
        />
      ))}
    </div>
  );
}

export default ProductList;
