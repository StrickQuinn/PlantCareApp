import React, { Component } from 'react'
import NavBar from './NavBar.jsx'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Plant Care Log</h1>
                <NavBar />
            </header>
        )
    }
}
