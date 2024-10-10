import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from '../contact/contact.service';
import { CreateContactDto } from '../contact/dto/create-contact-dto';

@Controller('/webhook')
export class WebhookController {
  constructor(private readonly contactService: ContactService) {}

  @Post('moralis')
  async handleEvent(@Body() body: any) {
    const eventData = body.event.data;
    const { name, email, phone } = eventData;

    const contactDto: CreateContactDto = {
      name,
      email,
      phone: phone.toString(),
    };

    return this.contactService.createContact(contactDto);
  }
}
