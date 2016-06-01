import React, { PropTypes, Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {

    state = {
        isOpen: false
    };

    render() {
        const { comments } = this.props;
        const { isOpen } = this.state;

        if (! comments || comments.length < 1) return <p><b>no comments.</b></p>;

        const title = isOpen ? <span>hide comments {"<<"}</span> : <span>show comments {">>"}</span>;
        const commentItems = comments.map((comment) => <p key={comment.name}><Comment comment = {comment}/></p>);
        const body = isOpen ? <ul>{commentItems}</ul> : null;

        return (
            <div>
                <p onClick = {this.toggleOpen}>{title}</p>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList