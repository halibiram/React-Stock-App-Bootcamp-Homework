import { useState, useEffect } from "react";
import List from "./product/List";
import Form from "./product/Form";
import "./styles.css";

function Product() {
  const [products, setProduct] = useState([
    {
      id: 0,
      productName: "incinmişsin",
      stock: 5,
    },
    {
      id: 1,
      productName: "Aspirin",
      stock: 15,
    },
    {
      id: 2,
      productName: "Vermidon",
      stock: 83,
    },
    {
      id: 3,
      productName: "Parol",
      stock: 22,
    },
  ]);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div id="container">
      <Form addProduct={setProduct} products={products} />
      <List products={products} setProduct={setProduct} />
    </div>
  );
}

export default Product;
