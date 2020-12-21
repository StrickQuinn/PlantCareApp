import React, { Component } from 'react'
import SingleLogView from './SingleLogView.jsx'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";


export default class PlantLog extends Component {
    render() {
        return (
            <div>
                <h2>Single View</h2>
                { this.props.plants.map((plant) => {
                    return (
                        <Router>
                            <div>
                                <Switch>
                                    <Route path={"/view/" + `${plant.id}`} exact component={() => (
                                        <SingleLogView plant ={ plant } key={ plant.id } showSingleView={ this.showSingleView }/> 
                                    )} />
                                </Switch>
                            </div>
                        </Router>
                    )
                })}
            </div>
        )
    }
}
