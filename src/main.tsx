import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
console.log("Main.tsx się wykonuje!");
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
