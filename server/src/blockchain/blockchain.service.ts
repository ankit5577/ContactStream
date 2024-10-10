import { Injectable, OnModuleInit } from '@nestjs/common';
import Moralis from 'moralis';

@Injectable()
export class BlockchainService implements OnModuleInit {
  async onModuleInit() {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
    console.log('Moralis Initialized');
    this.setupEventStream();
  }

  private async setupEventStream() {
    try {
      const topic0 =
        '0x487f94037cb390713b1c694d60144941859c8ec426cf55db82ea272986bca5a3';

      const stream = await Moralis.Streams.add({
        tag: 'contact-created-stream',
        description: 'Listening to ContactCreated event on Arbitrum Sepolia',
        chains: ['0x66eee'],
        abi: [
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                indexed: false,
                internalType: 'string',
                name: 'email',
                type: 'string',
              },
              {
                indexed: false,
                internalType: 'uint256',
                name: 'phone',
                type: 'uint256',
              },
            ],
            name: 'ContactCreated',
            type: 'event',
          },
        ],
        webhookUrl: `${process.env.API_URL}webhook/moralis`,
        includeContractLogs: true,
        topic0: [topic0],
      });

      const { id } = stream.toJSON();

      await Moralis.Streams.addAddress({
        id,
        address: `${process.env.CONTRACT_ADDR}`,
      });

      console.log('Stream Created and Contract Address Added:', stream);
    } catch (e) {
      console.error('Error setting up the stream :/ :', e);
    }
  }
}
