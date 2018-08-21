import React, { Component } from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Counter from './Counter'
import MyDatePicker from './MyDatePicker'
import DateRange from './Filters/DateRange'

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