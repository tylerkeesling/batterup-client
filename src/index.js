import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { fetchTeam } from './actions'

import App from './components/App'

import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log('store', store.getState()))

// store.dispatch(fetchTeam())

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
