import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterContent from './router'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterContent/>
  </StrictMode>,
)
