import React from "react";
import Link from "next/link";
import Image from "next/image";
const Product = ({ product: { images, id, name, price } }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="product-card">
          <Image
            src={images && images[0]?.link}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price"> $ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
