import React from 'react'

import { botsArray } from './botsArray'

import './bots.css'

const Bots = () => {
    return (
        <section className={'bots-section'}>
            <div className={'bots-wrapper'}>
                <h2 className={'bots-header'}>ЕСЛИ У ВАС ВОЗНИКЛИ ВОПРОСЫ, НАШИ БОТЫ ВСЕГДА ГОТОВЫ ПОМОЧЬ ВАМ!</h2>
                <ul className={'bots-list'}>{ botsArray.map(bot => bot.getComponent) }</ul>
            </div>
        </section>
    )
}

export default Bots