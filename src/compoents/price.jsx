import React from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Price = () => {
    const [price,setPrice]=useState([1,1000])
  return (
    <>
       <section className='my-4'>
       <h5 className="text-capitalize text-secondary mb-3">Price</h5>
       <Slider min={1} max={1000} defaultValue={[1,1000]} marks={{1:"$1",1000:'$1000'}}/>
       </section>
    </>
  )
}

export default Price