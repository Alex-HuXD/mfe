import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'marketingModule/MarketingApp'

const MarketingApp = () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPath }) => {
                const { currentPath } = history.location
                if (currentPath === nextPath) return
                history.push(nextPath)
            },
        })
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}

export default MarketingApp
