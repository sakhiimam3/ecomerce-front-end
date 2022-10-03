import React from 'react'
import Styles from "../styles/category.module.scss"
const Category = () => {
  return (
    <>
       <div className={Styles.Category}>
       <h5>category</h5>
          <button>all </button>  <button>men</button> <button>women</button> <button>kids</button>
       </div>
    </>
  )
}

export default Category