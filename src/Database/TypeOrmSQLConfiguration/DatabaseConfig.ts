import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class UserPortalDB implements TypeOrmOptionsFactory {
  constructor(/*private readonly configService: ConfigService*/) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      synchronize: false,
      logging: false,
      host: ,
      port: ,
      username: ,
      password: ,
      database: ,
      entities: [__dirname + '/../../**/*Model{.ts,.js}'],
    };
  }
}
