
// Import your background here
import ExampleBackground from './Assets/PartnerBackgrounds/meta-mask-background.png'
import MetaMaskBackground from './Assets/PartnerBackgrounds/meta-mask-background.png'
import TrustWalletBackground from './Assets/PartnerBackgrounds/trust-wallet-background.png'
import PortisBackground from './Assets/PartnerBackgrounds/portis-background.png'
import FortmaticBackground from './Assets/PartnerBackgrounds/fortmatic-background.png'
import BinanceBackground from './Assets/PartnerBackgrounds/binance-background.png'
import LolliBackground from './Assets/PartnerBackgrounds/lolli-background.png'
import CompoundFinanceBackground from './Assets/PartnerBackgrounds/compound-finance-background.png'
import CelsiusBackground from './Assets/PartnerBackgrounds/celsius-background.png'

// Import your logo here
import BinanceLogo from './Assets/PartnerLogos/binance-logo.svg'

// Import your favicon here
import ExampleFavicon from './Assets/PartnerFavicons/wyre-favicon.ico'
import MetaMaskFavicon from './Assets/PartnerFavicons/meta-mask-favicon.ico'
import TrustWalletFavicon from './Assets/PartnerFavicons/trust-wallet-favicon.ico'
import PortisFavicon from './Assets/PartnerFavicons/portis-favicon.ico'
import FortmaticFavicon from './Assets/PartnerFavicons/fortmatic-favicon.ico'
import BinanceFavicon from './Assets/PartnerFavicons/binance-favicon.ico'
import LolliFavicon from './Assets/PartnerFavicons/lolli-favicon.ico'
import CompoundFinanceFavicon from './Assets/PartnerFavicons/compound-finance-favicon.ico'
import CelsiusFavicon from './Assets/PartnerFavicons/celsius-favicon.ico'

export const partners = {
    example: { // define your object in all lowercase letters
        name: 'Example Wallet', // The name may have spaces if desired
        connector: 'MetaMask', // The connector should have no spaces. This is the Web3 React Connector
        background: ExampleBackground, // Import your background
        logo: BinanceLogo, // Import your logo
        favicon: ExampleFavicon, // Import your favicon
        currency: 'ETH'
    },
    localhost: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: ExampleBackground,
        logo: BinanceLogo,
        favicon: ExampleFavicon,
        currency: 'ETH'
    },
    metamask: {
        name: 'MetaMask',
        connector: 'MetaMask',
        background: MetaMaskBackground,
        logo: BinanceLogo,
        favicon: MetaMaskFavicon
    },
    trustwallet: {
        name: 'Trust Wallet',
        connector: 'TrustWallet',
        background: TrustWalletBackground,
        logo: BinanceLogo,
        favicon: TrustWalletFavicon
    },
    portis: {
        name: 'Portis',
        connector: 'Portis',
        background: PortisBackground,
        logo: BinanceLogo,
        favicon: PortisFavicon
    },
    fortmatic: {
        name: 'Fortmatic',
        connector: 'Fortmatic',
        background: FortmaticBackground,
        logo: BinanceLogo,
        favicon: FortmaticFavicon
    },
    binance: {
        name: 'Binance',
        background: BinanceBackground,
        logo: BinanceLogo,
        favicon: BinanceFavicon
    },
    lolli: {
        name: 'Lolli',
        background: LolliBackground,
        logo: BinanceLogo,
        favicon: LolliFavicon,
        currency: 'BTC'
    },
    'compound-finance': {
        name: 'Compound Finance',
        background: CompoundFinanceBackground,
        logo: BinanceLogo,
        favicon: CompoundFinanceFavicon
    },
    celsius: {
        name: 'Celsius Network',
        background: CelsiusBackground,
        logo: BinanceLogo,
        favicon: CelsiusFavicon,
        currency: 'BTC'
    }
}

export function getIdFromPartner(partner) {
    return partners[partner]
}