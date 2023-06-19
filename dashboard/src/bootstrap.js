import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

//mount function to strat up the app
const mount = el => {
    const app = createApp(Dashboard)
    app.mount(el)
}

//when development in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('dev-dashboard-root')
    root && mount(root)
}

//when running through container, export the mount function for container to call.
export { mount }
