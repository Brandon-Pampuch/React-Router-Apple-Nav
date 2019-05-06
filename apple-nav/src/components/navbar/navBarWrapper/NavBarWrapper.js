import React from 'react'
import NavLink from './NavLink'
import NavWrapperStyle from './NavWrapperStyle'

const NavBarWrapper = (props)=>{

    return(
        <NavWrapperStyle>
            {props.navTags.map((tag)=>{
                return <NavLink tag={tag} /> 
            })}
        </NavWrapperStyle>
    )
}

export default NavBarWrapper