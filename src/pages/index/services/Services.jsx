import React from 'react'

import { useIndexContext } from '../general/IndexProvider'
import { servicesArray } from './servicesArray'

import './services.css'

const Services = () => {

	const { serviceRef } = useIndexContext()

	return (
		<section id={'service'} className={'services-section'} ref={ serviceRef }>
			<h2 className={'services-header'}>ВСЕГДА К ВАШИМ УСЛУГАМ!</h2>
			<div className={'services-wrapper'}>
				<ul className={'services-list'}>{ servicesArray.map(service => service.getComponent) }</ul>
			</div>
		</section>
	)
}

export default Services