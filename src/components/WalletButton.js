import './WalletButton.css';

function WalletButton({
    wrapperStyle = {
        padding: "14.5px 0px"
    },
    wordStyle = {
        fontSize: "18px"
    }
}) {
    return (
        <div className='wallet-wrapper'
            style={wrapperStyle}>
            <div className="wallet"
                style={wordStyle}>
                Connect Wallet
            </div>
        </div>
    )
}

export default WalletButton;
