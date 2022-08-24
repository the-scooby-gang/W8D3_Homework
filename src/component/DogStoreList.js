import React from "react";
import Product from "./Product";

const DogStoreList = ({products, addToShoppingCart}) => {

    const productNodes = products.map( (product, index) => {
        return <Product key={index} product={product} addToShoppingCart={addToShoppingCart}/>
    })

    return (
        <>
        <h2>List of Products</h2>
        <ul>
            {productNodes}
        </ul>
        </>
    )
}

export default DogStoreList;