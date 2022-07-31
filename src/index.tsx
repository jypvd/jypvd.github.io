import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = document.getElementById('root') as HTMLElement
root.classList.add('body-wrap', 'boxed-container')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
