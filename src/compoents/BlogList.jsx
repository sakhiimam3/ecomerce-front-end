import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import BlogListItem from './BlogListItem'
import Styles from "../styles/homeBlog.module.scss"
import { IoEyeSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
const BlogList = () => {
  return (
    <>
     <Container className={Styles.HomeBlog}>
              <div className={Styles.blog_Heading}>
                <h1>Blogs</h1>
              </div>
            <Row>
                {["data","data","data","data","data","data"].map((item,index)=>(
                        <Col className='mt-5' sm={6}  md={4} key={index}>
                                <BlogListItem  num={index}/>  
                          </Col>
                 ))}
                   <div className={Styles.viewmore}>
                      <span> <IoEyeSharp /> <NavLink>view more</NavLink></span> 
                   </div>
            </Row>
        </Container>
    
    </>
  )
}

export default BlogList