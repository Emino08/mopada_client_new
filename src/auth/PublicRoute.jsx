import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAuth} from './AuthContext';

const PublicRoute = () => {
    const { state, actions: { isTokenExpired } } = useAuth();
    const navigate = useNavigate();
    console.log("Public routes", state.isAuthenticated);

    console.log("Public routes", state.isAuthenticated, "isTokenExpired", isTokenExpired());
    useEffect(() => {
        // if (state.isAuthenticated) {
        //     navigate('/mainfavoritepage');
        // }
        // if (state.isAuthenticated && !isTokenExpired()) {
            if ( !isTokenExpired()) {
            navigate('/mainfavoritepage');
        }
    }, [state.isAuthenticated, navigate, isTokenExpired]);

    if ( isTokenExpired()) {
        return null;
    }


    return <Outlet />;
};

export default PublicRoute;