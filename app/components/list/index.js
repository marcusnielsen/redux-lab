const React = require('react')

module.exports = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.onListClick}></button>
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
