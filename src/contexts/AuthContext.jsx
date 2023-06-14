import { createContext , useContext , useState , useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId , setUserId] = useState(null);
    const [auth , setAuth] = useState (false);
    useEffect(() => {
        if (sessionStorage.getItem("userId") !== null){
            setUserId(sessionStorage.getItem("userId"));
            setAuth(true);
        }
    },[]);

    return (
        <AuthContext.Provider value = {{
            auth:auth,
            setAuth:setAuth,
            userId:userId,
            setUserId:setUserId
        }}>
            {children}
        </AuthContext.Provider>
   )
}