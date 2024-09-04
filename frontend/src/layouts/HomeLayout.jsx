import React from "react";
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import { AuthProvider } from '../AuthContext';

const HomeLayout = () => {
    return (
        <div>
            <AuthProvider>
                <Header/>
                <Outlet/>
            </AuthProvider>
        </div>
    );
};
export default HomeLayout;