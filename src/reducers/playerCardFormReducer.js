const initialState = {
    player_nickname: "",
    player_height_in_feet: "",
    player_height_in_inches: "",
    player_age: "",
    player_weight: "",
    player_fav_player: ""
}


export default (state = initialState, action) => {

    switch(action.type){
        case "UPDATE_PLAYERCARD":
            return action.playerCardData
        case "RESET_PLAYERCARD_FORM":
            return initialState
        case "DATA_FOR_EDIT_PLAYERCARD_FORM":
            return action.playerCardData
        default:
            return state;
    } 
}