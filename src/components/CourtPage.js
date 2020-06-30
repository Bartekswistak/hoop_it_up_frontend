import React from 'react'
import ReactDOM from 'react-dom';


class CourtPage extends React.Component {


    render(){
        return(
        
            <div>
                This is the sample text for displaying a court page.
            </div>
        )
    }
    
}

ReactDOM.render(<CourtPage/>, document.getElementById('courtpage'));

export default CourtPage