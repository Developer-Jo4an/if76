import React from 'react'

import { useIndexContext } from '../general/IndexProvider'
import { infoArray } from './infoArray'

import './info.css'

const Info = () => {

	const { infoRef } = useIndexContext()

	return (
		<section className={'info-section'} ref={ infoRef }>
			<div className={'info-wrapper'}>
				<ul className={'info-list'}>{ infoArray.map(info => info.getComponent)}</ul>
			</div>
		</section>
	)
}

export default Info