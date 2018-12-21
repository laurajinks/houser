import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class HouseListing extends Component {
    constructor (props) {
        super (props);
        this.state = {
            id: 0,
            name: '',
            address: '',
            city: '',
            stateaddress: '',
            zipcode: '',
            img_url: '',
            monthly_mortage: 0,
            monthly_rent: 0

        }
    }

    componentDidMount () {
        axios.get(`http://localhost:4000/api/houselisting/${this.props.match.params.id}`)
        .then(response => {
            this.setState({name: response.data[0].name, id: response.data[0].id, address: response.data[0].address,
            city: response.data[0].city, stateaddress: response.data[0].stateaddress, zipcode: response.data[0].zipcode,
        img_url: response.data[0].img_url, monthly_mortage: response.data[0].monthly_mortage, monthly_rent: response.data[0].monthly_rent})
            })
        .catch(err => console.log(err))
    }

    render () {
        return (
            <div className='houseContainer'>
                <h2>House ID: {this.state.id}</h2>
                <img src={this.state.img_url} alt='House picture'></img>
                <h2>{this.state.name}</h2>
                <p>{this.state.address}</p>
                <span>{this.state.city}, </span>
                <span>{this.state.stateaddress} </span>
                <span>{this.state.zipcode}</span>
                </div>
            )
        } 
    }