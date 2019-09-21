import React from 'react'
import { ReactComponent as MetaMaskLogo } from './Assets/WalletLogos/meta-mask-logo.svg'
import { ReactComponent as TrustWalletLogo } from './Assets/WalletLogos/trust-wallet-logo.svg'

const wallets = {
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