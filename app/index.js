const React = require('react')
const ReactDom = require('react-dom')
const Redux = require('redux')
const List = require('./components/list')

let nextItemId = 1

function appReducer(state = {}, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [ ...state, { id: action.id, text: action.text } ]
    case 'REMOVE_ITEM':
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1) ]
    default:
      return state
  }
}

function onListClick() {
  store.dispatch({
    type: 'ADD_ITEM',
    text: 'Test',
    id: nextItemId++
  })
}

function render() {
  ReactDom.render(
    (
      <div>
        <h1>Redux lab</h1>
        <List items={store.getState()} onListClick={onListClick}/>
      </div>
    ),
    document.querySelector('[data-app]'))
}

const store = Redux.createStore(appReducer)

store.subscribe(render)
render()
