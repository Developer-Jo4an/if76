import React from 'react'
import IndexProvider from './IndexProvider'
import Header from '../../../components/header/header/Header'
import Welcome from '../welcome/Welcome'
import Bots from '../bots/Bots'
import Info from '../info/Info'
import Services from '../services/Services'
import Coaches from '../coaches/Coaches'
import Tickets from '../tickets/Tickets'
import Contacts from '../contacts/Contacts'
import Footer from '../../../components/footer/Footer'
import HeaderNavigation from '../../../components/header/header-navigation/HeaderNavigation'
import IndexModalWindows from '../modal-windows/IndexModalWindows'

const Index = () => {
    return (
        <IndexProvider>
            <Header />
            <HeaderNavigation/>
            <Welcome />
            <Bots />
	        <Info />
	        <Services />
	        <Coaches />
	        <Tickets />
	        <Contacts />
            <IndexModalWindows/>
	        <Footer />
        </IndexProvider>
    )
}

export default Index