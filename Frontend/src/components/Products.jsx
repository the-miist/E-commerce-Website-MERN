import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [count, setCount] = useState();

  useEffect(() => {
    getProducts(page, limit);
  }, [page]);

  useEffect(() => {
    getProductCount();
  }, []);

  async function getProductCount() {
    try {
      let response = await axios.get("http://localhost:9000/products/count");
      setCount(response.data.count);
    } catch (error) {
      toast("Something went wrong");
    }
  }

  async function getProducts(page, limit) {
    try {
      let response = await axios.get(
        `http://localhost:9000/products?page=${page}&limit=${limit}`
      );
      setProducts(response.data);
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductCard details={product} key={product.id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ width: "45%", margin: "2%" }}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"} Previous
        </Button>
        <Button
          style={{ width: "45%", margin: "2%" }}
          onClick={() => {
            if (page < count / limit) {
              setPage(page + 1);
            }
          }}
        >
          Next {">"}
        </Button>
      </div>
    </>
  );
};

export default Products;
