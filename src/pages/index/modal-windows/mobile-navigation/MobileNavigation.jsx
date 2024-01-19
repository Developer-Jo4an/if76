import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useIndexContext } from '../../general/IndexProvider'
import Logo from '../../../../images/logo/logo-black.png'

import './mobile-navigation.css'

const MobileNavigation = () => {

    const {
        serviceRef,
        priceRef,
        coachesRef,
        contactsRef,
        botsRef,
        infoRef,
        salesMW,
        mobileNavigationMW,
        mobileHeaderRef
    } = useIndexContext()

    const [_, setSalesState] = salesMW
    const [__, setMobileNavState] = mobileNavigationMW

    const navigationArr = [
        { label: 'Акции', ref: false },
        { label: 'Боты', ref: botsRef },
        { label: 'Инфо', ref: infoRef },
        { label: 'Услуги', ref: serviceRef },
        { label: 'Тренеры', ref: coachesRef },
        { label: 'Цены', ref: priceRef },
        { label: 'Контакты', ref: contactsRef },
    ]

    const linkClick = ref => {
        const headerHeight = mobileHeaderRef.current.offsetHeight
        window.scrollTo({
            top: ref.current.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth'
        })
        setMobileNavState(false)
    }

    return (
        <div className={'mobile-navigation-modal-window'}>
            <div className={'mobile-navigation-wrapper'}>
                <div className={'mobile-navigation-head'}>
                    <button className={'mobile-navigation-head-img-button'} onClick={() => window.location.reload()}>
                        <img className={'mobile-navigation-img'} src={ Logo } alt='mobile-navigation-img'/>
                    </button>
                    <button className={'mobile-navigation-close-btn'} onClick={() => setMobileNavState(false)}><FontAwesomeIcon icon={ faXmark } /></button>
                </div>
                <nav className={'mobile-navigation-nav'}>
                    <ul className={'mobile-navigation-list'}>
                        { navigationArr.map((nav, index, arr) => {
                            if (index === 0) return (
                                <li
                                    className={'mobile-header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => {setSalesState(true); setMobileNavState(false)} }
                                >
                                    <div className={'mobile-header-navigation-info header-to-sales-link'}>Акции</div>
                                    <div className={'mobile-header-navigation-between-line'}></div>
                                </li>
                            )
                            else if (index === arr.length - 1) return (
                                <li
                                    className={'mobile-header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => linkClick(nav.ref)}
                                ><div className={'mobile-header-navigation-info'}>{ nav.label }</div></li>
                            )
                            else return (
                                <li
                                    className={'mobile-header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => linkClick(nav.ref)}
                                >
                                    <div className={'mobile-header-navigation-info'}>{ nav.label }</div>
                                    <div className={'mobile-header-navigation-between-line'} key={ Math.random().toString() }></div>
                                </li>
                            )
                        }) }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MobileNavigation