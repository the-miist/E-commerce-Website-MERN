import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import ProductCard from './ProductCard';
import axios from 'axios';

const Products = () => {
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        try {
            let response = await axios.get("http://localhost:9000/products");
            setProducts(response.data);
        } catch(error) {
            alert("Something went wrong!");
        }
    }

    return(
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {

                products.length>0 ?  products.map((product)=>{
                    return <ProductCard details={product} key={product.id}/>
                }) : <Loader />
            }
        </div>
    )
}

export default Products
