import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

// generate more random className to avoid css collisions when app loaded in host
// *production build use shorter generated css className like jss1, other module use same css in js lib
// may generated same className, so we need to make it more specific

// following setting make sure all css calssName start with 'marketing', doing so we can
// sure that our css styleing is scoped.
const generateClassName = createGenerateClassName({
    productionPrefix: 'maketing',
})

const App = ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

export default App
