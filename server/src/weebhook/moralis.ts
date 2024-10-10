import { Body, Controller, Post, Res } from '@nestjs/common';
import { ethers } from 'ethers';
import { Response } from 'express';
import { ContactService } from '../contact/contact.service';
import { CreateContactDto } from '../contact/dto/create-contact-dto';

@Controller('/webhook')
export class WebhookController {
  constructor(private readonly contactService: ContactService) {}

  @Post('moralis')
  async handleEvent(@Body() body: any, @Res() res: Response) {
    if (!body.logs || body.logs.length === 0) {
      console.log('Received test webhook from Moralis');
      return res.status(200).send('Test webhook received');
    }

    const eventABI = [
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
    ];

    const logs = body.logs[0];

    const iface = new ethers.utils.Interface(eventABI);
    const decodedEvent = iface.decodeEventLog('ContactCreated', logs.data);

    const { name, email, phone } = decodedEvent;

    console.log('Decoded Event:', { name, email, phone });

    const contactDto: CreateContactDto = {
      name,
      email,
      phone: phone.toString(),
    };

    await this.contactService.createContact(contactDto);

    return res.status(200).send('Event processed');
  }
}
