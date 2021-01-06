import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { SignUpButton } from './SignUpButton';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import { withAuth0 } from '@auth0/auth0-react';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        const prevClicked = !this.state.clicked
        this.setState({ clicked: prevClicked });
    };

    handleAction = (action) => {
        const { loginWithRedirect, logout } = this.props.auth0;
        if (action === 'SIGN_IN') {
            loginWithRedirect();
        } else if (action === 'SIGN_OUT') {
            logout({ returnTo: window.location.origin });
        }
    };

    handleMobileLink = (index, action) => {
        scroll.scrollTo(MenuItems[index].path);
        this.handleAction(action);
        this.setState({ clicked: !this.state.clicked });
    };

    handleDesktopLink = (action) => {
        this.handleAction(action);
    };

    handleLogo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <nav className="NavbarItems">
                <div>
                    <img 
                        src= "https://i.ibb.co/v31vN6r/Whats-App-Image-2021-01-05-at-14-11-10.jpg" 
                        heigth="50px" 
                        alt="logo"
                        onClick={this.handleLogo} 
                    />

                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i
                        className={
                            this.state.clicked ? 'fas fa-times' : 'fas fa-bars'
                        }
                    ></i>
                </div>

                {this.state.clicked ? (
                    <ul className="nav-menu active">
                        {MenuItems.map((item, index) => {
                            let showItem =
                                (!isAuthenticated &&
                                    item.action === 'SIGN_IN') ||
                                (isAuthenticated &&
                                    item.action === 'SIGN_OUT') ||
                                item.action == null;
                            return (
                                showItem && (
                                    <li key={index}>
                                        <Link
                                            onClick={() =>
                                                this.handleMobileLink(
                                                    index,
                                                    item.action
                                                )
                                            }
                                            // onClick={this.handleClick}
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
                            );
                        })}
                    </ul>
                ) : (
                    <ul className={'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            let showItem =
                                (!isAuthenticated &&
                                    item.action === 'SIGN_IN') ||
                                (isAuthenticated &&
                                    item.action === 'SIGN_OUT') ||
                                item.action == null;
                            return (
                                showItem && (
                                    <li key={index}>
                                        <Link
                                            onClick={() =>
                                                this.handleDesktopLink(
                                                    item.action
                                                )
                                            }
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
                            );
                        })}
                    </ul>
                )}
                <SignUpButton>Sign Up</SignUpButton>
            </nav>
        );
    }
}

export default withAuth0(Navbar);
