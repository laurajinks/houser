import React,  { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render () {
        return (
            <div>
                <h1>Houser</h1>
                <Link to='/'>Home</Link>
                </div>
        )
    }
}