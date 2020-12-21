import React, { Component } from 'react'
import SingleLog from './SingleLog.jsx'
import SingleLogView from './SingleLogView.jsx'
import { Link } from 'react-router-dom'

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
                        <ul key={plant.id} >
                            <li><Link to={"/log/" + `${plant.id}` }>{ plant.date }</Link></li>
                            <li>{ plant.com_name }</li>
                            <li>{ plant.sci_name }</li>
                        </ul>
                    )
                })}
                { this.props.plants.map((plant) => {
                    return (
                        <SingleLogView plant ={ plant } key={ plant.id } showSingleView={ this.showSingleView }/>
                    )
                })}
            </div>
        )
    }
}
