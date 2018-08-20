import React, { Component } from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Counter from './Counter'
import MyDatePicker from './MyDatePicker'

class App extends Component {
	render() {
		return (
			<div>
				<Counter />
				<MyDatePicker />
				<ArticleList />
			</div>
		)
	}
}

export default App