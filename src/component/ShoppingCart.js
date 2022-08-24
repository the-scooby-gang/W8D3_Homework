import React from "react";
import CartProduct from "./CartProduct";

const ShoppingCart = ({shoppingCartProducts}) => {

    const productNodes = shoppingCartProducts.map( (shoppingCartProduct, index) => {
        return <CartProduct product={shoppingCartProduct} key={index} /> 
    })

    return(
        <>
        <h3>Shopping Cart</h3>
        <ul>
            {productNodes}
        </ul>

        </>
    )
}

export default ShoppingCart;