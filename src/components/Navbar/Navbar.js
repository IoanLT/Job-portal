import React, { Component } from 'react'
import './Navbar.css'
import NavbarItems from './NavbarItems'
import SignInButton from './SignInButton'

export default class Navbar extends Component {
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
                {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul> */}
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* <SignInButton>Sign In</SignInButton> */}
            </nav>
        )
    }
}

