import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './components/Counter'
import counter from './reducers'
import { watchIncrementAsync } from './tasks'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(counter, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchIncrementAsync)

const rootEl = document.getElementById('root')

const action = type => store.dispatch({type})

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => action('INCREMENT')}
    onDecrement={() => action('DECREMENT')}
    onIncrementAsync={() => action('INCREMENT_ASYNC')}
  />,
  rootEl
)

render()
store.subscribe(render)
