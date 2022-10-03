import React from 'react'
import Styles from "../styles/search.module.scss"
const Search = () => {
  return (
    <>
       <div className={Styles.search}>
         <h5>search</h5>
           <input type="text" placeholder='Search'  />
       </div>
    </>
  )
}

export default Search