import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'  // 添加这行
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  {/* 添加这行包装 */}
      <App />
    </HashRouter>  {/* 添加这行结束 */}
  </StrictMode>,
)