"use server"

import { eq, sql , and} from "drizzle-orm"
import { db } from "../db/drizzle"
import { analysis, user } from "../db/schema"

export const selectAnalysisByUser = async (id: string, limit: number) => {

    const res = await db.select().from(analysis).where(eq(analysis.id_user, id)).limit(limit)

    return res

}

export const selectAnalysisByName= async (id: string, name: string) => {

    const res = await db.select().from(analysis).where(and(eq(analysis.id_user, id), eq(analysis.name, `%${name}`)))

    return res

}

export const insertAnalysis = async(an: any) => {
    const res = await db.insert(analysis).values(an);

    return res
}