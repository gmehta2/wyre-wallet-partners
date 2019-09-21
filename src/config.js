import React from 'react'

// Import your logo here
import { ReactComponent as ExampleLogo } from './Assets/WalletLogos/meta-mask-logo.svg'
import { ReactComponent as MetaMaskLogo } from './Assets/WalletLogos/meta-mask-logo.svg'
import { ReactComponent as TrustWalletLogo } from './Assets/WalletLogos/trust-wallet-logo.svg'

const wallets = {
    example: { // define your object in all lowercase letters
        name: 'Example Wallet', // The name may have spaces if desired
        connector: 'ExampleWallet', // The connector should have no spaces. This is the Web3 React Connector
        primaryColor: 'green', // The primary color in your landing page color scheme
        secondaryColor: 'yellow', // The secondary color in your landing page
        logo: <ExampleLogo style={{padding: 52}} /> // Import your logo as a React Component. Please add padding of 52 pixels.
    },
    localhost: {
        name: 'MetaMask',
        connector: 'MetaMask',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        logo: <MetaMaskLogo style={{padding: 52}} />
    },
    metamask: {
        name: 'MetaMask',
        connector: 'MetaMask',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        logo: <MetaMaskLogo style={{padding: 52}} />
    },
    trustwallet: {
        name: 'Trust Wallet',
        connector: 'TrustWallet',
        primaryColor: '#2e91db',
        secondaryColor: '#2fbb4f',
        logo: <TrustWalletLogo style={{padding: 52}} />
    }
}

export function getIdFromWallet(wallet) {
    return wallets[wallet]
}