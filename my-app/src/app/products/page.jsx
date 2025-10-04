import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="flex gap-4">
      <Link href="/products/laptops">Laptops</Link>
      <Link href="/products/phones">Phones</Link>
    </div>
  );
};

export default Products;
