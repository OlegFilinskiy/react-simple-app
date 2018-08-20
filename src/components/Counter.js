import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button className="btn btn-outline-success" onClick = {this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        /* обязательно достаем из props */
        const {increment} = this.props
        increment()
        /* равносильно такой записи: this.props.dispatch(increment()) */
    }
}
/* стрелочная функция внутри - это сокращенный вариант от записи:
    function mapStateToProps(state) {
        return {
            counter: state.count
        }
    }
    тогда бы мы експортировали connect(mapStateToProps, { increment })(Counter)
*/
export default connect((state) => ({
    counter: state.count 
}), { increment })(Counter)