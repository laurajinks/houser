import React,  { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    render () {
        return (
            <div>
                <div>Wizard</div>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}