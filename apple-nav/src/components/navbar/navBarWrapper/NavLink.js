import React from 'react'
import { Link } from 'react-router-dom'
import NavLinkStyle from './NavLinkStyle'

const NavLink = (props) =>{

    return <Link><NavLinkStyle>{props.tag}</NavLinkStyle></Link>
    
}

export default NavLink