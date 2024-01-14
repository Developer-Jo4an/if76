import React from 'react'

import Logo from '../../../images/logo/logo-black.png'

import './welcome.css'

const Welcome = () => {
    return (
        <section className={'welcome-section'}>
            <div className={'welcome-logo-wrapper'}>
                <img className={'welcome-logo'} src={ Logo } alt='welocme-logo'/>
            </div>
            <h1 className={'welcome-logo-header'}>ДОБРО ПОЖАЛОВАТЬ В <span className={'welcome-logo-header-bold'}>СЕМЬЮ!</span></h1>
        </section>
    )
}

export default Welcome