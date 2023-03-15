import React from 'react'
import ReactDOM from 'react-dom/client'
import Desktop from './Desktop'
import Taskbar from './Taskbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Desktop />
    <Taskbar />
  </React.StrictMode>,
)
