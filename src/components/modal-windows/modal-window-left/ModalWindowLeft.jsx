import React from 'react'

import './modal-window-left.css'

const ModalWindowLeft = ({visible, closeFunc, ...props}) => {
    return (
        <div className={`modal-window-left ${!visible ? 'modal-window-hide-mode' : ''}`} onClick={ closeFunc }>
            <div
                className={`modal-window-left-content ${!visible ? '' : 'modal-window-left-content-active'}`}
                onClick={e => e.stopPropagation()}
            >{ props.children }</div>
        </div>
    )
}

export default ModalWindowLeft