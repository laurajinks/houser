import React,  { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render () {
        return (
            <div>
                <div>Dashboard</div>
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}