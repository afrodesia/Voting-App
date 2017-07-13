import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Vote from './reducers'
import Results from './components/results'
// import Logos from './components/logos';
import Header from './App';

import './App.scss'

let store = createStore(Vote)

function render(){
  ReactDOM.render(

    <div className="App">
        
        <Header />
        <Results store={store} />

    </div>
    ,
    document.getElementById('root')
    
  )
}
store.subscribe(render)
render()
