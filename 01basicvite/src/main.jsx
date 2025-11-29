import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = React.reactElement(
//     'a',
//     {href: "google.com", target: "blank"},
//     'click to visit goolge'
// );
createRoot(document.getElementById('root')).render(
    <App/>
)
