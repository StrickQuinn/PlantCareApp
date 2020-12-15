import React, { Component } from 'react'

export default class PlantLog extends Component {
    render() {
        return (
            <div>
                <ul>
                { this.props.plants.map(plant => {
                    return (
                        <li key={plant.id}>{plant.com_name}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}
