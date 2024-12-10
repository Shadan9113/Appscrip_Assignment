import React from 'react'
import {assets} from '../assets/assets'
import './Navbar.css'


function Navbar() {
  return (
    <div>
        <div className="nav-container">
        <div className="company-logo"><img src={assets.logo} alt="company-logo" /></div>
        <div className="name-logo"><img src={assets.name} alt="" /></div>
        <div className="menu">
            <div className="search"><img src={assets.search} alt="" /></div>
            <div className="heart"><img src={assets.heart} alt="" /></div>
            <div className="bag"><img src={assets.shopping} alt="" /></div>
            <div className="profile"><img src={assets.profile} alt="" /></div>
            <div className="language"><img src={assets.language} alt="" /></div>
        </div>

        </div>
        <div className="nav-container-2">
            <span>SHOP</span>
            <span>SKILLS</span>
            <span>STORIES</span>
            <span>ABOUT</span>
            <span>CONTACT US</span>
        </div>
    </div>
  )
}

export default Navbar