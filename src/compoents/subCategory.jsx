import React from 'react'
const SubCategory = () => {
  return (
    <>             <section>
                   <h5 className="text-capitalize text-secondary mb-3 " >subcategory</h5>
                  <div className="mb-3 d-flex justify-content-between">
                        <label className='text-secondary text-uppercase '>dresses</label>
                    
                        <input type="checkbox"/>
                    </div>
                    <hr className='text-light' />
                    <div className="mb-3 d-flex justify-content-between">
                        <label className='text-secondary text-uppercase'>jens</label>
                        <input type="checkbox"/>
                    </div>
                    <hr className='text-light' />
                    <div className="mb-3 d-flex justify-content-between">
                        <label className='text-secondary text-uppercase'> t-shirt</label>
                        <input type="checkbox"/>
                    </div>
                    <hr className='text-light' />
                    </section>
       
    </>
  )
}

export default SubCategory