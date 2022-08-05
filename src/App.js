import "./App.css";

import { useState, useEffect } from "react";
import React from "react";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setProductList(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function searchFilter(searchTerm) {
    if (searchTerm.length === 0) {
      setProducts(productList);
    } else {
      const filteredItems = productList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const filteredCategory = productList.filter((product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const myArr = [...filteredCategory, ...filteredItems];

      const result = myArr.reduce((unique, productObj) => {
        if (
          !unique.some(
            (obj) => obj.id === productObj.id && obj.name === productObj.name
          )
        ) {
          unique.push(productObj);
        }
        return unique;
      }, []);

      setProducts(result);
    }
  }

  function handleChange(event) {
    searchFilter(event.target.value);
  }

  function addToCart(product) {
    const qty = {
      productId: product.id,
      productCart: 1,
      productPrice: product.price,
    };

    const findItem = currentSale.filter((p) => p.id === product.id);

    if (findItem.length === 0) {
      setCurrentSale([...currentSale, product]);
      setCartQuantity([...cartQuantity, qty]);
    } else {
      cartQuantity.forEach((item) => {
        if (item.productId === product.id) {
          item.productCart = item.productCart + 1 || 1;
        }
      });
    }
  }

  function checkCartItem(id) {
    const cartItem = currentSale.filter((product) => product.id === id);
    if (cartItem.length === 0) {
      return false;
    }

    return true;
  }

  function removeFromCart(id) {
    const getItem = currentSale.filter((p) => p.id !== id);
    setCurrentSale(getItem);
  }

  function cartTotal() {
    const cartSum = currentSale.reduce((a, b) => a + b.price, 0);

    return cartSum;
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} />
      <div className="main-container">
        <main className="product-list">
          <ProductList
            products={products}
            addToCart={addToCart}
            checkCartItem={checkCartItem}
          />
        </main>

        <aside className="cart">
          <Cart
            currentSale={currentSale}
            removeFromCart={removeFromCart}
            cartTotal={cartTotal}
            removeAll={removeAll}
          />
        </aside>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
