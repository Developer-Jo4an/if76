import React from 'react'

import './modal-window-center.css'

const ModalWindowCenter = ({ visible, closeFunc, ...props }) => {
	return (
		<div
			className={`modal-window-center ${!visible ? 'modal-window-hide-mode' : ''}`}
			onClick={ closeFunc }
		>
			<div
				className={'modal-window-center-content'}
				onClick={ event => event.stopPropagation()}
			>
				{ props.children }
			</div>
		</div>
	)
}

export default ModalWindowCenter