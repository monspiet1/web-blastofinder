import 'dotenv/config'
import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    out: './drizzle', // local de saída do resultado da migração
    schema: './db/schema.ts', // schema que define as tabelas e será usado na migração
    dialect:'postgresql', // banco de dados utilizado
    dbCredentials: {
        url: process.env.DATABASE_URL!, // credenciais de acesso ao banco definidas no .env
    },
});