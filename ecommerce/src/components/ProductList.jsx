import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ items }) {
  console.log(items)
  return (
    <div className='px-2 sm:px-8 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6'>
      {
        
        items.map((item) => {
          // console.log(item.thumbnail); // this shows if it's missing or invalid
          return (
            <ProductCard
              key={item.id}
              img={item.thumbnail}
              title={item.title}
              desc={item.description}
              category={item.category}
              price={item.price}
            />
          );
        })
      }
    </div>
  )
}

export default ProductList