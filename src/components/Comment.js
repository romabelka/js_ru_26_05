import React, { PropTypes, Component } from 'react'


class Comment extends Component {

    render() {
        const { comment } = this.props;

        if (!comment || !comment.text) return null;
        
        return (
            <div>
                <b>{comment.name}:</b><br/><section>{comment.text}</section>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string
    }),
    options: PropTypes.object
};

export default Comment