import React, { useState } from 'react'
import ModalWindowCenter from '../../../components/modal-windows/modal-window-center/ModalWindowCenter'
import CoachModalWindow from './modal-window/CoachModalWindow'

import { useIndexContext } from '../general/IndexProvider'
import { coachesArray } from './coaches-array'

import './coaches.css'

const MemoCoachModalWindow = React.memo(CoachModalWindow, (prevProps, nextProps) => {
	const prevActiveCoach = prevProps.coach
	const nextActiveCoach = nextProps.coach

	return prevActiveCoach.name === nextActiveCoach.name
})

const Coaches = () => {

	const { coachesRef } = useIndexContext()

	const [activeCoach, setActiveCoach] = useState(false)
	const [coachMW, setCoachMW] = useState(false)

	const showCoachModalWindow = coach => {
		setActiveCoach(coach)
		setTimeout(() => setCoachMW(true))
	}

	return (
		<section id={'coaches'} className={'coaches-section'} ref={ coachesRef }>
			<h2 className={'coaches-header'}>ПЕРСОНАЛЬНЫЕ ТРЕНЕРЫ</h2>
			<div className={'coaches-wrapper'}>
				<ul className={'coaches-list'}>{ coachesArray.map(coach => coach.getStaticComponent(showCoachModalWindow)) }</ul>
			</div>
			<ModalWindowCenter visible={ coachMW } closeFunc={ () => setCoachMW(false) }>
				<MemoCoachModalWindow coach={ activeCoach } closeFunc={ () => setCoachMW(false) }/>
			</ModalWindowCenter>
		</section>
	)
}

export default Coaches