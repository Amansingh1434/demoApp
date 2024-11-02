// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM  from 'react-dom/client'
import React from 'react'
import ShopContextprovider from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ShopContextprovider>
<App />
</ShopContextprovider>
</BrowserRouter>


)
