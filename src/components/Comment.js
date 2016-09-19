import React, { PropTypes, Component } from 'react'

class Comment extends Component {
	state = {
        isOpen: true 
    }

    render() {
    	const t = this.props.toggle
     const textItem = t ? <div>comment here</div> : null

     return ( 
	       <div> {textItem} </div>
        ) 
    }

}

export default Comment 
