import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import House from './House'
import axios from 'axios'
const url = 'http://localhost:4000'

export default class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
            houses: []
        }
    }

    componentDidMount () {
        axios.get(`${url}/api/houses`)
        .then(response => {
            this.setState({houses: response.data});
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div>
                <div>Dashboard</div>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {this.state.houses.map(house => (
                    <House key={house.id}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    addressState={house.addressState}
                    zipCode={house.zipCode}/>
                ))}
            </div>
        )
    }
}