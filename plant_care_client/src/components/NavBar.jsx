import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <li>Home</li>
                <li>My Profile</li>
                <li>Plant Care Log</li>
                <li>Add New Care Log</li>
            </ul>
        )
    }
}
