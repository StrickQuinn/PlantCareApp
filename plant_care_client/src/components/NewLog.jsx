import React, { Component } from 'react'

export default class NewLog extends Component {
    render() {
        return (
            <form className="newform">
                <h2>Plant Log</h2>
                <table className="newform">
                    <tbody>
                        <tr>
                            <th className="label"><label htmlFor="date"> Date(YYYYMMDD):</label></th>
                            <td><input type="text" name="date" id="date" value="" placeholder="YYYYMMDD"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="com_name">Common Name:</label></th>
                            <td><input type="text" name="com_name" id="com_name" value="" placeholder="ex. Spider Plant"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="sci_name">Scientific Name:</label></th>
                            <td><input type="text" name="sci_name" id="sci_name" value="" placeholder="ex. Chlorphytum comosum"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="location">Location:</label></th>
                            <td><input type="text" name="location" id="location" value="" placeholder="ex. SW window"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="moisture">Moisture:</label></th>
                            <td><input type="text" name="moisture" id="moisture" value="" placeholder="ex. 2x/mo"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="temperature">Temperature:</label></th>
                            <td><input type="text" name="temperature" id="temperature" value="" placeholder="ex. 65°F"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="soil">Soil:</label></th>
                            <td><input type="text" name="soil" id="soil" value="" placeholder="soil mix used"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="">Pest:</label></th>
                            <td><input type="text" name="pest" id="pest" value="" placeholder="Pest? Treatment?"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="notes">Notes:</label></th>
                            <td><input type="text" name="notes" id="notes" value="" placeholder="ex. 2 plants in prop"/></td>
                        </tr>
                        <tr>
                            <th className="label"><label htmlFor="image">Image Link:</label></th>
                            <td><input type="text" name="image" id="image" value="" placeholder="image link here"/></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Add New Entry" />
            </form>
        )
    }
}
