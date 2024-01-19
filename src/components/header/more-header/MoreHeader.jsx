import React from 'react'
import { useNavigate } from 'react-router-dom'

import './more-header.css'

const MoreHeader = ({ pageName }) => {

    const navigate = useNavigate()

    return (
        <div className={'more-header'}>
            <div className={'more-header-wrapper'}>
                <h1 className={'more-header-header'}>{ pageName.toUpperCase() }</h1>
                <nav className={'more-header-navigation'}>
                    <div className={'more-header-link-main'} onClick={() => navigate('/')}>ГЛАВНАЯ</div>
                    <div className={'more-header-between-slash'}>/</div>
                    <div className={'more-header-link'}>{ pageName.toUpperCase() }</div>
                </nav>
            </div>
        </div>
    )
}

export default MoreHeader