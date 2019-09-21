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
        description: 'Please keep this description under 150 characters.',
        logo: <ExampleLogo style={{padding: 52}} /> // Import your logo as a React Component. Please add padding of 52 pixels.
    },
    localhost: {
        name: 'MetaMask',
        connector: 'MetaMask',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        description: 'Metamask is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node.',
        logo: <MetaMaskLogo style={{padding: 52}} />
    },
    metamask: {
        name: 'MetaMask',
        connector: 'MetaMask',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        description: 'Metamask is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node.',
        logo: <MetaMaskLogo style={{padding: 52}} />
    },
    trustwallet: {
        name: 'Trust Wallet',
        connector: 'TrustWallet',
        primaryColor: '#2e91db',
        secondaryColor: '#2fbb4f',
        description: 'Trust Wallet is a mobile wallet app that allows you to send, receive and store cryptocurrency tokens on the Ethereum blockchain.',
        logo: <TrustWalletLogo style={{padding: 52}} />
    }
}

export function getIdFromWallet(wallet) {
    return wallets[wallet]
}