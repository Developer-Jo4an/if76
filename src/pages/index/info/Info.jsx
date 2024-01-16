import React from 'react'

import { infoArray } from './infoArray'

import './info.css'

const Info = () => {
	return (
		<section className={'info-section'}>
			<div className={'info-wrapper'}>
				<ul className={'info-list'}>{ infoArray.map(info => info.getComponent)}</ul>
			</div>
		</section>
	)
}

export default Info