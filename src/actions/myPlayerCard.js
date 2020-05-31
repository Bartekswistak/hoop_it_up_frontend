import { resetPlayerCardForm } from "./playerCardForm"


// export const setPlayerCard = (playercard) => { 
//     return {
//         type: "SET_PLAYERCARD",
//         payload: playercard
//     }
// }

// export const addPlayerCard = (playercard) => {
    
//     return {
//         type: "ADD_PLAYERCARD",
//         payload: playercard
//     }
// }

// Trying to simplify the actions...

// export function getMyPlayerCard(userId) {
//     return dispatch => { 
//         return fetch (`http://localhost:3000/api/v1/users/${userId}/playercard`)
//         .then(response => response.json())
//         .then(playercard => dispatch(displayPlayercard(playercard)) 
//       )
//     }
// }

export const getMyPlayerCard =  (userId) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/users/${userId}/playercard`, { 
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
    }).then(res => res.json())
    .then(playercard => {
        if(playercard.error) {
                 debugger
            //  alert(playercard.error)      
        } else {
            // dispatch(setCurrentUser())
                 debugger
            dispatch(displayPlayercard(playercard))
            // history.push(`/users/${userId}`)
        }
    }).catch(console.log)
  }
}

export const createPlayerCard= (playercard, userId, history) => {
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
                    // dispatch({type: 'CREATE_PLAYERCARD', payload: playercard})
                    dispatch(displayPlayercard(playercard))
                    resetPlayerCardForm()
                    // debugger
                    // history.push(`/user/${userId}`)
                 }
                }) 
                .catch(console.log)
    }

    export const displayPlayercard = playercard => {
        // debugger
        return {
          type: "DISPLAY_PLAYERCARD",
          playercard
          
        }
      }
      
    //   export function getMyPlayerCard(userId) {     
    //     return dispatch => {
    //       const response =  fetch(`http://localhost:3000/api/v1/users/${userId}/playercard`)
    //         const playercard =  response.json()
    //         if (playercard === null) {
    //             // alert("Something is not right.")
    //             debugger
    //         }
    //         else {
    //             debugger
    //             // setPlayerCard(playercard)
    //             // displayPlayercard(playercard)
    //         }
    //     }
    //   }


      //HAVENT TESTED THIS ACTION OUT JUST YET

    //   export function fetchPlayercard(userId) {
    //         return dispatch => {
    //             return fetch (`http://localhost:3000/api/v1/users/${userId}playercard`)       
    //             .then(response => response.json())
    //             .then(playercard => dispatch(displayPlayercard(playercard)) 
    //           )
    //         }
    //     }


// export const updatePlayerCard = (playerCardData, history, userId) => {
//     return dispatch => {
//         const sendablePlayerCardData = {
//             playercard: {
//                 player_nickname: playerCardData.playerNickname,
//                 player_height_in_feet: playerCardData.playerHeightFeet,
//                 player_height_in_inches: playerCardData.playerHeightInches,
//                 player_weight: playerCardData.playerWeight,
//                 player_age: playerCardData.playerAge,
//                 player_fav_player: playerCardData.playerFavPlayer,
//                 // user_id: playerCardData.userId
//             }
//         }
//         return fetch(`http://localhost:3000/api/v1/users/${userId}/playercard`, {
//             credentials: "include",
//             method: "PATCH",
//             headers: {
//                 "Content-Type": 'application/json'
//                 }, 
//                 body: JSON.stringify(sendablePlayerCardData)
//             })
//                 .then(r => r.json())
//                 .then(resp => {
//                 if (resp.error) {
//                     alert(resp.error)
//                 } else {
//                     dispatch(updatePlayerCard(resp.data))
//                     history.push(`/playercard/${resp.data.id}`)
//                  }
//                 })
//                 .catch(console.log)
//     }
// }