import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {app} from './firebaseConfig'
import {router} from './Routes'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)
