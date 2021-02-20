import React from 'react'
import './Navbar.css'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = () => {
    return (
        <div className="container">
            <Nav className="navbar__container">
                <NavLink to="/home" className="nav__logo"><img width="40px" height="40px" src='https://avatars.githubusercontent.com/u/76575883?s=400&u=4d9609133335ea9155375d8b270c47421d4b8614&v=4' alt="logo"/>Diki Yonanda</NavLink>
                <Bars />
                <span></span>
                <NavMenu className="nav__page">
                 <NavLink className="nav__menu" to="/Course" className="course" activeStyle>
                        Kelas
                    </NavLink>
                    <NavLink className="nav__menu" to="/Book" activeStyle>
                       Buku
                    </NavLink>
                    <NavLink className="nav__menu" to="/Blog" activeStyle>
                       Blog
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to="/sign-in" >Login</NavLink>
                    <NavBtnLink to="/sign-up" > Get Started </NavBtnLink>
                </NavBtn>
            </Nav>
            
            
        </div>

    )
}

export default Navbar
