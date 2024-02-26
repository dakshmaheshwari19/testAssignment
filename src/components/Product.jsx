import React, { useState } from 'react'
import image from "../assets/svg/sample-image.png"
import fourStar from "../assets/svg/4star.png"
import fiveStar from "../assets/svg/5star.png"
import { GoCheck, GoChevronDown, GoChevronUp, GoTrophy } from "react-icons/go";



export const Product = (props) => {
    const [showMore, setShowMore] = useState(false);


    return (
        <>
            <div className={`productContainer ${showMore ? 'expanded' : ''}`}>
                <div className="block-1">
                    {
                        (!props.product.Tag == "" ) &&
                        (<div className="bestLabel">
                           <GoTrophy /> Best {props.product.Tag}
                        </div>)
                    }
                    <div className="serialNumber">
                        {props.product.sno}
                    </div>


                    <img src={image} alt="An image related to webpages" />
                    <div className="nameOfProduct">
                        {props.product.name}
                    </div>
                </div>
                <div className="block-2">
                    <div style={{paddingBottom:"10px",fontWeight:"400"}}>
                        <b>{props.product.title}</b>- {props.product.description}
                    </div>
                    <b style={{ color: "#2C384A" }}>Main Highlights</b>
                    {!showMore ?
                        (<div className='highlights'>
                            {props.product.highlights}
                        </div>)
                        : <>

                            <div className="highlights rating" >
                                {props.product.highlightRating.map((item, index) =>
                                (
                                    <div key={index}>
                                        <div className="list-item" >
                                            <div className="list-box" >
                                                {item.rating}
                                            </div>
                                            <div className="list-type" >
                                                {item.type}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="advantages">
                                <div style={{ color: "#2C384A" }}>Why we love it</div>
                                {props.product.advantages.map((item, index) => (
                                    <div className="adv-list" key={index}>
                                        <div className="tick">
                                            <GoCheck />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>



                        </>}
                    <div className='showMore' onClick={() => { setShowMore(!showMore) }}>
                        {showMore ? <><div>Show less</div><GoChevronUp /> </> : <><div>Show more</div><GoChevronDown /> </>}
                    </div>
                </div>
                <div className="block-3">
                    <div className="ratingBox">
                        <div id="rating">
                            {props.product.rating[0]}
                        </div>
                        <div id="ratingText">
                            {props.product.rating[1]}
                        </div>
                        {
                            props.product.rating[0] >= 9.5 ? (
                                <div className="stars">
                                    <img src={fiveStar} alt="" />
                                </div>
                            ) : (
                                <div className="stars">
                                    <img src={fourStar} alt="" />
                                </div>
                            )
                        }
                    </div>
                    <div className="view-btn">
                        View
                    </div>
                </div>
            </div >
        </>
    )
}
