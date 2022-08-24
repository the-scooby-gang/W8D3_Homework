import React from "react";

const CartProduct = ({product}) => {

    return (
        <li>
            <h3>
                {product.productName} ---- £{product.price} 
            </h3>
        </li>
    )
}

export default CartProduct;