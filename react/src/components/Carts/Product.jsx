import React from 'react'

export default function Product({products}) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
        <h2>{products.title}</h2>
        <p>{products.price}</p>
        <p>{products.quantity}</p>
        <p>{products.total}</p>
        <img src={products.thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  )
}
