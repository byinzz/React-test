import Login from '../modules/login/Login'
import { Navigate } from 'react-router-dom'
export default [
    { path: '/login', element: <Login /> },
    { path: '/', element: <Navigate to="/login" /> },
]
