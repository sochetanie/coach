import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {Router, Route, browserHistory} from 'react-router'
import {firebaseApp} from './fireBase'


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user sigin or not',user)
  } else {
    console.log('signed out')
  }
})

ReactDOM.render(
  <Router path='/' history={browserHistory}>
    <Route path='/app' component={App}/>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
  </Router>,
  document.getElementById('root')
  )