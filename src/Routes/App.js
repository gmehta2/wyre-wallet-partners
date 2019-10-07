import React, {useState, useEffect } from 'react'
import { useWeb3Context } from 'web3-react';
import {getIdFromWallet} from './../config'
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import Logo from './../Assets/PartnerLogos/binance-logo.svg'
import {useScript} from './../Hooks'

function App() {
    const verifyScriptUrl = 'https://verify.sendwyre.com/js/verify-module-init-beta.js'

    const[id, setId] = useState({})
    const context = useWeb3Context()
    const [loaded, error] = useScript(
        verifyScriptUrl
    );

    // If they're using wallet connect
    if (context.active && context.connectorName === "WalletConnect") {
        if (!context.account) {
        WalletConnectQRCodeModal.open(
            context.connector.walletConnector.uri,
            () => {}
        );
        } else {
            try {
                WalletConnectQRCodeModal.close();
            } catch {}
        }
    }

    // Detect partner based on URL
    useEffect(() => {
        const url = window.location.href
        let checkLocalHostStart = url.indexOf('/') + 2
        let checkLocalHostEnd = checkLocalHostStart + 9
        let wallet
        let pathname = new URL(url).pathname
        if (pathname === '/' && url.substring(checkLocalHostStart, checkLocalHostEnd) === 'localhost') {
            wallet = 'localhost'
        } else {   
            wallet = pathname.substring(1, pathname.length)
        }
        let res = getIdFromWallet(wallet)
        setId(res)
    }, [id])

    // Connect to partner's preferred web3 wallet
    useEffect(() => {
        if (!context.active && !context.error) {
            context.setConnector(id.connector, { suppressAndThrowErrors: true }).catch(() => {})
        }
    }, [id])

    // Instantiate the widget
    useEffect(() => {
        let widget = null
        function init() {
            // debit card
            if (window.Wyre !== undefined && context.active) {
                widget = new window.Wyre({
                    env: 'test',
                    operation: {
                        type: 'debitcard',
                        dest: context.account
                    }
                });
        
                widget.on('ready', function(e) {
                    widget.open();
                })
        
                widget.on('close', function(e) {
                    init()
                })
            }
        }
        init()
    }, [loaded, error, context])

    // **HERE - trying to get the logo into the widget** 
    const classes = {
        'widget-header': {
            display: 'flex',
            backgroundColor: '#fff !important',
            backgroundImage: 'none !important',
        },
        '.text-white': {
            display: 'flex',
            color: 'transparent !important',
            background: 'url(' + id.logo + ') !important',
            backgroundRepeat: 'no-repeat !important',
            backgroundPosition: 'center !important',
            width: '100% !important'
        },
        'widget-body': {
            backgroundColor: '#fff !important'
        }
    }
    const selectedClasses = `${classes['widget-header']} ${classes['text-white']} ${classes['widget-body']}`

    return (  
        <>
            <div 
                className="App"
                style={{
                    width: '102%',
                    height: '102%',
                    top: '-1',
                    left: '-1',
                    overflow: 'scroll',
                    paddingTop: '100%',
                    alignItems: 'center',
                    background: 'url(' + id.background + ')',
                    filter: 'blur(5px) brightness(0.9)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top'
                }}
            >        
            </div>

            {/* widget */}
            <div 
                id="wyre-dropin-widget-container"
                className={selectedClasses}
            >
            </div>
        </>
    );
}

export default App;
