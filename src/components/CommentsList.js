import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {

    render() {
        const { toggle } = this.props;
        const commentHeading = toggle ? < h4 > Show Comments < /h4> : null;

        return ( 
        < div onClick = { this.handleClickComment } > 
        	{ commentHeading } 
        	<Comment  />
        < /div>
       
        )
    }

    handleClickComment = (ev) => {
        console.log('sss');
    }


}

export default CommentsList
