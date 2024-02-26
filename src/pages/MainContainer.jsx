import React from 'react'
import { products } from '../services/data'
import { relatedProducts } from '../services/data'
import { Product } from '../components/Product'
import { Suggested } from '../components/Suggested'
import { GoCheckCircle, GoChevronDown, GoInfo } from 'react-icons/go'
export const MainContainer = () => {

    return (
        <>
            <div className="main-container">
                <div className="main-heading">
                    Best Website builders in the US
                </div>
                <hr />
                <div className="statusBar">
                    <div className='center-it '>
                        <GoCheckCircle /> last updated - February 22,2020  <GoInfo /> Advertising Disclosure
                    </div>
                    <div className='center-it'>
                    Top relevant <GoChevronDown /> 
                    </div>
                </div>
                <hr />
                <div className="submenu">
                    <a className="submenu-links">Tools</a>
                    <a className="submenu-links">AWS Builder</a>
                    <a className="submenu-links">Start build</a>
                    <a className="submenu-links">build supplies</a>
                    <a className="submenu-links">tooling</a>
                    <a className="submenu-links">blue hosting</a>
                </div>
                <div className="route">
                    Home &gt; <div> Hosting for all </div> &gt; Hosting &gt; Hosting6 &gt; Hosting5
                </div>

                <div className="products">
                    {
                        products.map((product) => {
                            return (<Product product={product} key={product.sno} />)
                        })
                    }
                </div>
                <div className="sub-heading">
                    Related deals you might like for
                </div>
                <div className="relatedProducts">
                    {
                        relatedProducts.map((product) => {
                            return (<Suggested product={product} key={product.sno} />)
                        })
                    }
                </div>
                <div className="signup-section">
                   <div className="text">
                   Sign up and get exclusive special deals
                   </div>
                   <div className="signupBox">
                    <div className="input">
                     <input type="text"  />
                    </div>
                    <div className="signup-btn">
                        Sign Up
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}
