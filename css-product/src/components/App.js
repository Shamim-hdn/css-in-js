import React from "react";
import styled from "@emotion/styled";

import Product from "./product";

const products = [
  {
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    title6: "Free shipping",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1594938350684-4c251b5030d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60g",
  },
  {
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    title6: "Free shipping",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
];
function App() {
  const Div = styled.div`
    width: 100%;
    background-color: white;
  `;

  return (
    <Div className="container mt-3">
      {products.map((product) => (
        <Product
          category={product.category}
          description={product.description}
          title6={product.title6}
          image={product.image}
        />
      ))}
    </Div>
  );
}

export default App;
