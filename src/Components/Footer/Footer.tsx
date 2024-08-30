import React from 'react'
import './Footer.scss'
import { FaDribbbleSquare , FaInstagramSquare , FaTwitterSquare } from 'react-icons/fa';
import {BsLinkedin} from "react-icons/bs";



const Footer = () => {
  return (
    <div className='footer' >
        <div></div>
        <span>© Hamza Dev Admin Dashboard</span>
        <div className='links'>
            <BsLinkedin className="icon" />
            <FaDribbbleSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />

        </div>

    </div>
  )
}

export default Footer