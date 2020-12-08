import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { SignUpButton } from "./SignUpButton"
// import { Link } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
// import Dashboard from '../Dashboard'
// import { Link } from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    // handleLink = (index) => {
    //     scroll.scrollTo(MenuItems[index].path)
    // }

    render() {
        return(            
            <nav className="NavbarItems">
               
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

            {
                this.state.clicked 
                ?   <ul className='nav-menu active'>
                        {MenuItems.map((item, index) => {
                            return (           
                                    
                                <li key={index}>
                                    <Link 
                                        // onClick={() =>this.handleLink}
                                        // onClick={this.handleLink}
                                        activeClass="active" 
                                        to={item.path} 
                                        spy={true} 
                                        smooth={true}
                                        offset={-80} 
                                        duration={1000}
                                        className={item.cName}                                    
                                    >
                                        {item.title}
                                    </Link>                                    
                                </li>                                                        
                                
                            )
                        })}
                    </ul>      
                :   <ul className={'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link 
                                        activeClass="active" 
                                        to={item.id} 
                                        spy={true} 
                                        smooth={true}
                                        offset={-80} 
                                        duration={1000}
                                        className={item.cName}                                    
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            
                        )
                    })}
                </ul>  
            }                  
                <SignUpButton>Sign Up</SignUpButton>
            </nav>  
            
        )
    }
}

export default Navbar
