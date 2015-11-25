'use strict';

const React = require('react')
const ReactDom = require('react-dom')
const Redux = require('redux')

function appReducer(state = 0, action) {
  switch(action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function render() {
  ReactDom.render(
    (
      <div>
        <h1>Redux lab</h1>
        <div>{appStore.getState()}</div>
      </div>
    ),
    document.querySelector('[data-app]'))
}

const appStore = Redux.createStore(appReducer)

appStore.subscribe(render)

render()

appStore.dispatch({type: 'increment'})
appStore.dispatch({type: 'increment'})
appStore.dispatch({type: 'increment'})
