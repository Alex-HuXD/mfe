import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'authModule/AuthApp'

const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPath }) => {
                const { currentPath } = history.location
                if (currentPath === nextPath) return
                history.push(nextPath)
            },
            onSignIn,
        })
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}

export default AuthApp
