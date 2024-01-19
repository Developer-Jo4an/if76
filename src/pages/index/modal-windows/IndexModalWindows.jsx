import React from 'react'
import ModalWindowCenter from '../../../components/modal-windows/modal-window-center/ModalWindowCenter'
import SalesModalWindow from './sales-modal-window/SalesModalWindow'
import ModalWindowLeft from '../../../components/modal-windows/modal-window-left/ModalWindowLeft'
import MobileNavigation from './mobile-navigation/MobileNavigation'

import { useIndexContext } from '../general/IndexProvider'

const MemoSalesModalWindow = React.memo(SalesModalWindow, (_, __) => true)
const MemoMobileNavigation = React.memo(MobileNavigation, (_, __) => true)
const IndexModalWindows = () => {

    const { salesMW, mobileNavigationMW } = useIndexContext()
    const [salesState, setSalesState] = salesMW
    const [mobileNavState, setMobileNavState] = mobileNavigationMW

    return (
        <div className={'index-modal-windows'}>
            <ModalWindowCenter visible={ salesState } closeFunc={() => setSalesState(false)}>
                <MemoSalesModalWindow />
            </ModalWindowCenter>
            <ModalWindowLeft visible={ mobileNavState } closeFunc={() => setMobileNavState(false)}>
                <MemoMobileNavigation/>
            </ModalWindowLeft>
        </div>
    )
}

export default IndexModalWindows