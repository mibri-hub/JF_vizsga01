import React from 'react'
import {products} from '../data'
import { SingleProduct } from './SingleProduct'

export const Products = () => {
  console.log(products);

  return (
    <div className="container" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
    <div className='d-flex justify-content-center gap-3 flex-wrap bg-light' >
      <h3 className='w-100 m-2 text-primary' >Our Products</h3>
      {products.map(obj=><SingleProduct key={obj.id} {...obj}/>)}
    </div>
    </div>
  )
}

