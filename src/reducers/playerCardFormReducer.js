const initialState = {
    playerNickname: '',
    playerHeightFeet: '',
    playerHeightInches: '',
    playerWeight: '',
    playerAge: '',
    playerFavPlayer: ''
}

export default (state = initialState, action) => {

    switch(action.type){
        case "UPDATE_PLAYERCARD":
            return{
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_PLAYERCARD_FORM":
            return initialState
        case "DATA_FOR_EDIT_PLAYERCARD_FORM":
            return action.editPlayerCardData
        default:
            return state;
    } 
}