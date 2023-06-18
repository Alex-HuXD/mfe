import React from 'react'
import ReactDOM from 'react-dom'
import history, { createMemoryHistory, createBrowserHistory } from 'history'
import App from './app'

//mount function to strat up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        })
    onNavigate && history.listen(onNavigate)
    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el)

    return {
        onParentNavigate({ pathname: nextPath }) {
            const { pathname } = history.location
            if (pathname === nextPath) return
            history.push(nextPath)
        },
    }
}

//when development in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('dev-auth-root')
    root && mount(root, { defaultHistory: createBrowserHistory() })
}

//when running through container, export the mount function for container to call.
export { mount }
