    
export const updatePlayerCardForm = (playerCardData) => {
    
    
    return {
        type: "UPDATE_PLAYERCARD_FORM", 
        playerCardData
    }
}

export const resetPlayerCardForm = () => {
    return {
        type: "RESET_PLAYERCARD_FORM"
    }
}

export const dataForPlayerCardForm = playercard => { 
    
    const playerCardData = {
        playerNickname: playercard.player_nickname,
        playerHeightFeet:playercard.player_height_in_feet,
        playerHeightInches: playercard.player_height_in_inches,
        playerWeight: playercard.player_weight,
        playerAge: playercard.player_age,
        playerFavPlayer: playercard.player_fav_player
     }
     
    return {
        type: "DATA_FOR_PLAYERCARD_FORM",
        playerCardData
    }
 }