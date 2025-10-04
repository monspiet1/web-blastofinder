"use server"

import {auth} from "@lib/auth"
import { error } from "console"
import { success } from "zod"
import { session, user } from "../db/schema"
import { db } from "../db/drizzle"
import { eq, sql } from "drizzle-orm"

export const signIn = async (email: string, password: string) => {

    try{
        await auth.api.signInEmail({ // login, neste caso, com as credenciais digitadas
                body: {
                    email,
                    password,
                }
            })
           
            // para exibir alguma mensagem
            return {
                success: true,
                message: "Login efetuado com sucesso",
            }
         } catch (error) {
            const e = error as Error
            return {
                success: false,
                message: e.message || "Erro desconhecido"
            }
            };
    }


export const signUp = async (email: string, password: string, name: string, birth: string, occupation: string) => { // mando todos os dados a serem inseridos
        try{
            const res = await auth.api.signUpEmail({ // insiro os dados de nome, email e password usando a função do better auth
                    body: {
                        email,
                        password,
                        name,
                    }
                })
            
            const userId = res.user.id
            
            // uso o user.id retornado para inserir o resto dos dados neste user
            await db.update(user)
                .set({
                    birthday: birth,
                    id_occupation: occupation,
                })
                .where(eq(user.id, userId));

            // para exibir alguma mensagem
            return {
                success: true,
                message: "Cadastro efetuado com sucesso",
            }
         } catch (error) {
            const e = error as Error
            return {
                success: false,
                message: e.message || "Erro desconhecido"
            }
            };
}
