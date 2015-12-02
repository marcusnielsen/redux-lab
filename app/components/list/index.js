const React = require('react')
const Component = React.Component
const store = require('../../store')

let nextItemId = 1

class element extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <input type="text" className="col-md-6 input-lg" ref={(node) => {
            this.input = node
          }}></input>
        <button onClick={() =>
          store.dispatch({
            type: 'ADD_ITEM',
            text: value,
            id: nextItemId++
          })
        } className="col-md-3 btn-lg btn-success">Add Item</button>
        </div>
        <div>
          <ul>
            {this.props.items.map((item) =>
             <li key={item.id}>
                {item.text}
              </li>
            )}
          </ul>
        </div>
    </div>
    )
  }
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
