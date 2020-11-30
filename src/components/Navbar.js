import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Navbar() {
    return (        
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Upload CV</Link>
                        </li>
                        <li>
                            <Link to="/users">Sign in</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>                
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </header>
        </Router>
        
    )
}
