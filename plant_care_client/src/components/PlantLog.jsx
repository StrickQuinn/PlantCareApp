import React, { Component } from 'react'
import SingleLog from './SingleLog.jsx'

export default class PlantLog extends Component {
    render() {
        return (
            <div className="plantlog">
                    <ul>
                        <li>Date</li>
                        <li>Common Name</li>
                        <li>Scientific Name</li>
                    </ul>
                { this.props.plants.map((plant) => {
                    return (
                        <SingleLog plant={ plant } key={plant.id} />
                    )
                })}
            </div>
        )
    }
}
