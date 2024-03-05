import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './coach-modal-window.css'

const CoachModalWindow = ({ coach, closeFunc }) => {

	if (!coach) return null

	const { name, img, description, skills, price } = coach

	const skillComponent = skill => {
		return (
			<li className={'coach-skill-item'} key={ skill }>
				<div className={'coach-skill-item-marker'}></div>
				<div className={'coach-skill-item-info'}>{ skill }</div>
			</li>
		)
	}

	const priceComponent = ([_, { name, amount }]) => {
		return (
			<li className={'coach-price-item'} key={ name }>
				<div className={'coach-price-item-name'}>{ name }</div>
				-
				<div className={'coach-price-item-amount'}>{ amount }р.</div>
			</li>
		)
	}

	return (
		<div className={'coach-modal-window'}>
			<button className={'coach-modal-window-close-btn'} onClick={ closeFunc }><FontAwesomeIcon icon={ faXmark }/></button>
			<div className={'coach-information'}>
				<div className={'coach-img-wrapper'}>
					<img src={ img } alt='coach-img' className={'coach-img'}/>
				</div>
				<div className={'coach-name'}>{ name }</div>
				<div className={'coach-description'}>{ description }</div>
				<ul className={'coach-skills-list'}>{ skills.map(skillComponent) }</ul>
			</div>
			<div className={'coach-price'}>
				<div className={'coach-price-header'}>Цены:</div>
				<ul className={'coach-price-list'}>{ Object.entries(price).map(priceComponent) }</ul>
			</div>

		</div>
	)
}

export default CoachModalWindow