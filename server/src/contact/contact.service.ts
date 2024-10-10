import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import { Model } from 'mongoose';
import { Contact } from 'src/schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact-dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async createContact(contactDto: CreateContactDto): Promise<Contact> {
    const createdContact = await this.contactModel.create(contactDto);
    // save the dto as Document in mongo
    return createdContact.save();
  }

  async getAllContacts(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }
}
