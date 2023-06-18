import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

const App = () => {
    return (
        <Router>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App
