import React from 'react'

export default function ProductCard({props}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md">
      <h2 className='font-bold'>{props.name}</h2>
      <p className='text-green-600 font-bold'>{props.price}</p>
      <p>
        재고: 
        <span className={props.inStock ? "text-green-600" : "text-red-600"}>
            {props.inStock ? "재고있음" : "품절"}
        </span>
      </p>
      <p>평점: ⭐️ {props.rating}</p>
      <div>
          {props.tags.map((tag) => {
            return(
              <span
                  className="text-xs bg-blue-100 text-blue-600 rounded-full p-1 m-1">
                  {tag}
              </span>
            )
          })}
      </div>
    </div>
  )
}
