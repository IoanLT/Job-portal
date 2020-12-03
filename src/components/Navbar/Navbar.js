import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { SignInButton } from "./SignInButton"
// import styled from 'styled-components';
import { Link } from 'react-scroll';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(            
            <nav className="NavbarItems">
               
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link 
                                    activeClass="active" 
                                    to={item.id} 
                                    spy={true} 
                                    smooth={true}
                                    offset={-190} 
                                    duration={1000}
                                    className={item.cName}
                                >
                                    {item.title}
                                </Link>
                            </li>
                            
                        )
                    })}
                </ul>                    
                <SignInButton>Sign Up</SignInButton>
            </nav>  
            
        )
    }
}

export default Navbar
