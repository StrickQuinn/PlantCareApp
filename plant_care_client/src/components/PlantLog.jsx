import React, { Component } from 'react'

export default class PlantLog extends Component {
    render() {
        return (
            <table className="plantlog">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                    </tr>
                </thead>
                { this.props.plants.map(plant => {
                    return (
                        <tbody>
                            <tr key={ plant.id }>
                                <td>{ plant.date }</td>
                                <td>{ plant.com_name }</td>
                                <td>{ plant.sci_name }</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        )
    }
}
