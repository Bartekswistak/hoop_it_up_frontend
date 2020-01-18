const initialState = []

export default (state = initialState, action) => {

    switch(action.type){
        case "SET_PLAYERCARD":
        return action.payload

        case "UPDATE_PLAYERCARD":
        return state.map(playercard => playercard.id === action.playercard.id ? action.playercard : playercard)


        case "ADD_PLAYERCARD":
        return state.concat(action.playercard)

        case "CLEAR_PLAYERCARD":
        return initialState

        
        default:
        return state;
    } 
}