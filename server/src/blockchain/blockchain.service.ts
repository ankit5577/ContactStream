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
    const stream = await Moralis.Streams.add({
      tag: 'contact-created-stream',
      description: 'Listening to ContactCreated event on Arbitrum Sapolia',
      chains: [`0x${process.env.chainId}`],
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
      webhookUrl: '',
      includeNativeTxs: false,
    });

    console.log('Stream Created:', stream);
  }
}
