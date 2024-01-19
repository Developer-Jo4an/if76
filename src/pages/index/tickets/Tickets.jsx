import React, { useState } from 'react'
import ModalWindowCenter from '../../../components/modal-windows/modal-window-center/ModalWindowCenter'
import PriceModalWindow from './modal-windows/PriceModalWindow'

import { useIndexContext } from '../general/IndexProvider'
import { ticketsArray } from './tickets-array'

import './tickets.css'

const MemoPriceModalWindow = React.memo(PriceModalWindow, (_, __) => true)

const Tickets = () => {

	const { priceRef } = useIndexContext()

	const [activePrice, setActivePrice] = useState(false)

	return (
		<section id={'price'} className={'tickets-section'} ref={ priceRef }>
			<div className={'tickets-wrapper'}>
				<ul className={'tickets-list'}>{ ticketsArray.map( ticket => ticket.getComponent) }</ul>
				<button onClick={() => setActivePrice(true)} className={'show-price-button'}>ПРАЙС ЛИСТ ФОТО</button>
				<div className={'price-more-info'}>*О ПОЛНОМ РАЗНООБРАЗИИ АБОНЕМЕНТОВ И ТЕКУЩИХ АКЦИЯХ УТОЧНЯЙТЕ ПО ТЕЛЕФОНУ (4852) 663-400</div>
			</div>
			<ModalWindowCenter visible={ activePrice } closeFunc={() => setActivePrice(false)}>
				<MemoPriceModalWindow closeFunc={() => setActivePrice(false)}/>
			</ModalWindowCenter>
		</section>
	)
}

export default Tickets