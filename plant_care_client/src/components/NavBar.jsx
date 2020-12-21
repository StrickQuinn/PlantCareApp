import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/log">Plant Care Log</Link></li>
                <li><Link to="/add">Add New Care Log</Link></li>
                <li><Link to="">My Profile</Link></li>
            </ul>
        )
    }
}
