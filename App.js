import React,{Component} from 'react'
import {View} from 'react-native'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'

import BasicApp from './src/BasicApp'
import AppReducer from "./src/Reducers/index";

class App extends Component
{
  render()
  {
    return(
          <Provider store={(createStore(AppReducer,applyMiddleware(thunk)))}>
            <BasicApp/>
          </Provider>
    )
  }
}

export default App