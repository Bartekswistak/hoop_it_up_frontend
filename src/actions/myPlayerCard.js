import {resetPlayerCardForm} from '../actions/playerCardForm'


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

// export function getMyPlayerCard() {
//     return dispatch => {
//         return fetch ("http://localhost:3000/api/v1/playercard")
//         .then(response => response.json())
//         .then(playercard => dispatch(setPlayerCard(playercard))
//       )
//     }
// }

// export const getMyPlayerCard = (playercard, userId, history) => {
//     return dispatch => {
//         return fetch(`http://localhost:3000/api/v1/users/${userId}/playercard`, { 
//             credentials: "include",
//             method: "GET",
//             headers: {
//                 "Content-Type": 'application/json'
//             }
//     }).then(res => res.json())
//     .then(playercard => {
//         if(playercard.error) {
//             //  alert(playercard.error)      
//         } else {
//             // dispatch(setCurrentUser())
//             dispatch(setPlayerCard(playercard))
//             history.push(`/users/${userId}`)
//         }
//     }).catch(console.log)
//   }
// }

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
                    // debugger
                    alert(user.error)
                } else {
                // //    debugger
                //     dispatch({type: 'ADD_PLAYERCARD', user: user })
                //     dispatch({type: 'ADD_PLAYERCARD_TO_CURRENT_USER', user: user})
                    dispatch(resetPlayerCardForm())
                    history.push(`/user/${user.id}`)
                
                 }
                }) 
                .catch(console.log)
    }


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