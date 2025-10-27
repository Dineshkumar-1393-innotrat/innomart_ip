import React, { createContext, useReducer, useContext, useEffect } from 'react';

const UserContext = createContext();

const initialState = {
  userType: '',
  userData: {
    name: 'Srilaksmi Drisala',
    email: 'srilaksmi@gmail.com',
    username: '',
    password: '',
    companyName: '',
    institutionName: '',
    phone: '0987654321',
    addressLine1: '',
    addressLine2: '',
    area: '',
    pincode: '',
    bio: '',
    focusAreas: ['Robotics', 'AI/ML', 'Drone'],
    portfolioLink: '',
    linkedinLink: '',
    profileImage: '',
    profileImageSource: 'upload'
  },
  isAuthenticated: false
};

function initializeState() {
  if (typeof window !== 'undefined') {
    const storedState = window.localStorage.getItem('userState');
    if (storedState) {
      try {
        const parsedState = JSON.parse(storedState);
        return {
          ...initialState,
          ...parsedState,
          userData: {
            ...initialState.userData,
            ...(parsedState.userData || {})
          }
        };
      } catch (error) {
        console.error('Failed to parse user state from storage', error);
      }
    }
  }
  return initialState;
}

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
  const [state, dispatch] = useReducer(userReducer, initialState, initializeState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('userState', JSON.stringify(state));
    }
  }, [state]);

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
