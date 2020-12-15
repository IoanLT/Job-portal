import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { SignUpButton } from './SignUpButton';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import { withAuth0 } from '@auth0/auth0-react';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
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

    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <nav className="NavbarItems">
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
