import React, { useContext, useState } from 'react'

const indexContext = React.createContext()
export const useIndexContext = () => useContext(indexContext)

const IndexProvider = ({ children }) => {


    return (
        <indexContext.Provider value={{

        }}>{ children }</indexContext.Provider>
    )
}

export default IndexProvider