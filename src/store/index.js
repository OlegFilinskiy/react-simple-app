import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

// const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId, api, logger)

// const store = createStore(reducer, {}, enhancer)
const store = createStore(reducer)

//dev only
window.store = store

export default store