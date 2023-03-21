//creat context to store state of contract
import React from 'react';
import {useState} from 'react'
export const ContractContext = React.createContext();
//create provider for contract
export const ContractProvider = ({children}) => {
    const [state,setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    })
    return (
        <ContractContext.Provider value={{state,setState}}>
            {children}
        </ContractContext.Provider>
    )
}