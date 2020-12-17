import React, { Component } from 'react'

export default class SingleLogView extends Component {
    render() {
        return (
            <div>
                <h2>SingleLogView</h2>
                <ul key={ this.props.plant.id }>
                    <li>Date of Entry: { this.props.plant.date }</li>
                    <li>Name of Plant: { this.props.plant.com_name }</li>
                </ul>
            </div>
        )
    }
}
