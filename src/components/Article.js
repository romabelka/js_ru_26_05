import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'


export default class Article extends Component {

    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        if (!article) return <h3>No article</h3>;
        article.comments = article.comments || [];
        const body = isOpen ? <div>{article.text}<CommentList comments = {article.comments}/></div> : null;

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
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


Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }),
    options: PropTypes.object
};
