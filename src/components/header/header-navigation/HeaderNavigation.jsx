import React from 'react'

import { useIndexContext } from '../../../pages/index/general/IndexProvider'

import './header-navgation.css'

const HeaderNavigation = () => {

    const {
        navigationRef,
        serviceRef,
        priceRef,
        coachesRef,
        contactsRef,
        botsRef,
        infoRef,
        salesMW
    } = useIndexContext()

    const [_, setSalesState] = salesMW

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
        const headerHeight = navigationRef.current.offsetHeight
        window.scrollTo({
            top: ref.current.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className={'header-navigation'} ref={ navigationRef }>
            <div className={'header-down-section-wrapper'}>
                <nav className={'header-navigation-nav'}>
                    <ul className={'header-navigation-list'}>
                        { navigationArr.map((nav, index, arr) => {
                            if (index === 0) return (
                                <li
                                    className={'header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => setSalesState(true)}
                                >
                                    <div className={'header-navigation-info header-to-sales-link'}>Акции</div>
                                    <div className={'header-navigation-between-line'}>|</div>
                                </li>
                            )
                            else if (index === arr.length - 1) return (
                                <li
                                    className={'header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => linkClick(nav.ref)}
                                ><div className={'header-navigation-info'}>{ nav.label }</div></li>
                            )
                            else return (
                                <li
                                    className={'header-navigation-item'}
                                    key={ nav.label }
                                    onClick={() => linkClick(nav.ref)}
                                >
                                    <div className={'header-navigation-info'}>{ nav.label }</div>
                                    <div className={'header-navigation-between-line'} key={ Math.random().toString() }>|</div>
                                </li>
                            )
                        }) }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderNavigation