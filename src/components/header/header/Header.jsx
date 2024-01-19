import React from 'react'
import Logo from '../../../images/logo/logo.png'

import { useIndexContext } from '../../../pages/index/general/IndexProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faVk, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './header.css'

const Header = () => {

	const { mobileNavigationMW, mobileHeaderRef } = useIndexContext()
	const [_, setMobileNavState] = mobileNavigationMW

	const headerContactsList = [
		{ sign: faLocationDot, link: 'https://yandex.ru/maps/org/zheleznaya_semya/56822750743/?ll=39.870718%2C57.567495&z=17' },
		{ sign: faPhone , link: 'tel:+74852663400' },
		{ sign: faWhatsapp, link:'https://wa.me/79657263400' },
		{ sign: faVk, link: 'https://vk.com/ifamily76' },
		{ sign: faTelegram, link: 'https://t.me/ifamily76' },
		{ sign: faInstagram, link: 'https://www.instagram.com/ifamily76' },
	]

	const desktopContact = (item, index) => {
		if (index > 1) return (
			<li className={'header-social-net-item'} key={ item.link }>
				<a target='_blank' className={'header-social-net-link'} href={ item.link }><FontAwesomeIcon icon={ item.sign }/></a>
			</li>
		)
	}

	const mobileContact = item => (
		<li className={'header-mobile-contacts-item'} key={ item.link }>
			<a className={'header-mobile-contacts-link'} target='_blank' href={ item.link }><FontAwesomeIcon icon={ item.sign }/></a>
		</li>
	)

	return (
		<header>
			<div className={'header-desktop-version'}>
				<div className={'header-up-section-wrapper'}>
					<div className={'header-address-section'}>
						<button className={'header-img-wrapper'} onClick={() => window.location.reload()}>
                            <img className={'header-desktop-img'} src={ Logo } alt={'header-desktop-img'}/>
                        </button>
                        <address><a target='_blank' className={'header-address-link'} href={'https://yandex.ru/maps/org/zheleznaya_semya/56822750743/?ll=39.870718%2C57.567495&z=17'}><FontAwesomeIcon icon={ faLocationDot } />г. Ярославль, Калинина 45 (2 этаж)</a></address>
                    </div>
                    <div className={'header-contacts-section'}>
                        <div className={'header-tel-number-wrapper'}>
                            <a className={'header-tel-link'} href={'tel:+74852663400'}><FontAwesomeIcon icon={ faPhone }/>+7 (4852) 66-34-00</a>
                        </div>
                        <ul className={'header-social-list'}>{ headerContactsList.map(desktopContact)}</ul>
                    </div>
                </div>
            </div>
            <div className={'header-mobile-version'} ref={ mobileHeaderRef }>
                <div className={'header-mobile-wrapper'}>
                    <div className={'header-mobile-left-section'} onClick={() => setMobileNavState(true)}>
                        <button className={'header-mobile-bars'}><FontAwesomeIcon icon={ faBars }/></button>
	                    <div className={'header-mobile-menu-label'}>МЕНЮ</div>
                    </div>
                    <nav className={'header-mobile-contacts'}><ul className={'header-mobile-contacts-list'}>{ headerContactsList.map(mobileContact)}</ul></nav>
                </div>
            </div>
        </header>
    )
}

export default Header