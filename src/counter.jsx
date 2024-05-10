//import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'

const initialState = 0

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'ZERO':
            return 0
        default:
            return state
        }
}

const store = createStore(counterReducer)

const Counter = () => {
    return (
        <div>
            <div className='center'>
                { store.getState() }
            </div>
            <div className='center'>
                <button onClick={ () => store.dispatch({ type: 'INCREMENT' }) }>plus</button>
                <button onClick={ () => store.dispatch({ type: 'ZERO' }) }>zero</button>
                <button onClick={ () => store.dispatch({ type: 'DECREMENT' }) }>minus</button>
            </div>
        </div>
    )
}

const clock = ReactDOM.createRoot(document.getElementById('clock'))

const renderApp = () => {
    clock.render(<Counter />)
}

renderApp()

store.subscribe(() => {
    console.log(store.getState())
})

store.subscribe(renderApp)

export default Counter