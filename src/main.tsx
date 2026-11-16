import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DeleteAccount from './components/pages/DeleteAccount.tsx'
import Support from './components/pages/Support.tsx'

// The site has one landing page plus two public pages (account deletion and
// support), so a path check is enough and no router is needed.
const path = window.location.pathname.replace(/\/+$/, '').toLowerCase()

const page =
  path === '/delete-account' ? (
    <DeleteAccount />
  ) : path === '/support' ? (
    <Support />
  ) : (
    <App />
  )

createRoot(document.getElementById('root')!).render(<StrictMode>{page}</StrictMode>)
