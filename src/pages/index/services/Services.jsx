import React from 'react'

import { servicesArray } from './servicesArray'

import './services.css'

const Services = () => {

	return (
		<section className={'services-section'}>
			<h2 className={'services-header'}>ВСЕГДА К ВАШИМ УСЛУГАМ!</h2>
			<div className={'services-wrapper'}>
				<ul className={'services-list'}>{ servicesArray.map(service => service.getComponent) }</ul>
			</div>
		</section>
	)
}

export default Services