import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
const url = 'http://localhost:4000'

export default class House extends Component {
    constructor (props) {
        super(props);

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    deleteHouse(id) {
        axios.delete(`${url}/api/houses/${id}`)
    }

    render () {
        return (
            <div className='houseContainer'>
                <h2>{this.props.name}</h2>
                <p>{this.props.address}</p>
                <span>{this.props.city}, </span>
                <span>{this.props.stateaddress} </span>
                <span>{this.props.zipcode}</span>
                <Link to={`/houselisting/${this.props.id}`}><button>More Info</button></Link>
                <button onClick={() => this.deleteHouse(this.props.id)}>DELETE</button>
                </div>
            )
        } 
    }
