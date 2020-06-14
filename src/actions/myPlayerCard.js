
export const setPlayerCard = playercard => { 
    // debugger
    return {
        type: "SET_PLAYERCARD",
        playercard
    }
}

export const createPlayerCard= (playercard, userId) => {
    return dispatch => 
        fetch(`http://localhost:3000/api/v1/users/${userId}/playercard`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": 'application/json'
                }, 
                body: JSON.stringify(playercard)
            } )
            .then(response => response.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setPlayerCard(user))
                }
            }) 
                .catch(console.log)
    }

    export const displayPlayercard = playercard => {
        return {
            type: "DISPLAY_PLAYERCARD",
            playercard          
        }
      }

      export const updatePlayerCard= (playercard, playercardId) => {
        return dispatch => 
        fetch(`http://localhost:3000/api/v1/playercard/${playercardId}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": 'application/json'
                    }, 
                    body: JSON.stringify(playercard)
                } )
                .then(response => response.json())
                .then(playercard => {
                    if (playercard.error) {
                        // debugger
                        alert(playercard.error)
                    } else {
                        dispatch(displayPlayercard(playercard))

                     }
                    }) 
                    .catch(console.log)
        }


        export const clearPlayerCard = () => {
            return {
                type: "CLEAR_PLAYERCARD"
            }
        }