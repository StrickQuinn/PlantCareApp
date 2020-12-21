import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SingleLogView extends Component {
    render() {
        return (
            <div>
                <h2>SingleLogView</h2>
                <ul key={ this.props.plant.id }>
                    <li>Date of Entry: { this.props.plant.date }</li>
                    <br />
                    <li>
                        { this.props.plant.com_name }
                        <br />
                        <i>{ this.props.plant.sci_name }</i>
                        <br />
                        <img src={ this.props.plant.image } height="300" alt=""></img>
                        <br />
                    </li>
                    <br />
                    <li> Location: { this.props.plant.location } </li>
                    <br />
                    <li> Water/Humidity: { this.props.plant.moisture } </li>
                    <br />
                    <li> Temp Hardy: { this.props.plant.temperature } </li>
                    <br />
                    <li> Soil Mix: { this.props.plant.soil } </li>
                    <br />
                    <li> Pest infestation? Treatment: { this.props.plant.pest } </li>
                    <br />
                    <li> Details, Extra, Notes: { this.props.plant.notes } </li>
                    <br />
                    <button>Edit</button>
                    <button>Delete</button>
                </ul>
            </div>
        )
    }
}
