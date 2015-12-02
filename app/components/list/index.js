const React = require('react')

const element = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.onListClick}>Add Item</button>
      </div>
      <div>
        <ul>
          {props.items.map((item) =>
           <li key={item.id}>
              {item.text}
            </li>
          )}
        </ul>
      </div>
  </div>
  )
}

function reducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [ ...state, { id: action.id, text: action.text } ]
    case 'REMOVE_ITEM':
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1) ]
    default:
      return state
  }
}

module.exports = {
  element,
  reducer
}
