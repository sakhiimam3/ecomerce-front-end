import React from 'react'
import { Card } from 'react-bootstrap'
import Styles from "../styles/homeBlog.module.scss"
const BlogsItems = () => {
  return (
    <>
           <Card className={Styles.blog_cards}>
                <Card.Title className={Styles.card_title}>
                          Title
                </Card.Title>
                  <Card.Body className={Styles.card_body}>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam harum quas? Accusamus!</p>
                  </Card.Body>
                  <Card.Footer  className='d-flex justify-content-end text-secondary'>
                        <span>Admin  23.08.2022</span>
                  </Card.Footer>
           </Card>
    </>
  )
}

export default BlogsItems