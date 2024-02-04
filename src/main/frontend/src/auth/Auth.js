import { Navigate, useLocation } from "react-router-dom";
  
export const setToken = (token) =>{
    localStorage.setItem('token', token)
}

export const getToken = (token) =>{
    return localStorage.getItem('token')
}

export function RequireToken({children}) {    
    let auth = getToken()
    let location = useLocation();

    if (!auth) {
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return children;
}