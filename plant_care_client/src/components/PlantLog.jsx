import React, { Component } from 'react'

export default class PlantLog extends Component {
    render() {
        return (
            <div>
            { this.props.plants.map(plant => {
                return (
                    <ul>
                    <li key={plant.id}>{plant.date}</li>
                    <li key={plant.id}>{plant.com_name}</li>
                    <li key={plant.id}>{plant.sci_name}</li>
                    </ul>
                )
            })}
            </div>
        )
    }
}
