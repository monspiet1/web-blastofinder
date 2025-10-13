"use server"

import { eq } from "drizzle-orm"
import { db } from "../db/drizzle"
import { analysis } from "../db/schema"

export const selectAnalysisByUser = async (id: string ) => {

    const res = await db.select().from(analysis).where(eq(analysis.id_user, id))

    return res

}

export const insertAnalysis = async(an: any) => {
    const res = await db.insert(analysis).values(an);

    return res
}