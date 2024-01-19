import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Price from '../../../../images/price/price.png'

import './price-modal-window.css'

const PriceModalWindow = ({ closeFunc }) => {
    return (
        <div className={'price-modal-window'}>
            <img className={'price-img'} src={ Price } alt='price-img'/>
            <button className={'price-modal-window-close-btn'} onClick={ closeFunc }><FontAwesomeIcon icon={ faXmark }/></button>
        </div>
    )
}

export default PriceModalWindow