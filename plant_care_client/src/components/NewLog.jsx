import React, { Component } from 'react'

const baseURL = 'http://localhost:8000/api/v1/plants/'

export default class NewLog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            com_name: "",
            sci_name: "",
            date: "",
            location: "",
            moisture: "",
            temperature: "",
            soil: "",
            pest: "",
            notes: "",
            image: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ 
            [e.target.id]: this.handleChange.bind(this)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(baseURL, {
            method:"POST",
            body: JSON.stringify({
                id: this.state.id,
                com_name: this.state.com_name,
                sci_name: this.sci_name,
                date: this.state.date,
                location: this.state.location,
                moisture: this.state.moisture,
                temperature: this.state.moisture,
                temperature: this.state.temperature,
                soil: this.state.soil,
                pest: this.state.pest,
                notes: this.state.notes,
                image: this.state.image
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.props.addPlant(data);
            this.setState({
                id: "",
                com_name: "",
                sci_name: "",
                date: "",
                location: "",
                moisture: "",
                temperature: "",
                soil: "",
                pest: "",
                notes: "",
                image: ""
            })
        })        
    }

    render() {
        return (
            <form className="newform" onSubmit={ this.handleSubmit }>
                <h2>Plant Log</h2>
                <table className="newform">
                    <tbody>
                        <tr>
                            <th className="label"><label htmlFor="date"> Date(YYYYMMDD):</label></th>
                            <td><input type="text" name="date" id="date" value={ this.state.date } placeholder="YYYYMMDD" onChange={ this.handleChange }/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="com_name">Common Name:</label></th>
                            <td><input type="text" name="com_name" id="com_name" value={ this.state.com_name } placeholder="ex. Spider Plant" onChange={ this.handleChange }/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="sci_name">Scientific Name:</label></th>
                            <td><input type="text" name="sci_name" id="sci_name" value={ this.state.sci_name } placeholder="ex. Chlorphytum comosum" onChange={ this.handleChange }/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="location">Location:</label></th>
                            <td><input type="text" name="location" id="location" value={ this.state.location } placeholder="ex. SW window" onChange={ this.handleChange } /></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="moisture">Moisture:</label></th>
                            <td><input type="text" name="moisture" id="moisture" value={ this.state.moisture } placeholder="ex. 2x/mo" onChange={ this.handleChange } /></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="temperature">Temperature:</label></th>
                            <td><input type="text" name="temperature" id={ this.state.temperature } value="temperature" placeholder="ex. 65°F" onChange={ this.handleChange } /></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="soil">Soil:</label></th>
                            <td><input type="text" name="soil" id="soil" value={ this.state.soil } placeholder="soil mix used" onChange={ this.handleChange } /></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="">Pest:</label></th>
                            <td><input type="text" name="pest" id="pest" value={ this.state.pest } placeholder="Pest? Treatment?" onChange={ this.handleChange }/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="notes">Notes:</label></th>
                            <td><input type="text" name="notes" id="notes" value={ this.state.notes } placeholder="ex. 2 plants in prop" onChange={ this.handleChange }/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="image">Image Link:</label></th>
                            <td><input type="text" name="image" id="image" value={ this.state.image } placeholder="image link here"/></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Add New Entry" />
            </form>
        )
    }
}
