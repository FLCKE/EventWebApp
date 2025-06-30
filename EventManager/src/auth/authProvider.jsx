import { createContext, useContext, useState, React } from 'react'
const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const loginContext = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', userData.role);
        setUser(userData);
    };

    const logoutContext = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);