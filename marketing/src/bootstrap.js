import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

//mount function to strat up the app
const mount = el => {
    ReactDOM.render(<App />, el)
}

//when development in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('dev-marketing-root')
    root && mount(root)
}

//when running through container, export the mount function for container to call.
export { mount }
