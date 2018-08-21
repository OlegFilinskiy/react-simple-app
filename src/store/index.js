import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import history from '../history'

const store = createStore(reducer)

//dev only
window.store = store

export default store