import React from 'react';

const House = props => {
        return (
            <div className='houseContainer'>
                <h2>{props.name}</h2>
                <p>{props.address}</p>
                <span>{props.city}, </span>
                <span>{props.stateaddress} </span>
                <span>{props.zipcode}</span>
                <button>DELETE</button>
            </div>
        )
    }

export default House