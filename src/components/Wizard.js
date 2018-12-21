import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updateName, updateAddress, updateCity, updateState, updateZipCode} from '../ducks/reducer'

class Wizard extends Component {
    render () {
        return (
            <div>
                <h1>Add new Home</h1>
                <p>House Name:</p>
                <input placeholder="House name" type="text" onChange={(e) => this.props.updateName(e.target.value)}/>
                <p>Address:</p>
                <input placeholder="Address" type="text" onChange={(e) => this.props.updateAddress(e.target.value)}/>
                <p>City:</p>
                <input placeholder="City" type="text" onChange={(e) => this.props.updateCity(e.target.value)}/>
                <p>State:</p>
                <input placeholder="State" type="text" onChange={(e) => this.props.updateState(e.target.value)}/>
                <p>Zip Code:</p>
                <input placeholder="Zip Code" type="text" onChange={(e) => this.props.updateZipCode(e.target.value)}/>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { name, address, city, addressState, zipCode } = state;
    return {
        name, address, city, addressState, zipCode
    }
}

export default connect(mapStateToProps, { updateName, updateAddress,
    updateCity, updateState, updateZipCode })(Wizard);