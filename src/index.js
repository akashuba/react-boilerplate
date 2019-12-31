import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { listReducer } from './redux/reducers/listReducer'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

let initialList = null

try {
	initialList = JSON.parse(preloadedState.list)
} catch (error) {}

const store = createStore(
	listReducer,
	{
		list: initialList,
	},
	applyMiddleware(thunk),
)

ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
