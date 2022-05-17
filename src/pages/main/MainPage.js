import './MainPage.css';
import settingSrc from '../../static/images/icon_setting.png';
import downArrowSrc from '../../static/images/down-arrow.svg';
import swapSrc from '../../static/images/swap.png';
import WalletButton from '../../components/WalletButton.js';

function Area({
    showMaxButton = false,
    amount = "35.0"
}) {
    return (
        <div className='contents'>

            <div className='balance-wrapper'>
                <div className='balance'>
                    Balance: 79.12312
                </div>
                {
                showMaxButton && <div className='badge'>
                    max
                </div>
            } </div>

            <div className='currency-wrapper'>
                <div className='currency'>
                    <div className='circle'></div>
                    <span>STX</span>
                    <img src={downArrowSrc}
                        width="11px"
                        height="19px"/>
                </div>
                <span>{amount}</span>
            </div>
        </div>

    )
}

const MainPage = () => {
    return (
        <div className="main">
            <div className="title">
                <h5>swap</h5>
                <img src={settingSrc}
                    width="24px"
                    height="24px"/>
            </div>
            <div className='area-wrapper'>
                <Area showMaxButton
                    amount={"15.0"}/>
                <img className="img-area"
                    src={swapSrc}/>
                <Area amount={"20.0"}/>

                <div className="slippage-wrapper">
                    <span className="slippage-title">Slippage Tolerance</span>
                    <span className="slippage-value">0.50%</span>
                </div>
            </div>
            <WalletButton wordStyle={
                {fontSize: "18px"}
            }/>
        </div>
    )
}


export default MainPage;
