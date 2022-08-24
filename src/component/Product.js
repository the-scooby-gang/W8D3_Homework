import React from "react";
import styled from "styled-components";

const Product = ({product, addToShoppingCart}) => {

    const ProductItem = styled.li`
        display: flex;
        flex-direction: row;
    `

    const Button = styled.button`
    font-size: 1em;
    padding: 1em;
    margin: 5em;
    border: 2px solid #ced7e0;
    border-radius: 1em;
    background-color: #9ccddc;
    `

    const handleAddToShoppingCart = () => {
        addToShoppingCart(product);
    }

    return (
        <ProductItem>
            <h3>
                {product.productName} ---- £{product.price} 
            </h3>
            <Button onClick={handleAddToShoppingCart}>Add to Cart</Button>
        </ProductItem>
    )
}

export default Product;