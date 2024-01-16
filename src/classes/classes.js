import React from 'react'

import Logo from '../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Service {
	constructor(title, sign, description) {
		this.title = title
		this.sign = sign
		this.description = description
	}

	get getComponent () {
		return (
			<li className={'services-item'} key={ this.title }>
				<div className={'services-item-sign-wrapper'}>
					<div className={'services-item-sign'}><FontAwesomeIcon icon={ this.sign }/></div>
				</div>
				<div className={'services-item-title'}>{ this.title }</div>
				<div className={'services-item-description'}>{ this.description }</div>
			</li>
		)
	}
}

export class Info {
	constructor(sign, description) {
		this.sign = sign
		this.description = description
	}

	get getComponent () {
		return (
			<li className={'info-item'} key={ this.description }>
				<div className={'info-item-sign-wrapper'}><FontAwesomeIcon icon={ this.sign }/></div>
				<div className={'info-item-description'}>{ this.description }</div>
			</li>
		)
	}
}

export class Bot {
	constructor(sign, link) {
		this.sign = sign
		this.link = link
	}

	get getComponent() {
		return (
			<li className={'bot-link-item'} key={ this.link }><a target='_blank' href={ this.link } className={'bot-link'}><FontAwesomeIcon icon={ this.sign }/></a></li>
		)
	}
}

export class Coach {
	constructor(name, description, skills, img) {
		this.name = name
		this.description = description
		this.skills = skills
		this.img = img
	}

	getStaticComponent(clickFunction) {
		return (
			<li className={'coach-static-item'} key={ this.name }>
				<div className={'coach-static-img-wrapper'} onClick={ () => clickFunction(this) }>
					<img src={ this.img } alt='coach-static-item' className={'coach-static-img'}/>
				</div>
				<div className={'coach-static-name'} onClick={ () => clickFunction(this) }>{ this.name }</div>
			</li>
		)
	}
}

export class Ticket {
	constructor(name, price, type) {
		this.name = name
		this.price = price
		this.type = type
	}

	get getComponent() {
		return (
			<li className={'ticket'} key={ this.name }>
				<div className={'ticket-type'}>{ this.type }</div>
				<div className={'ticket-name'}>{ this.name }</div>
				<div className={'ticket-price'}>{ this.price }</div>
				<div className={'ticket-logo-wrapper'}>
					<img src={ Logo } alt='ticket-brand-logo' className={'ticket-brand-logo'}/>
				</div>
			</li>
		)
	}

}