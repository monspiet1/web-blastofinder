"use server"

import { success } from "zod"
import { db } from "../db/drizzle"
import { occupation } from "../db/schema"


export const getOccupations = async () => {
    const res = await db.select({id: occupation.id_occupation, desc: occupation.ds_occupation}).from(occupation)

    try{
        return {
            success:true,
            data:res
        }
    }
    catch (error) {
            const e = error as Error
            return {
                success: false,
                message: e.message || "Erro desconhecido"
            }
            };

}