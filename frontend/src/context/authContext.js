//create context for metamask
import React from 'react';
import {useState} from 'react'
export const MetaMaskContext = React.createContext();
//create provider for metamask
export const MetaMaskProvider = ({children}) => {
    const [account,setAccount] = useState('')
    return (
        <MetaMaskContext.Provider value={{account,setAccount}}>
            {children}
        </MetaMaskContext.Provider>
    )
}

