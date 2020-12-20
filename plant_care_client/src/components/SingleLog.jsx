import React, { Component } from 'react'

export default class SingleLog extends Component {
    render() {
        return (
            <div>
                <ul key={this.props.plant.id} onClick={() => this.showSingleView( this.props.plant.id )}>
                    <li>{ this.props.plant.date }</li>
                    <li>{ this.props.plant.com_name }</li>
                    <li>{ this.props.plant.sci_name }</li>
                </ul>
            </div>
        )
    }
}
