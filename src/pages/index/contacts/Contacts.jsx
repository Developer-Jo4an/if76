import React from 'react'

import { useIndexContext } from '../general/IndexProvider'

import './contacts.css'

const Contacts = () => {

	const { contactsRef } = useIndexContext()

	return (
		<section id={'contacts'} className={'contacts-section'} ref={ contactsRef }>
			<div className={'contacts-wrapper'}>
				<div className={'contacts-left-part'}>
					<ul className={'contacts-info-list'}>
						<li className={'contacts-info-item'}>
							<span className={'contact-item-header'}>АДРЕС: </span>Г. ЯРОСЛАВЛЬ, КАЛИНИНА 45, 2 ЭТАЖ
						</li>
						<li className={'contacts-info-item'}>
							<span className={'contact-item-header'}>ВРЕМЯ РАБОТЫ: </span>ПН-ПТ. 9:00-21:00, СБ 9:00-19:00, ВС. 9:00-17:00
						</li>
						<li className={'contacts-info-item'}>
							<span className={'contact-item-header'}>ТЕЛЕФОН:</span><a className={'contact-item-link'} href='tel:+74852663400'>+7 (4852) 66-34-00</a>
						</li>
					</ul>
				</div>
				<div className={'contacts-map-wrapper'}>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3A28351396028f0969c9a5dabe18036464883dcd274fd3b8e4bc6bdc18a2fcb13e&amp;source=constructor'
						width='100%' height='100%' frameBorder='0'>
					</iframe>
					<iframe
						src="https://yandex.ru/sprav/widget/rating-badge/56822750743?type=award" width="150"
						height="50"
						frameBorder="0"
						className={'contacts-trusted-place'}
					>
					</iframe>
				</div>
			</div>
		</section>
	)
}

export default Contacts