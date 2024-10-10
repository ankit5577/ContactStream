import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact-dto';

@Controller('/contact')
@UseInterceptors(CacheInterceptor)
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() contactDto: CreateContactDto) {
    return this.contactService.createContact(contactDto);
  }

  @Get()
  @CacheKey('contacts')
  async findAll() {
    return this.contactService.getAllContacts();
  }
}
