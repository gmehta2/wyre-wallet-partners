import React, { useEffect } from 'react'
import { ethers } from 'ethers'
import { useWeb3Context, Connectors } from 'web3-react'
import StyledButton from './../StyledComponents/StyledButton'

const { Connector } = Connectors

export default function ConnectButton() {
  const { active, account, setConnector, error } = useWeb3Context()

  useEffect(() => {
    if (!active && !error && window.ethereum) {
      const library = new ethers.providers.Web3Provider(window.ethereum)
      library.listAccounts().then(accounts => {
        if (accounts.length >= 1) {
          setConnector('MetaMask', { suppressAndThrowErrors: true }).catch(() => {})
        }
      })
    }
  })

    function instantiate() {
        setConnector('MetaMask')
        // instantiate Wyre Widget
    }

    return (
        <>
            {error ? (
                error.code === Connector.errorCodes.UNSUPPORTED_NETWORK ? (
                <p>Please switch to the Kovan Test Network to buy cryptocurrency.</p>
                ) : (
                <p>An error occurred.</p>
                )
            ) : (
                <StyledButton
                    onClick={() => {
                        instantiate()
                    }}
                    color="primary"
                    text='Buy Cryptocurrency!'
                />
            )}
        </>
    )
}