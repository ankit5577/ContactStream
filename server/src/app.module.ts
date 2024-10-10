import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';
import * as process from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainService } from './blockchain/blockchain.service';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { Contact, ContactSchema } from './schemas/contact.schema';
import { WebhookController } from './weebhook/moralis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.register({
      max: 100,
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      password: process.env.REDIS_PASSWORD,
      username: process.env.REDIS_USERNAME,
      ttl: 2 * 60, // 30 seconds
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [AppController, ContactController, WebhookController],
  providers: [AppService, ContactService, BlockchainService],
})
export class AppModule {}
