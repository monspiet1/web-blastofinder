"use client"

import { useSession } from "@lib/auth_client"
import { error } from "console"
import { use, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getUserId } from "../../../server/users"
import { selectAnalysisByUser } from "../../../server/analysis"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Analysis(){
  const {data:session, isPending} = useSession()
  const [analyses, setAnalyses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  
  /*
  const handleInsertAnalysis1 = async () =>{
   
    if (!session?.user?.id) return;


    const analise1: a = {
    detected_objects: {
      prediction: [
        {x: 10, y:20, width:100, height: 300, confidence:0.90, class:"Blasto", class_id:0}
      ],
      image: {width: 400, height: 400}
    },
    dt_creation: new Date(),
    id_user: session.user.id
  }

    try{
       await fetch('/api/analysis', {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(analise1)
      })
      alert("Análise criada com sucesso!");
    }
   catch (err) {
      alert("Erro ao criar análise");
    }
   
  }

  const handleInsertAnalysis2 = async () =>{
    const router = useRouter()
     if (!session?.user?.id) return;
   
    const analise2: a = {
    detected_objects: {
      prediction: [
        {x: 60, y:83, width:129, height: 827, confidence:0.97, class:"Blasto", class_id:0}
      ],
      image: {width: 400, height: 400}
    },
    dt_creation: new Date(),
    id_user: session.user.id
  }

    try{
      const res = await fetch('api/analysis', {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(analise2)
      })
      alert("Análise criada com sucesso!");
      router.refresh()
    }
   catch (err) {
      alert("Erro ao criar análise");
    }
   
  }*/

  useEffect(() => {
    const fetchAnalysis = async() => {
      if (!session?.user?.id) return;
      setIsLoading(true)
      const res = await selectAnalysisByUser(session.user.id)
      setIsLoading(false)
      setAnalyses(res)
    }

    fetchAnalysis()
  },[session])
  
  if(isPending){
    return(
      <div className="w-full min-h-screen flex items-center justify-center pt-10 pb-20">
        <Spinner className="size-8"/>
      </div>
    )
  }
  else{
      return(
              <div className="w-full min-h-svh flex justify-center pt-10 pb-20">
                <div className="flex flex-col items-center w-400 min-h-screen bg-white">
                 {isLoading ? (
                        <Spinner className="size-8"/>
                      ):(
                        <div className="flex flex-col items-center w-full min-h-screen bg-white">
                            <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                              <TableRow> 
                                <TableHead className="w-10">ID</TableHead>
                                <TableHead className="w-30">Nome</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Num. objetos detectados</TableHead>
                                <TableHead className="text-center">Local para o spinner</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                                {analyses.map((item, index) => (
                                  <TableRow>
                                    <TableCell className="font-medium h-auto">{item.id_analysis}</TableCell>
                                    <TableCell className="font-medium">Nome</TableCell>
                                    <TableCell>{new Date(item.dt_creation).toLocaleString()}</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="flex">
                                      <Accordion type="single" collapsible className="">
                                        <AccordionItem value="item-1">
                                          <AccordionContent className="flex justify-center items-center pt-10 pl-10">
                                            
                                              <img className="w-60 h-60" src="" alt="" />
                                            
                                          </AccordionContent>
                                          <AccordionTrigger className="flex justify-center"></AccordionTrigger>
                                        </AccordionItem>
                                      </Accordion>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </div>
                      )}

                  
                </div>
                  
              </div>
    )
  }
}
