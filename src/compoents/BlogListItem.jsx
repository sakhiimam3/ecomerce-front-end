import React from 'react'
import { Card } from 'react-bootstrap'
import Styles from "../styles/homeBlog.module.scss"
import { useNavigate } from 'react-router-dom'
const BlogListItem = (props) => {

    const Navigate=useNavigate()
  return (
    <>
     <Card className={Styles.blog_cards}>
                <Card.Title className={Styles.card_title}>
                          Title  {props.num + 1}
                </Card.Title>
                  <Card.Body className={Styles.card_body}>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam harum quas? Accusamus!</p>
                  </Card.Body>
                  <Card.Footer  className='d-flex justify-content-between text-secondary'>
                        <span>Admin  23.08.2022</span>  
                        <button onClick={()=>Navigate(`/blog/${props.num + 1}`)} className='btn btn-secondary btn-sm'>DAEATIL</button>
                  </Card.Footer>
           </Card>
    </>
  )
}

export default BlogListItem