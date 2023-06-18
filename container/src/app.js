import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Loading from './components/Loading'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <Router>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Switch>
                        <Suspense fallback={<Loading />}>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
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
