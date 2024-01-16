import React from 'react'

import { useNavigate } from 'react-router-dom'

import './footer.css'

const Footer = () => {

	const navigate = useNavigate()

	return (
		<footer>
			<div className={'footer-wrapper'}>
				<div className={'footer-left-section'}>
					<div className={'footer-brand-info'}>ЖЕЛЕЗНАЯ СЕМЬЯ Ⓒ 2023 Все права защищены</div>
					<div className={'footer-brand-info'}>ИНН 760413230130</div>
				</div>
				<div className={'footer-right-section'}>
					<div className={'footer-main-info'}>Информация на сайте не является офертой</div>
					<div className={'footer-main-info footer-main-info-link'} onClick={() => navigate('/privacy-policy')}>Политика конфиденциальности и cookie</div>
					<div className={'footer-main-info footer-main-info-link'} onClick={() => navigate('/personal-data')}>Согласие на обработку персональных данных</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer