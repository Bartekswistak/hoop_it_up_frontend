const initialState = { }

export default function myPlayerCardReducer(state = initialState, action) {

    switch(action.type){
        
        case "CREATE_PLAYERCARD":
        return action.playercard

        case "SET_PLAYERCARD":
        return action.playercard


        case "DISPLAY_PLAYERCARD":
        return  {playercard: action.playercard}


        case "UPDATE_PLAYERCARD":
        return state.map(playercard => playercard.id === action.playercard.id ? action.playercard : playercard)

        case "CLEAR_PLAYERCARD":
        return initialState

        
        default:
        return state;
    } 
}