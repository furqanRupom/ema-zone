import React from 'react';

const Product = (props) => {
    const {id,price,seller,category,img} = props.product
    return (
        <div>
           <img src={img}alt="" />
        </div>
    );
};

export default Product;