export default (state = {}, action) => {

    switch(action.type){
        case "SET_CURRENT_USER":
            return action.user

        case "ADD_PLAYERCARD_TO_USER":
            return {currentUser: action.playercard}

        case "CLEAR_CURRENT_USER":
            return {}

        default:
            return state;
    } 
}
