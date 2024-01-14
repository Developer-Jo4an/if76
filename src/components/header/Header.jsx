import React from 'react'
import Logo from '../../images/logo/logo.png'

import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faVk, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './header.css'

const Header = () => {

    const navigate = useNavigate()

    return (
        <header>
            <div className={'header-desktop-version'}>
                <div className={'header-up-section-wrapper'}>
                    <div className={'header-address-section'}>
                        <button className={'header-img-wrapper'} onClick={() => window.location.reload()}>
                            <img className={'header-desktop-img'} src={ Logo } alt={'header-desktop-img'}/>
                        </button>
                        <address><a target='_blank' className={'header-address-link'} href={'https://yandex.ru/maps/org/zheleznaya_semya/56822750743/?ll=39.870718%2C57.567495&z=17'}><FontAwesomeIcon icon={ faLocationDot } />г. Ярославль, Калинина - 45 (2 этаж)</a></address>
                    </div>
                    <div className={'header-contacts-section'}>
                        <div className={'header-tel-number-wrapper'}>
                            <a className={'header-tel-link'} href={'tel:+74852663400'}><FontAwesomeIcon icon={ faPhone }/>+7 (4852) 66-34-00</a>
                        </div>
                        <div className={'header-social-net'}>
                            <div className={'header-social-net-wrapper'}>
                                <a target='_blank' className={'header-social-net-link'} href={'https://wa.me/79657263400'}><FontAwesomeIcon icon={ faWhatsapp }/></a>
                            </div>
                            <div className={'header-social-net-wrapper'}>
                                <a target='_blank' className={'header-social-net-link'} href={'https://vk.com/ifamily76'}><FontAwesomeIcon icon={ faVk }/></a>
                            </div>
                            <div className={'header-social-net-wrapper'}>
                                <a target='_blank' className={'header-social-net-link'} href={'https://t.me/ifamily76'}><FontAwesomeIcon icon={ faTelegram }/></a>
                            </div>
                            <div className={'header-social-net-wrapper'}>
                                <a target='_blank' className={'header-social-net-link'} href={'https://www.instagram.com/ifamily76'}><FontAwesomeIcon icon={ faInstagram }/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'header-down-section-wrapper'}>
                    <nav className={'header-navigation'}>
                        <ul className={'header-navigation-ul'}>
                            <li className={'header-navigation-li'}>
                                <div className={'header-navigation-info header-to-sales-link'} onClick={() => navigate('/sales')}>Акции</div>
                            </li>
                            <div className={'header-navigation-between-line'}>|</div>
                            <li className={'header-navigation-li'}><div className={'header-navigation-info'}>Услуги</div></li>
                            <div className={'header-navigation-between-line'}>|</div>
                            <li className={'header-navigation-li'}><div className={'header-navigation-info'}>Тренеры</div></li>
                            <div className={'header-navigation-between-line'}>|</div>
                            <li className={'header-navigation-li'}><div className={'header-navigation-info'}>Цены</div></li>
                            <div className={'header-navigation-between-line'}>|</div>
                            <li className={'header-navigation-li'}><div className={'header-navigation-info'}>Контакты</div></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={'header-mobile-version'}>
                <div className={'header-mobile-wrapper'}>
                    <div className={'header-mobile-left-section'}>
                        <button className={'header-mobile-bars'}>
                            <FontAwesomeIcon icon={ faBars } />
                        </button>
                        <div className={'header-mobile-menu-label'}>МЕНЮ</div>
                    </div>
                    <nav className={'header-mobile-contacts'}>
                        <ul className={'header-mobile-contacts-ul'}>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='https://yandex.ru/maps/org/zheleznaya_semya/56822750743/?ll=39.870718%2C57.567495&z=17'><FontAwesomeIcon icon={ faLocationDot }/></a></li>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='tel:+74852663400'><FontAwesomeIcon icon={ faPhone }/></a></li>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='https://wa.me/79657263400'><FontAwesomeIcon icon={ faWhatsapp }/></a></li>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='https://vk.com/ifamily76'><FontAwesomeIcon icon={ faVk }/></a></li>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='https://t.me/ifamily76'><FontAwesomeIcon icon={ faTelegram }/></a></li>
                            <li className={'header-mobile-contacts-li'}><a className={'header-mobile-contacts-link'} target='_blank' href='https://www.instagram.com/ifamily76'><FontAwesomeIcon icon={ faInstagram }/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header