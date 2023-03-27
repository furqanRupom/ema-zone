import React from "react";

const Product = (props) => {
  const { name, price, seller, category, img ,ratings} = props.product;
  return (
    <>
      <div className=" px-2 pt-2 pb-8 border border-slate-400 rounded-md">
        <img className="rounded-md" src={img} alt="" />
        <div className="py-5">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>
            price : <span className="font-semibold">{price}</span>
          </p>
          <div className="pt-5">
                <p>Manufacturer : {seller}</p>
                <p>ratings : {ratings} star</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Product;
