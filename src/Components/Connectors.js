import { Connectors } from 'web3-react'

const { InjectedConnector } = Connectors

// Add Web3React Connector Here
const MetaMask = new InjectedConnector({ supportedNetworks: [42] })
const TrustWallet = new InjectedConnector({ supportedNetworks: [42] })

export default { MetaMask, TrustWallet }