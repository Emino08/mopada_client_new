import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";
import { useJwt } from "react-jwt";

// Initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));

  // Action creators
  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://44.222.48.171:8080/user/login/",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      const user = response.data; // adjust this based on your API response structure

      // Store the user's token in the local storage
      localStorage.setItem("token", user.access_token);
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

  const logout = () => {
    // Remove the user's token from the local storage
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };

  const getLogged = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://44.222.48.171:8080/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data; // adjust this based on your API response structure

      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

  // const isTokenExpired = () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //         return true;
  //     }
  //
  //     const decodedToken = decode(token);
  //     const expirationDate = decodedToken.exp * 1000; // Convert to milliseconds
  //     return Date.now() > expirationDate;
  // };

  return (
    <AuthContext.Provider
      value={{
        state,
        actions: {
          login,
          logout,
          getLogged,
          isTokenExpired: () => isExpired,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
