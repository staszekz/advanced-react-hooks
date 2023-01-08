// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsapported action type ${action.type}`)
  }

  // extraCredit 3
  // if (typeof action === 'function') {
  //   return {...state, ...action(state)}
  // } else {
  //   return {...state, ...action}
  // }
  // albo tak
  // return {
  // ...state,
  // ...(typeof action === 'function' ? action(state) : action)
  // }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  // changeCount(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
