import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
	static propTypes = {
		// from connect
		articles: PropTypes.array.isRequired,
		// from accordion
		openItemId: PropTypes.string,
		toggleOpenItem: PropTypes.func.isRequired
	}

	render() {
		const {articles, openItemId, toggleOpenItem} = this.props
		const articleElements = articles.map(article => <li key = {article.id}>
			<Article 
				article = {article}
				isOpen = {article.id === openItemId}
				toggleOpen = {toggleOpenItem(article.id)}
			/>
		</li>)

		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
}

// export default connect(state => ({
//   articles: state.articles
// }))(accordion(ArticleList))

export default connect(({filters, articles}) => {
	const {dateRange: {from, to}} = filters

	const filteredArticles = articles.filter(article => {
		const published = Date.parse(article.date)
		return (!!from || !to || (published > from && published < to))
	})

  return {
		articles: filteredArticles
	}
})(accordion(ArticleList))