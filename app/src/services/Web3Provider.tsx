'use client'

import { Chain, RainbowKitProvider, darkTheme, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createStorage } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'

const arbitrumSepoliaRpc = {
  id: 421614,
  name: 'Arbitrum Sepolia',
  iconUrl: '',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://arbitrum-sepolia.blockpi.network/v1/rpc/public'],
    },
  },
  blockExplorers: {
    default: { name: 'Arbiscan', url: 'https://sepolia-explorer.arbitrum.io/' },
  },
  contracts: {
    multicall3: {
      address: arbitrumSepolia.contracts?.multicall3?.address,
      blockCreated: arbitrumSepolia.contracts?.multicall3?.blockCreated,
    },
  },
} as const satisfies Chain

export const config = getDefaultConfig({
  appName: 'Contact Stream DApp',
  storage: createStorage({
    storage: typeof window !== 'undefined' && window.localStorage,
  }),
  batch: { multicall: true },
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet],
    },
  ],
  projectId: 'XXXXX',
  chains: [arbitrumSepoliaRpc],
  ssr: false,
  pollingInterval: 10_000,
})

const queryClient = new QueryClient()

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          showRecentTransactions={true}
          theme={darkTheme({ overlayBlur: 'small' })}
          modalSize='compact'
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
