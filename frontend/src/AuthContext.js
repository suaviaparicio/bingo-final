import React, { createContext, useState, useEffect } from 'react';
 
export const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        isLoading: true
    });
 
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;
 
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch(`${endpointUrl}/api/check-session`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
 
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.loggedIn);
                    if (data.loggedIn) {
                        setAuthState({
                            isAuthenticated: true,
                            isLoading: false,
                            user: data.user
                        });
                    } else {
                        setAuthState(prevState => ({ ...prevState, isLoading: false }));
                    }
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setAuthState(prevState => ({ ...prevState, isLoading: false }));
            }
        };
 
        checkSession();
    }, [endpointUrl]);
 
    const updateAuthState = (newState) => {
        setAuthState({
            ...newState,
            isLoading: false
        });
    };
 
    return (
        <AuthContext.Provider value={{ authState, updateAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};