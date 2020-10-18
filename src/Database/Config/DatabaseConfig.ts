import { registerAs } from '@nestjs/config';
import { configTokenName } from '../Constants/DatabaseConstants';

export default registerAs(configTokenName, () => ({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  synchronize: Boolean(process.env.DB_SYNCHRONIZE),
  logging: Boolean(process.env.DB_LOGGING),
}));
