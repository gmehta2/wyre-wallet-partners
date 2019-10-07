
// Import your background here
import ExampleBackground from './Assets/PartnerBackgrounds/meta-mask-background.png'
import MetaMaskBackground from './Assets/PartnerBackgrounds/meta-mask-background.png'
import TrustWalletBackground from './Assets/PartnerBackgrounds/trust-wallet-background.png'
import PortisBackground from './Assets/PartnerBackgrounds/portis-background.png'
import FortmaticBackground from './Assets/PartnerBackgrounds/fortmatic-background.png'

// Import your logo here
import BinanceLogo from './Assets/PartnerLogos/binance-logo.svg'

export const wallets = {
    example: { // define your object in all lowercase letters
        name: 'Example Wallet', // The name may have spaces if desired
        connector: 'ExampleWallet', // The connector should have no spaces. This is the Web3 React Connector. This will also be the url path
        background: ExampleBackground, // Import your background
        logo: BinanceLogo
    },
    localhost: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: MetaMaskBackground,
        logo: BinanceLogo
    },
    metamask: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: MetaMaskBackground,
        logo: BinanceLogo 
    },
    trustwallet: {
        name: 'Trust Wallet',
        connector: 'TrustWallet',
        background: TrustWalletBackground,
        logo: BinanceLogo
    },
    portis: {
        name: 'Portis',
        connector: 'Portis',
        background: PortisBackground,
        logo: BinanceLogo
    },
    fortmatic: {
        name: 'Fortmatic',
        connector: 'Fortmatic',
        background: FortmaticBackground,
        logo: BinanceLogo
    }
}

export function getIdFromWallet(wallet) {
    return wallets[wallet]
}