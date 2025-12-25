import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './Tic-tac-toe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
