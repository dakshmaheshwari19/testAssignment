import React from 'react'
import { GoChevronDown } from 'react-icons/go'

export const Footer = () => {
  return (
    <>
    <div className="footerContainer">
      <div className="categories">
      <h4>CATEGORIES</h4>
        <div className="item"><a href="#" >Hosting</a></div>
        <div className="item"><a href="#" >Data Center</a></div>
        <div className="item"><a href="#" >Web Builder</a></div>
        <div className="item"><a href="#" >Robotic-Automation</a></div>
      </div>
      <div className="contact">
        <h4>CONTACT</h4>
        <div className="item"><a href="#" >Contact</a></div>
        <div className="item"><a href="#" >Privacy policy</a></div>
        <div className="item"><a href="#" >terms of service</a></div>
        <div className="item"><a href="#" >categories</a></div>
        <div className="item"><a href="#" >about</a></div>
      </div>
      <div className="item">
        <a href="#">united states <GoChevronDown />  </a>
      </div>
    </div>
    </>
  )
}
