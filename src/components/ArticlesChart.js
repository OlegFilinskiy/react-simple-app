import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    componentDidMount() {
        // jQuery works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        // update chart for new articles
    }

	render() {
		return (
            <div ref = 'chart' />
		)
	}

	componentWillUnmount() {
        // do some cleanup
    }
}

export default ArticlesChart