import React,  { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render () {
        return (
            <div>
                <Link to='/'><button>Dashboard</button></Link>
                <Link to='/wizard'><button>Add New House</button></Link>
                </div>
        )
    }
}