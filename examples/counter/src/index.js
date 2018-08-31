import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
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
