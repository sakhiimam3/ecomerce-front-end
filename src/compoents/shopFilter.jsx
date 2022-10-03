import React from 'react'
import Category from './category'
import Price from './price'
import Rating from './rating'
import Search from './search'
import SubCategory from './subCategory'

const ShopFilter = () => {
  return (
    <>
       <section className='text-light'>
                 <div>
                 <h4 className='text-uppercase'>Filters</h4>
                 </div>
                 <div>
                      <Search />      
                 </div>
                 <div>
                         <Category />
                 </div>
                 <div>
                        <SubCategory />
                 </div>
                 <div>
                        <Price />
                 </div>
                 <div>
                   <Rating />
                 </div>
       </section>
    </>
  )
}

export default ShopFilter