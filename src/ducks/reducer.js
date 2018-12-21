const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    imgUrl: '',
    monthlyMortgage: 0,
    recRent: 0
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'

export const updateLoanType = (loan) => {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loan
    }
}

function reducer(state = initialState, action) {
    switch( action.type ) {
        
    }
}

export default reducer;