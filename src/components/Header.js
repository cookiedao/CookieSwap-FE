import React from "react";
import './Header.scss';

function Header() {
    return (
        // TODO: media query for reactive page
        <div className="outer_box">
            <div className="inner_box">
                <div className="nav">
                    <Logo/>
                    <div className="menus">
                        <Menu title="Swap"/>
                        <Menu title="Pools"/>
                        <Menu title="Farms"/>
                        <Menu title="Liquidity"/>
                        <ConnectWalletButton customStyle={
                            {"margin-left": "24px"}
                        }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className="logo">
            <img src="/cookie.svg"/>
            <div className="title paytoneone-normal-heavy-metal-20px">
                CookieSwap
            </div>
        </div>
    );
}

function Menu(props) {
    return (
        <div className="item">
            <div className="poppin-normal-16px">
                {
                props.title
            }</div>
        </div>
    );
}

function ConnectWalletButton(props) {
    return <img className="wallet_icon" src="connect_wallet.png"
        style={
            props.customStyle
        }/>;
}

export default Header;
