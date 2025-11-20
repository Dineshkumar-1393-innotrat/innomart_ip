// import React, { createContext, useContext, useReducer } from 'react';

// const IPContext = createContext();

// const initialState = {
//   goal: '',
//   step1Data: {
//     title: '',
//     abstract: '',
//     tags: [],
//     category: '',
//     submissionType: ''
//   },
//   step2Data: {
//     technicalSpecs: '',
//     detailedDescription: '',
//     documents: []
//   },
//   step3Data: {
//     targetIndustries: [],
//     developmentStage: ''
//   },
//   evaluationResults: null
// };

// function ipReducer(state, action) {
//   switch (action.type) {
//     case 'SET_GOAL':
//       return { ...state, goal: action.payload };
//     case 'SET_STEP1_DATA':
//       return { ...state, step1Data: { ...state.step1Data, ...action.payload } };
//     case 'SET_STEP2_DATA':
//       return { ...state, step2Data: { ...state.step2Data, ...action.payload } };
//     case 'SET_STEP3_DATA':
//       return { ...state, step3Data: { ...state.step3Data, ...action.payload } };
//     case 'SET_EVALUATION_RESULTS':
//       return { ...state, evaluationResults: action.payload };
//     case 'RESET_IP_DATA':
//       return initialState;
//     default:
//       return state;
//   }
// }

// export function IPProvider({ children }) {
//   const [state, dispatch] = useReducer(ipReducer, initialState);

//   return (
//     <IPContext.Provider value={{ state, dispatch }}>
//       {children}
//     </IPContext.Provider>
//   );
// }

// export function useIP() {
//   const context = useContext(IPContext);
//   if (!context) {
//     throw new Error('useIP must be used within an IPProvider');
//   }
//   return context;
// }
// src/context/IPContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const IPContext = createContext();

const initialState = {
  goal: '',
  step1Data: {
    title: '',
    abstract: '',
    patentNumber: '',
    tags: [],
    categories: [],
    submissionType: '',
  },
  step2Data: {
    technicalSpecs: '',
    detailedDescription: '',
    documents: [], // [{ name, size, ... }]
  },
  step3Data: {
    targetIndustries: [],
    physicalHardware: '',
    developmentStage: '',
    innovationVideoUrl: '',
    hasSoftwareStatus: '',
    softwareStatus: '',
  },
  evaluationResults: null,
};

function ipReducer(state, action) {
  switch (action.type) {
    case 'SET_GOAL':
      return { ...state, goal: action.payload };

    case 'SET_STEP1_DATA':
      return {
        ...state,
        step1Data: { ...state.step1Data, ...action.payload },
      };

    case 'SET_STEP2_DATA':
      return {
        ...state,
        step2Data: { ...state.step2Data, ...action.payload },
      };

    case 'SET_STEP3_DATA':
      return {
        ...state,
        step3Data: { ...state.step3Data, ...action.payload },
      };

    case 'SET_EVALUATION_RESULTS':
      return { ...state, evaluationResults: action.payload };

    case 'RESET_IP_DATA':
      return initialState;

    default:
      return state;
  }
}

export function IPProvider({ children }) {
  const [state, dispatch] = useReducer(ipReducer, initialState);
  return (
    <IPContext.Provider value={{ state, dispatch }}>
      {children}
    </IPContext.Provider>
  );
}

export function useIP() {
  const context = useContext(IPContext);
  if (!context) {
    throw new Error('useIP must be used within an IPProvider');
  }
  return context;
}
