import React from 'react'
import BannerImg from "../assets/images/banner.jpg"
import BannerRight from "../assets/images/banner-right.jpg"
import Styles from "../styles/Banner.module.scss"
import {Container, Row, Col} from 'react-bootstrap'
const Banner = () => {
    return (
        <>
            <div className={
                Styles.banner
            }>
                <div>
                    <img src={BannerImg}
                        alt="banner-img"/>
                </div>

                <Container className={
                    `${
                        Styles.banner_content
                    }`
                }>
                    <Row className='d-flex  justify-content-center align-items-center'>
                        <Col sm={9}
                            md={6}
                            xs={9}
                            >
                            <div className={
                                Styles.banner_text
                            }>
                                <h1>Let's buy togther</h1>
                                <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit
                                consectetur  adipisicing elit  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, nobis. adipisicing elit. Expedita, nobis.adipisicing elit. Expedita, nobis</p>
                                <button>shop now</button>
                            </div>
                        </Col>
                        <Col sm={6}
                            md={6}
                            className="d-flex justify-content-center">
                            <div className={
                                Styles.banner_img_right_div
                            }>
                                <img className='img-fluid'
                                    src={BannerRight}
                                    alt="bannerLeft"/>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>

        </>
    )
}


export default Banner
