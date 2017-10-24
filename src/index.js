import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
