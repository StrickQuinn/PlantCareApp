import React, { Component } from 'react'
import SingleLog from './SingleLog.jsx'
import SingleLogView from './SingleLogView.jsx'

export default class PlantLog extends Component {
    render() {
        return (
            <div className="plantlog">
                <h2>Plant Log</h2>
                <ul>
                    <li>Date</li>
                    <li>Common Name</li>
                    <li>Scientific Name</li>
                </ul>
                { this.props.plants.map((plant) => {
                    return (
                        <SingleLog plant={ plant } key={plant.id} showSingleView={ this.props.showSingleView }/>
                        )
                })}
                { this.props.plants.map((plant) => {
                    return (
                        <SingleLogView plant ={ plant } key={ plant.id } showSingleView={ this.props.showSingleView }/>
                    )
                })}
            </div>
        )
    }
}
