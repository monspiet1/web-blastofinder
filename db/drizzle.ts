import { drizzle } from 'drizzle-orm/node-postgres';
import { occupation } from './schema';


export const db = drizzle(process.env.DATABASE_URL!);
