import { Info } from '../../../classes/classes'
import { faCalendarDays, faDumbbell, faPeopleGroup, faPercent } from '@fortawesome/free-solid-svg-icons'


export const infoArray = [
	new Info(
		faPeopleGroup,
		'ОПЫТНЫЕ ТРЕНЕРЫ, ЭНЕРГИЧНАЯ КОМАНДА'
	),
	new Info(
		faPercent,
		'БОЛЕЕ 10 ВИДОВ АБОНЕМЕНТОВ И СИСТЕМА СКИДОК'
	),
	new Info(
		faDumbbell,
		'СОВРЕМЕННОЕ ОБОРУДОВАНИЕ И ТРЕНАЖЕРЫ'
	),
	new Info(
		faCalendarDays,
		`УДОБНЫЙ ГРАФИК\nПН-ПТ.9:00-21:00\nСБ.9:00-19:00\nВС.9:00-17:00`
	)
]