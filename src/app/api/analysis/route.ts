import next from "next"
import { insertAnalysis, selectAnalysisByUser } from "../../../../server/analysis"
import { NextResponse } from "next/server"
import { success } from "zod"
import { analysis } from "../../../../db/schema"


export async function GET () {
    const analysis = ' '

    return NextResponse.json(analysis)
}

export async function POST(req: Request) { // recebe o json no padrão do banco
  try {
    const body = await req.json()

    const analysis = {
        ...body, // mantém o body como está
        dt_creation: new Date(body.dt_creation) // atualiza somente a data para o padrão de data aceito pelo banco
    }
    await insertAnalysis(analysis) // chama a função de inserção do server
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Erro no POST:", err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}