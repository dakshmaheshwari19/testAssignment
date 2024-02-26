import React, { useState,useRef,useEffect } from 'react'
import { Search } from '../assets/svg/search'
import { GoListUnordered } from 'react-icons/go';

export const Header = () => {
  const [searchbar,setSearchbar] =useState(false)
  const containerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
       if (containerRef.current && !containerRef.current.contains(event.target)) {
         setSearchbar(false); 
       }
     }
     document.addEventListener('click', handleClickOutside);
     return () => {
       document.removeEventListener('click', handleClickOutside);
     };
   }, []);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => { 
    // Close the menu by default when the component mounts
    setShowMenu(true);
    document.body.classList.remove('showMenu'); // Remove 'showMenu' class
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [])
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('showMenu', showMenu);
  }
  return (
    <>
    <div className="header-container">

    <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        <GoListUnordered />
        <div className={` ${showMenu?'showMobMenu':'myMobMenu'} `}>
          {/* this is mobile view navbar */}
          <a onClick={toggleMenu}  className="mobItem">Categories</a>
          <a onClick={toggleMenu}  className="mobItem">Website Builders</a>
          <a onClick={toggleMenu}   className="mobItem">Today's deals</a>
        </div>
      </div>
      
        <div className="search-bar" onClick={()=>{setSearchbar(true)}} ref={containerRef}>
        {!searchbar? <Search/> :
        <input type="text" autoFocus />
        }
        </div>
        <div className='nav'>
        
            <li>Categories</li>
            <li >Website Builders</li>
            <li >Today's deals</li>
        
        </div>

        
    </div>
    </>
  )
}
