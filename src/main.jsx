import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Router from './Router.jsx'


createRoot(document.getElementById('root')).render(
  <Router />
)
