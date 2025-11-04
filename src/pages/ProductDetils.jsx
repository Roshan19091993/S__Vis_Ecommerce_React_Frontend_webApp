 import React from "react";
 import { useParams } from "react-router-dom";
 import { useSelector } from "react-redux";

 const ProductDetail = () => {
   const { id } = useParams();
  const product = useSelector((state) =>
     state.product.products.find((p) => p.id === parseInt(id))
   );

       if (!product) return <p>Product not found</p>;

       return (
          <div className="container py-4">
       <h2>{product.name}</h2>
       <img src={product.image} alt={product.name} className="img-fluid" />
       <p>{product.description}</p>
          <h5>Price: ${product.price}</h5>
       </div>
         );
       };

     export default ProductDetail;


