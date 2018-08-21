import React, { Component, PureComponent } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import {CSSTransitionGroup} from 'react-transition-group'
import {deleteArticle} from '../../AC'
import './style.css'

class Article extends PureComponent {
    static propTypes = {
			article: PropTypes.shape({
				id: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				text: PropTypes.string
		}).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
    }

	constructor(props) {
		super(props);
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props;
		return <div className="article">
			<h3>{article.title}</h3>
			<button className="btn btn-primary" onClick = {toggleOpen}>
				{isOpen ? 'Close' : 'Open'}
			</button>
			<button className="btn btn-danger" onClick={this.handleDelete}>Delete me</button>
			<CSSTransitionGroup
				transitionName = 'article'
				transitionAppear = {true}
				transitionEnterTimeout = {300}
				transitionLeaveTimeout = {300}
				transitionAppearTimeout = {300}
				component = 'div'
			>
				{this.getBody()}
			</CSSTransitionGroup>
		</div>
	}

	getBody() {
		const {article, isOpen} = this.props;
		if (!isOpen) return null
		return (
			<section>
				{article.text}
				<CommentList comments = {article.comments} />
			</section>
		)
	}

	handleDelete = () => {
		const {deleteArticle, article} = this.props
		deleteArticle(article.id)
		console.log('deleting article')
	}
}

export default connect(null, {deleteArticle})(Article)
