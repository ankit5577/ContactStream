import { providers } from 'ethers'
import { useMemo } from 'react'
import { Config, useClient } from 'wagmi'

// convert to ethers.js signer
export function clientToSigner(client: any) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
