import { BUY_CAKE, ADD_CAKE } from './cakeTypes'

const initialSate = {
    numOfCakes: 10
}

const cakeReducer = (state = initialSate, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        }
        case ADD_CAKE: {
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        }
        default: return state
    }
}

export default cakeReducer