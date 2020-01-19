import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class MyPlayerCard extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         playercard: {}
    //     }
    // }




 render() {
    return (
     <div className="playerCardContainer active">
        {this.props.MyPlayerCard.map(playercard =>  
            <Link to={`playercard/${playercard.id}`} key={playercard.id}>
            </Link>  
            )}
     </div>
    )
  }
}

const mapStateToProps = ({MyPlayerCard}) => {
    return {
        MyPlayerCard
}
}


export default connect(mapStateToProps)(MyPlayerCard)