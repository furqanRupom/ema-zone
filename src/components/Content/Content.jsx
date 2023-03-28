import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../OrderCart/Cart';
import Product from './Product';

const Content = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const loadProducts = async() =>{
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data)
        }
        loadProducts();
    },[])




    useEffect(()=>{
        const storedCart = getShoppingCart();

        const savedProduct = []
        // step 1: get id
        for(const id in storedCart){
            // step 2 : get product by using id
            const addedProduct = products.find(product => product.id === id);

            // step - 3 : set quantity
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
            }
            // step - 4 : set product on set cart

            savedProduct.push(addedProduct)

            // console.log(addedProduct)
        }
        setCart(savedProduct)


    },[products])










    const handleProduct = (product)=>{
        // const newCart = [...cart,product]
        // console.log(newCart);
        // setCart(newCart);
        let newCart = [];

        const exitsProduct = products.find(pd => pd.id === product.id)
        if(!exitsProduct){
            product.quantity = 1;
            newCart = [...cart,product]
        }else{
            exitsProduct.quantity = exitsProduct.quantity + 1
            const remainingProduct = cart.filter(pd => pd.id !== product.id)
            newCart = [...remainingProduct,exitsProduct]
        }

        addToDb(product.id)
    }
    return (
        <main className="my-20 ">
            <section className="grid md:grid-cols-[4fr,1fr] gap-5">
                <div className="grid order-2 md:order-none md:grid-cols-3 gap-x-10 gap-y-20">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleProduct={handleProduct}
                            />)
                    }
                </div>
                <div className="">
                    <Cart cart={cart}/>
                </div>
            </section>
        </main>
    );
}

export default Content;
