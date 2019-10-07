import { Connectors } from 'web3-react'
import PortisApi from "@portis/web3"
import WalletConnectApi from "@walletconnect/web3-subprovider"
import FortmaticApi from "fortmatic";

const { InjectedConnector, PortisConnector, FortmaticConnector, WalletConnectConnector } = Connectors

const supportedNetworkURLs = {
    1: "https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f",
    42: "https://kovan.infura.io/v3/60ab76e16df54c808e50a79975b4779f"
  };

  const defaultNetwork = 1;

// @dev Add Web3React Connector Below
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 42] })

const TrustWallet = new InjectedConnector({ supportedNetworks: [1, 42] })

const Portis = new PortisConnector({
    api: PortisApi,
    dAppId: "74fb2e81-09ae-4900-b039-ddd31e72243d",
    network: "mainnet"
})

const Fortmatic = new FortmaticConnector({
    api: FortmaticApi,
    apiKey: "pk_live_F95FEECB1BE324B5",
    logoutOnDeactivation: false
  });

const WalletConnect = new WalletConnectConnector({
    api: WalletConnectApi,
    bridge: "https://bridge.walletconnect.org",
    supportedNetworkURLs,
    defaultNetwork
  });

export default { MetaMask, TrustWallet, Portis, Fortmatic, WalletConnect }