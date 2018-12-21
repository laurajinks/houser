import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUrl } from '../ducks/reducer'

class WizardTwo extends Component {
    render () {
        return (
            <div>
                <h1>Add new Home</h1>
                <p>Image URL:</p>
                <input placeholder="Image URL" type="text" onChange={(e) => this.props.updateUrl(e.target.value)}/>
                <Link to='/wizardone'><button>Previous Step</button></Link>
                <Link to='/wizardthree'><button>Next Step</button></Link>
                <Link to='/'><button onClick={() => this.addHouse()}>Add +</button></Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
const { imgUrl } = state;
return {
    imgUrl
}
}

export default connect(mapStateToProps, { updateUrl })(WizardTwo);