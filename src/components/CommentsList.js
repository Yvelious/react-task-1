import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {

  state = {
        isOpen: false
    }
    render() {
        const { toggle } = this.props;
        const comments = this.props.comments;
        const commentHeading = toggle ? < h4  onClick = { this.handleClickComment }> Show Comments < /h4> : null;
        console.log(comments);
        //const commentItem = comments.map((comment) => <div key={comment.id}>{comment.id}</div>)
        return ( 
        < div > 
        	{ commentHeading } 
        	<Comment  toggle={this.state.isOpen} />

        < /div>
        )
    }

    handleClickComment = (ev) => {
         this.setState({
            isOpen : !this.state.isOpen
        })
    }


}

export default CommentsList
