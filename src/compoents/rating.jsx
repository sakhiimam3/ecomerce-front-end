import React from 'react'
import Styles from "../styles/rating.module.scss"
import {AiFillStar} from "react-icons/ai"
const Rating = () => {
    return (
        <>
            <div className={
                Styles.Rating
            }>
                <h5>Rating</h5>
                <button>1 &nbsp;
                    <AiFillStar/>
                </button>
                <button>2 &nbsp;
                    <AiFillStar/></button>
                <button>3 &nbsp;
                    <AiFillStar/></button>
                <button>4 &nbsp;
                    <AiFillStar/></button>
                <button>5 &nbsp;
                    <AiFillStar/></button>
            </div>
        </>
    )
}

export default Rating
