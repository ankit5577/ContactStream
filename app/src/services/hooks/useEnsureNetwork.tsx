import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const useEnsureNetwork = () => {
  const { chainId, isConnected } = useAccount()
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false)

  useEffect(() => {
    const desiredChainId = '0x66eee' // hard coded to Arbitrum Sepolia

    const checkNetwork = () => {
      if (chainId === parseInt(desiredChainId, 16)) {
        setIsCorrectNetwork(true)
      } else {
        setIsCorrectNetwork(false)
        switchNetwork()
      }
    }

    const switchNetwork = async () => {
      const provider = typeof window != 'undefined' && window.ethereum
      if (!provider || !isConnected) return

      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: desiredChainId }],
        })
        setIsCorrectNetwork(true)
      } catch (error) {
        if (error.code === 4902) {
          try {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: desiredChainId,
                  chainName: 'Arbitrum Sepolia',
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  rpcUrls: ['https://arbitrum-sepolia.blockpi.network/v1/rpc/public'],
                  blockExplorerUrls: ['https://sepolia-explorer.arbitrum.io'],
                },
              ],
            })
            setIsCorrectNetwork(true)
          } catch (addError) {
            console.error('Failed to add the network:', addError)
            setIsCorrectNetwork(false)
          }
        } else {
          console.error('Failed to switch to the network:', error)
          setIsCorrectNetwork(false)
        }
      }
    }

    checkNetwork()
  }, [chainId, isConnected])

  return { isCorrectNetwork }
}

export default useEnsureNetwork
