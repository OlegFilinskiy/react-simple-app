import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

class CommentList extends Component {
    /*  даем статическое свойство, чтобы потом в ф-ии getBody не делать проверку на сущ-е comments  */
    static defaultProps = {
        comments: []
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const textBtn = isOpen ? 'Hide comments' : 'Show comments';
        return <div>
            <button className="btn btn-outline-primary"
                    onClick = {this.props.toggleOpen}>{textBtn}</button>
            {this.getBody()}
        </div>
    }

    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null

    	if (!comments.length) return <p>No commets yet</p>

		return (
            <div>
    			<ul>
    				{comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)}
    			</ul>
                <CommentForm />
            </div>
		)
	}
}

export default toggleOpen(CommentList)

