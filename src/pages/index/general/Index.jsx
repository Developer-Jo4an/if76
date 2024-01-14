import React from 'react'
import IndexProvider from './IndexProvider'
import Header from '../../../components/header/Header'
import Welcome from '../welcome/Welcome'
import Bots from '../bots/Bots'

const Index = () => {
    return (
        <IndexProvider>
            <Header />
            <Welcome />
            <Bots />
        </IndexProvider>
    )
}

export default Index