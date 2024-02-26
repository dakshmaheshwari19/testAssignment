import React from 'react'
import image from '../assets/svg/sample-image.png'
export const Suggested = (props) => {
  return (
    <>
      <div className="suggested-card">
        <img src={image} alt="" />
        <div className="card-details">
          <div className="card-tags">
            {props.product.Tag.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div id="name">
            {props.product.name}
          </div>
          <div id="card-title">
            {props.product.title}
          </div>
          <div className="card-pricing">
            <div id="card-price">
              {'$'}{props.product.price.discounted}
            </div>
            <div id="card-mrp">
              {'$'}{props.product.price.MRP}
            </div>
            <div id="card-discount">
              {'('}{props.product.discount}% Off{')'}
            </div>
          </div>

        </div>
        <div className="view-btn">
          View Deal
        </div>
      </div>
    </>
  )
}
