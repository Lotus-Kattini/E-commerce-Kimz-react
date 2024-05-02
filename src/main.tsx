import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//redux
import { Provider } from 'react-redux'
import  store  from '@store/index.ts'
//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ,
)
