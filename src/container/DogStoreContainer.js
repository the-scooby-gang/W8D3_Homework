import React, {useState} from "react";
import DogStoreList from "../component/DogStoreList";
import ShoppingCart from "../component/ShoppingCart";
import styled from "styled-components";

const DogStoreContainer = () => {

    const Header = styled.h1`
        text-align: center;
        font-size: 1.5em;
        color: #fff;
        background-color: #062c43;
        margin: 0;
        padding: 1em;
    `



    const [products, setProducts] = useState([
        { 
            productName: "Delux Dog Bed",
            price: 30
        },
        {
            productName: "Doglead",
            price: 20
        },
        {
            productName: "Dog collar",
            price: 10
        }
    ])

    const [shoppingCart, setShoppingCart] = useState([]);

    const addToShoppingCart = (product) => {
        const copyOfCart = [... shoppingCart];
        copyOfCart.push(product);
        setShoppingCart(copyOfCart) // with new data
    } 

    return(
        <>
            <Header>Dog Store</Header>
            <main>
                <DogStoreList products={products} addToShoppingCart={addToShoppingCart} />
                <ShoppingCart shoppingCartProducts={shoppingCart} />
            </main>

        </>
    )
}

export default DogStoreContainer;