import React from 'react'

// Import your background here
import ExampleBackground from './Assets/WalletLogos/meta-mask-background.svg'
import MetaMaskBackground from './Assets/WalletLogos/meta-mask-background.svg'
import TrustWalletBackground from './Assets/WalletLogos/trust-wallet-background.svg'

const wallets = {
    example: { // define your object in all lowercase letters
        name: 'Example Wallet', // The name may have spaces if desired
        connector: 'ExampleWallet', // The connector should have no spaces. This is the Web3 React Connector
        background: ExampleBackground // Import your logo as a React Component. Please add padding of 52 pixels.
    },
    localhost: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: MetaMaskBackground
    },
    metamask: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: MetaMaskBackground 
    },
    trustwallet: {
        name: 'Trust Wallet',
        connector: 'TrustWallet',
        background: TrustWalletBackground
    }
}

export function getIdFromWallet(wallet) {
    return wallets[wallet]
}