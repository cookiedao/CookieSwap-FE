import './WalletButton.css';
import {useConnect, userSessionState} from "../lib/connect/auth";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";

function WalletButton({
                          wrapperStyle = {
                              padding: "14.5px 0px"
                          },
                          wordStyle = {
                              fontSize: "18px"
                          }
                      }) {
    const {userSession} = useConnect()
    const [isSignedIn, setIsSignedIn] = useState(false);
    const {handleOpenAuth, handleSignOut} = useConnect();

    useEffect(() => {
        setIsSignedIn(userSession.isUserSignedIn())
    })

    return (
        <div className='wallet-wrapper'
             style={wrapperStyle}>
            <Button
                className="wallet"
                onClick={isSignedIn ? () => handleSignOut() : () => handleOpenAuth()}
                style={wordStyle}
            >
                {isSignedIn ? "Disconnect" : "Connect Wallet"}
            </Button>
        </div>
    )
}

export default WalletButton;
