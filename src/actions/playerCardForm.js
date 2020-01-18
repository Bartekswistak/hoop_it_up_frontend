    
export const updatePlayerCardForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_PLAYERCARD_FORM", 
        formData
    }
}

export const resetPlayerCardForm = () => {
    return {
        type: "RESET_PLAYERCARD_FORM"
    }
}

export const dataForPlayerCardForm = (playercard) => {
    const editPlayerCardData = {
        player_nickname: playercard.attributes.playerNickname,
        player_height_in_feet:playercard.attributes.playerHeightFeet,
        player_height_in_inches: playercard.attributes.playerHeightInches,
        player_weight: playercard.attributes.playerWeight,
        player_age: playercard.attributes.playerAge,
        player_fav_player: playercard.attributes.playerFavPlayer
     }
     return {
         type: "DATA_FOR_PLAYERCARD_FORM",
         editPlayerCardData
     }
 }