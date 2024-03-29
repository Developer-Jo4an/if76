import React from 'react'
import MoreHeader from '../../../components/header/more-header/MoreHeader'
import Footer from '../../../components/footer/Footer'

import './personal-data.css'

const PersonalData = () => {

    window.scrollTo(0, 0)

    return (
        <div className={'personal-data'}>
            <MoreHeader pageName={'Согласие на обработку персональных данных'}/>
            <div className={'personal-data-info'}>
                Настоящим свободно, своей волей и в своем интересе даю согласие
                ИП Маховой Екатерине Владимировне (далее – Оператор), на автоматизированную
                обработку моих персональных данных, в соответствии со следующим перечнем:
                имя, номер телефона, электронная почта, место проживания (при необходимости),
                адрес доставки посылки (при необходимости) и условия заказа в случае заполнения
                мною любых форм на Сайте Оператора; источник захода на сайт https://if76.ru
                (далее – Сайт Оператора) и информация поискового или рекламного запроса;
                данные о пользовательском устройстве (среди которых разрешение, версия и
                другие атрибуты, характеризующие пользовательское устройство); пользовательские
                клики, просмотры страниц, заполнения полей, показы и просмотры баннеров и видео;
                данные, характеризующие аудиторные сегменты; параметры сессии; данные о времени
                посещения; идентификатор пользователя, хранимый в cookie, для целей повышения
                осведомленности посетителей Сайта Оператора о продуктах и услугах Оператора,
                предоставления релевантной рекламной информации и оптимизации рекламы. Оператор
                вправе осуществлять обработку моих персональных данных следующими способами:
                сбор, запись, систематизация, накопление, хранение, обновление, изменение
                , использование, передача (распространение, предоставление, доступ), в том числе
                с использованием интернет сервисов «Яндекс.Метрика» и «Google Analytics».
                Срок обработки персональных данных — в течение трех дней с даты проявления
                последней активности на сайте либо до отзыва персональных данных субъектом
                персональных данных. При предоставлении настоящего согласия я подтверждаю,
                что я являюсь совершеннолетним лицом. Настоящее согласие вступает в силу с
                момента моего перехода на Сайт Оператора и действует в течение сроков, установленных
                действующим законодательством РФ, Политикой Конфиденциальности Оператора.
            </div>
            <Footer/>
        </div>
    )
}

export default PersonalData