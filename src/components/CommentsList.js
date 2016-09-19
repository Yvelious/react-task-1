import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {

  state = {
        isOpen: false
    }
    render() {
        const { toggle } = this.props;

         
        console.log(this.props.comments);
        console.log(this.props.co.comments);
        var t = [];
        if(this.props.co.comments) {
             t = this.props.co.comments.slice(); 
        }
        
    

        const commentHeading = toggle ? < h4  onClick = { this.handleClickComment }> Show Comments < /h4> : null;
        //const commentItem = comments.map((comment) => <div key={comment.id}>{comment.id}</div>)
        const comments = t.map((comment) => <li key={comment.id}>1</li>)


        return ( 
        < div > 
        	{ commentHeading } 
        	<Comment  toggle={this.state.isOpen} />
            {comments}
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
