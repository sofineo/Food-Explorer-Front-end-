import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AuthProvider>
          <div>
          <ToastContainer />
          <Routes/>
          </div>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
