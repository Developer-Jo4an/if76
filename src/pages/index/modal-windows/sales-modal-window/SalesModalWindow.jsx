import React from 'react'

import { useIndexContext } from '../../general/IndexProvider'
import { sales } from './sales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './sales-modal-window.css'

const SalesModalWindow = () => {

    const { salesMW } = useIndexContext()
    const [_, satSalesState] = salesMW

    return (
        <div className={'sales-modal-window'}>
            <button className={'sales-modal-window-close-btn'} onClick={() => satSalesState(false)}><FontAwesomeIcon icon={ faXmark }/></button>
            <div className={'sales-wrapper'}>
                <ul className={'sales-list'}>
                    { sales.map((sale, index, arr) => {
                        const component = sale.getComponent
                        if (arr.length - 1 !== index) return <div className={'last-sale'} key={ Math.random().toString() }>{ component }</div>
                        return component
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default SalesModalWindow