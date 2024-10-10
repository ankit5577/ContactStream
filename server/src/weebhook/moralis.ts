import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express'; // Import Response from express for HTTP responses
import { ContactService } from '../contact/contact.service';
import { CreateContactDto } from '../contact/dto/create-contact-dto';

@Controller('/webhook')
export class WebhookController {
  constructor(private readonly contactService: ContactService) {}

  @Post('moralis')
  async handleEvent(@Body() body: any, @Res() res: Response) {
    console.log('MORALIS::', body);

    if (!body.logs || body.logs.length === 0) {
      console.log('Received test webhook from Moralis');
      return res.status(200).send('Test webhook received');
    }

    const logs = body.logs[0];
    const eventData = logs.data;

    const { name, email, phone } = eventData;

    const contactDto: CreateContactDto = {
      name,
      email,
      phone: phone.toString(),
    };

    await this.contactService.createContact(contactDto);

    return res.status(200).send('Event processed');
  }
}
