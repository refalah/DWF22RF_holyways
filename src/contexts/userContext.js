import {createContext, useReducer} from 'react'

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    testText: `I'm Batman`
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true
            };
        case "LOGOUT":
            return {
                ...state,
                isLogin: false
            }
    
        default:
            throw new Error();
    }
}

export const UserContextProvider = ({children}) => {
    const isLogin = false;
    const titleContext = 'Context Incoming'

    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <UserContext.Provider value={[ state, dispatch ]}>
            {children}
        </UserContext.Provider>
    )
}
