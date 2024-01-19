import React, { useContext, useRef, useState } from 'react'

const indexContext = React.createContext()
export const useIndexContext = () => useContext(indexContext)

const IndexProvider = ({ children }) => {

    return (
        <indexContext.Provider value={{
            navigationRef: useRef(),
            serviceRef: useRef(),
            coachesRef: useRef(),
            contactsRef: useRef(),
            priceRef: useRef(),
            botsRef: useRef(),
            infoRef: useRef(),
            mobileHeaderRef: useRef(),
            salesMW: useState(false),
            mobileNavigationMW: useState(false)
        }}>{ children }</indexContext.Provider>
    )
}

export default IndexProvider