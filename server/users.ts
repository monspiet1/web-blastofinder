"use server"

import {auth} from "@lib/auth"
import { error } from "console"
import { success } from "zod"
import { session } from "../db/schema"

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
                message: {error: e.message || "Erro desconhecido"}
            }
            };
    }


export const signUp = async (email: string, password: string, name: string) => {
    await auth.api.signUpEmail({ // login, neste caso, com as credenciais digitadas
        body: {
            email,
            password,
            name,
        }
    })
}
