import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DeleteAccount from './components/pages/DeleteAccount.tsx'

// The site has one page plus the public account-deletion page, so a path
// check is enough and no router is needed.
const isDeleteAccountPage =
  window.location.pathname.replace(/\/+$/, '').toLowerCase() === '/delete-account'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isDeleteAccountPage ? <DeleteAccount /> : <App />}</StrictMode>,
)
