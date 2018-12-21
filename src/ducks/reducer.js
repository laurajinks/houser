const initialState = {
    name: '',
    address: '',
    city: '',
    addressState: '',
    zipCode: '',
    imgUrl: '',
    monthlyMortgage: 0,
    recRent: 0
}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'

export const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export const updateAddress = (address) => {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export const updateState = (state) => {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export const updateZipCode = (code) => {
    return {
        type: UPDATE_ZIPCODE,
        payload: code
    }
}

function reducer(state = initialState, action) {
    switch( action.type ) {
        case UPDATE_NAME: 
        return {
        ...state,
        name: action.payload
        }
        case UPDATE_ADDRESS:
        return {
        ...state,
        address: action.payload
        }
        case UPDATE_CITY:
        return {
        ...state,
        city: action.payload
        }
        case UPDATE_STATE: 
        return {
        ...state,
        addressState: action.payload
        }
        default:
        return state;
}
}

export default reducer;