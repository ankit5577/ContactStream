# ContactStream

A decentralized application (dApp) to securely store and manage contacts on the blockchain, integrating a Web3 frontend with a backend powered by NestJS, Redis, MongoDb & deployed on Railway. The project is deployed on the **Arbitrum Sepolia** testnet.

---

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)
- [Blockchain](#blockchain)
- [Faucets](#faucets)
- [Tech Stack](#tech-stack)
- [Development](#development)
- [Deployment](#deployment)

---

## Frontend

The frontend of the **ContactStream** dApp is built using **Next.js** for the interface and deployed on **Cloudflare Pages**.

- **URL:** [Live Deployment](https://contactstream.pages.dev)
- The frontend interacts with the blockchain using **wagmi** and **viem** libraries to communicate with smart contracts deployed on **Arbitrum Sepolia**.
- **Features:**
  - Users can add contacts to the blockchain via a form.
  - All added contacts are fetched and displayed in real-time from the blockchain.
  - Responsive design using **TailwindCSS**.
  - **React Query** for data fetching, caching, and synchronization.
  - Input validation for phone numbers and emails.

---

## Backend

The backend is powered by **NestJS** and acts as an API provider, storing contact information securely on the blockchain and facilitating requests.

- **API URL:** [Railway Deployed Backend](https://contactstream-production.up.railway.app)
- **Port:** Listens to default port `80`.
- **Deployment:** The backend is hosted on **Railway**
- **Endpoints:**
  - `/contact`: For managing contacts.
  - Have used **Redis** with `8sec` TTl.

---

## Blockchain

### Network Information:

- **Blockchain Network:** Arbitrum Sepolia Testnet
- **Chain ID:** 421614 (0x66eee)
- **Smart Contract Address:** [`0x67a5d14124104b0a60EBc8CB6815f35F475604EE`](https://sepolia.arbiscan.io/address/0x67a5d14124104b0a60EBc8CB6815f35F475604EE)
- **Block Explorer:** [Sepolia Arbiscan](https://sepolia.arbiscan.io/)
- **Transaction Hash (Deployed Contract):** [`0x537043adf6733a15bfb67b4d3f91434e204fec861ebb90389f175054fce89a74`](https://sepolia.arbiscan.io/tx/0x537043adf6733a15bfb67b4d3f91434e204fec861ebb90389f175054fce89a74)
- **Contract Verified:** Yes ([View Verified Contract](https://sepolia.arbiscan.io/address/0x67a5d14124104b0a60EBc8CB6815f35F475604EE#code))

### Contract Functionality:

- The contract allows users to add contacts to the blockchain, and once stored, the data is immutable.
- Users can query the contract for saved contacts, with all transactions being transparent and accessible on the Arbitrum Sepolia testnet.

---

## Faucets

To interact with the Arbitrum Sepolia network & test the ContactStream dApp, you can use these faucets to get test ETH:

- Note: You can also use `/faucet` route in Frontend of App, it will transfer some testnet funds from my Wallet to your wallet.

1. [Bitbond Sepolia Faucet](https://tokentool.bitbond.com/faucet/ethereum-sepolia)
2. [Triangle Platform Sepolia Faucet](https://faucet.triangleplatform.com/arbitrum/sepolia)
3. [HackQuest Sepolia Faucet](https://www.hackquest.io/en/faucets)

---

## Tech Stack

### Frontend:

- **Next.js 14**: Statis Site Generation (SSG).
- **React Query**
- **Wagmi & Viem**: For blockchain contract interactions (reading and writing to contracts).
- **TailwindCSS**
- **Framer Motion**: Animation library for smooth UI transitions and interactions.

### Backend:

- **NestJS**
- **TypeScript**
- **MongoDB**

### Blockchain:

- **Arbitrum Sepolia Testnet**: Ethereum layer 2 solution for scaling with low gas fees.
- **Solidity**

---

## Development

### Prerequisites:

1. **Node.js 18.17+**: Ensure you have Node.js 18 or later installed.
2. **Yarn** or **npm** for dependency management.

### Installing Dependencies:

Clone the repository and install the required packages:

```bash
git clone https://github.com/ankit5577/contactstream.git
cd contactstream/frontend
npm install -f

cd ../server
npm install -f

cd ../blockchain
npm install -f
```

### Running the Frontend:

`npm run dev`

This will start the Next.js frontend at http://localhost:3000.

### Running the Backend:

`npm run start`
The NestJS backend will start, listening for requests on the default port from .env

## Deployment

### Frontend:

Platform: `Cloudflare Pages` & have used `Static Site Generation` for speed & efficiency, instead of Server Components.

### Backend:

Platform: `Railway`

- **Redis**: Railway
- **MongoDb**: Railway

### Blockchain:

Contacts smart contract is deployed on `Arbitrum Sepolia` & is `Verified ✅`
