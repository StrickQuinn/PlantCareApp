import React, { Component } from 'react'
import SingleLog from './SingleLog.jsx'
import SingleLogView from './SingleLogView.jsx'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


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
                        <Router>
                            <div>
                                <ul key={plant.id} >
                                    <li><Link to={"/view/" + `${plant.id}` }>{ plant.date }</Link></li>
                                    <li>{ plant.com_name }</li>
                                    <li>{ plant.sci_name }</li>
                                </ul>
                                <Switch>
                                    <Route path={"/view/" + `${plant.id}`} exact component={() => (
                                        <SingleLogView plant ={ plant } key={ plant.id } showSingleView={ this.showSingleView }/> 
                                    )} />
                                </Switch>
                            </div>
                        </Router>
            )
                }) }
                
            </div>
        )
    }
}
