import { createContext, useReducer, Fragment, Dispatch } from 'react'
import reducers from '../store/Reducers'

export const initialState = {
    page: 1,
    NavComponent: Fragment as React.FC<any>
}

export const DataContext = createContext({} as {state: typeof initialState, dispatch: Dispatch<any>})

interface Props {
    children: React.ReactNode;
}

const StateProvider = ({ children }: Props) => {
    

    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export default StateProvider