import React, { useEffect, useState } from 'react';
import Product from './Product';

const Content = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const loadProducts = async() =>{
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data)

        }
        loadProducts();
    },[])
    return (
        <main className="my-20 ">
            <section className="grid grid-cols-[4fr,1fr]">
                <div className="grid grid-cols-3 gap-x-10 gap-y-20">
                    {
                        products.map(product => <Product key={product.id} product={product} />)
                    }
                </div>
                <div>
                    <h1>orders summary</h1>
                </div>
            </section>
        </main>
    );
}

export default Content;
