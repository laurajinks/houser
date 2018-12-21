import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateState, updateZipCode} from '../ducks/reducer'
import axios from 'axios';


class WizardOne extends Component {
    constructor (props) {
        super (props);

        this.addHouse = this.addHouse.bind(this);
    }

    addHouse () {
        axios.post('/api/houses', {name: this.props.name, address: this.props.address, 
        city: this.props.city, stateaddress: this.props.stateaddress, zipcode: this.props.zipcode})
    }

    render () {
        return (
            <div>
                <h1>Add new Home</h1>
                <p>Property Name:</p>
                <input placeholder="House name" type="text" onChange={(e) => this.props.updateName(e.target.value)}/>
                <p>Address:</p>
                <input placeholder="Address" type="text" onChange={(e) => this.props.updateAddress(e.target.value)}/>
                <p>City:</p>
                <input placeholder="City" type="text" onChange={(e) => this.props.updateCity(e.target.value)}/>
                <p>State:</p>
                <input placeholder="State" type="text" onChange={(e) => this.props.updateState(e.target.value)}/>
                <p>Zip Code:</p>
                <input placeholder="Zip Code" type="text" onChange={(e) => this.props.updateZipCode(e.target.value)}/>
                <Link to='/wizardtwo'><button>Next >></button></Link>
                <Link to='/'><button onClick={() => this.addHouse()}>Add +</button></Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { name, address, city, stateaddress, zipcode } = state;
    return {
        name, address, city, stateaddress, zipcode
    }
}

export default connect(mapStateToProps, { updateName, updateAddress,
    updateCity, updateState, updateZipCode })(WizardOne);