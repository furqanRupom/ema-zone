import React, { useEffect, useState } from 'react';
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
    
    const handleProduct = (product)=>{
        const newCart = [...cart,product]
        console.log(newCart);
        setCart(newCart);
    }
    return (
        <main className="my-20 ">
            <section className="grid grid-cols-[4fr,1fr]">
                <div className="grid grid-cols-3 gap-x-10 gap-y-20">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleProduct={handleProduct}
                            />)
                    }
                </div>
                <div>
                    <h1>orders summary</h1>
                    <p>items Selected {cart.length}</p>
                </div>
            </section>
        </main>
    );
}

export default Content;
