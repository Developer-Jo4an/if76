import React from 'react'

import { ticketsArray } from './tickets-array'

import './tickets.css'

const Tickets = () => {

	return (
		<section className={'tickets-section'}>
			<div className={'tickets-wrapper'}>
				<ul className={'tickets-list'}>{ ticketsArray.map( ticket => ticket.getComponent) }</ul>
				<button className={'show-price-button'}>ПРАЙС ЛИСТ ФОТО</button>
				<div className={'price-more-info'}>*О ПОЛНОМ РАЗНООБРАЗИИ АБОНЕМЕНТОВ И ТЕКУЩИХ АКЦИЯХ УТОЧНЯЙТЕ ПО ТЕЛЕФОНУ (4852) 663-400</div>
			</div>
		</section>
	)
}

export default Tickets