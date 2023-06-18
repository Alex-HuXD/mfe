import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
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
                    <MarketingApp />
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App
