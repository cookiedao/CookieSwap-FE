import React from "react";
import './Header.scss';
import WalletButton from './WalletButton.js';
import {Link} from "react-router-dom";


function Header() {

    return (
        <div className="outer_box">
            <div className="inner_box">
                <div className="nav">
                    <Logo/>
                    <div className="menus">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <MenuItem title="Swap"/>
                        </Link>
                        <Link to={"/pool"} style={{ textDecoration: 'none' }}>
                            <MenuItem title="Pools"/>
                        </Link>
                        <Link to={"/farm"} style={{ textDecoration: 'none' }}>
                            <MenuItem title="Farms"/>
                        </Link>
                        <Link to={"/liquidity"} style={{ textDecoration: 'none' }}>
                            <MenuItem title="Liquidity"/>
                        </Link>
                        <WalletButton wordStyle={
                            {fontSize: "16px"}
                        }
                                      wrapperStyle={
                                          {padding: "8px 16px"}
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

function MenuItem(props) {
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
