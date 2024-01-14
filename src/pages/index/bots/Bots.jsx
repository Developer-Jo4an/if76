import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'

import './bots.css'

const Bots = () => {
    return (
        <section className={'bots-section'}>
            <div className={'bots-wrapper'}>
                <h2 className={'bots-header'}>ЕСЛИ У ВАС ВОЗНИКЛИ ВОПРОСЫ, НАШИ БОТЫ ВСЕГДА ГОТОВЫ ПОМОЧЬ ВАМ!</h2>
                <ul className={'bots-links-wrapper'}>
                    <li className={'bot-link-li'}><a className={'bot-link'}><FontAwesomeIcon icon={ faVk }/> </a></li>
                    <li className={'bot-link-li'}><a className={'bot-link'}><FontAwesomeIcon icon={ faTelegram }/></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Bots