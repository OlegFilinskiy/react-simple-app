import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <DateRange />
            </div>
        )
    }
}

export default Filters