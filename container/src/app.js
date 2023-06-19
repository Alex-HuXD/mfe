import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Header from './components/Header'
import Loading from './components/Loading'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

const history = createBrowserHistory()

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        isSignedIn && history.push('/dashboard')
    }, [isSignedIn])
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Switch>
                        <Suspense fallback={<Loading />}>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardAppLazy />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Suspense>
                    </Switch>
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App
