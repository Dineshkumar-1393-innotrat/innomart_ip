import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

const initialState = {
  userType: '',
  userData: {
    name: '',
    email: '',
    username: '',
    password: '',
    companyName: '',
    institutionName: ''
  },
  isAuthenticated: false
};

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER_TYPE':
      return { ...state, userType: action.payload };
    case 'SET_USER_DATA':
      return { ...state, userData: { ...state.userData, ...action.payload } };
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
