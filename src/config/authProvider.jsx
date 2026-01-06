
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { USER_AUTH_API, USER_LOGIN_API, USER_LOGOUT_API } from "../utils/constants/Api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    axios.defaults.withCredentials = true;

    const login = async (email, password) => {
        try {
            console.log(USER_LOGIN_API)
            setLoading(true);

            const res = await axios.post(USER_LOGIN_API,
                { email, password }
            );
            console.log(res,'my response')
            setUser(res.data.user)
            setIsAuthenticated(true)
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || "Login failed",
            };
        } finally {
            setLoading(false);
        }
    };
    const checkAuth = async () => {
        try {
            const res = await axios.get(USER_AUTH_API);
            setIsAuthenticated(res.data.authenticated);
        } catch {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    const logout = async () => {
        await axios.post(USER_LOGOUT_API);
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        checkAuth();

    }, []);
    return(
        <AuthContext.Provider
        value={{ user, isAuthenticated, loading, login, logout}}
        >
        {children}
        </AuthContext.Provider>
    );

};
export const useAuth = () => useContext(AuthContext);