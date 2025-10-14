"use client"

import { useSession } from "@lib/auth_client"
import { error } from "console"
import { use, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getUserId } from "../../../server/users"
import { selectAnalysisByUser } from "../../../server/analysis"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { Search } from "lucide-react"

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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

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
                <div className="flex flex-col items-center w-full min-h-screen bg-white">
                 {isLoading ? (
                        <Spinner className="size-8"/>
                      ):(
                        <div className="flex flex-col items-center justify-center w-full px-20 min-h-screen bg-white">
                            <div className="w-full h-auto flex justify-start pb-5">
                              <div className="relative w-auto min-w-sm flex items-center">
                                  {/* Ícone posicionado dentro do input */}
                                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />

                                  <Input
                                    type="search"
                                    placeholder="Pesquisar..."
                                    className="pl-9 w-full placeholder:text-gray-400 h-9"
                                  />
                                </div>
                              <div  className="w-1/3 h-8 flex justify-start pl-2">
                                  <Select >
                                    <SelectTrigger className="w-[180px]">
                                      <SelectValue placeholder="Quantidade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="light">5</SelectItem>
                                      <SelectItem value="dark">10</SelectItem>
                                      <SelectItem value="system">15</SelectItem>
                                    </SelectContent>
                                  </Select>
                              </div>
                              
                            </div>
                            <Table >
                            <TableCaption>
                              <div className="w-full h-auto px-10 flex justify-center">
                                <div className="w-auto h-auto ">
                                    <Pagination>
                                      <PaginationContent>
                                        <PaginationItem>
                                          <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                          <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                          <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                          <PaginationNext href="#" />
                                        </PaginationItem>
                                      </PaginationContent>
                                    </Pagination>
                                </div>
                                
                              </div>
                            </TableCaption>
                            <TableHeader>
                              <TableRow > 
                                <TableHead className="w-20">ID</TableHead>
                                <TableHead className="w-40">Nome</TableHead>
                                <TableHead className="w-40">Data</TableHead>
                                <TableHead className="w-20">Quantidade</TableHead>
                                <TableHead className="w-100">Amostra</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                                {analyses.map((item, index) => (
                                  <TableRow >
                                    <TableCell className="text-center">{index + 1}</TableCell>
                                    <TableCell className="text-center">Nome da amostra</TableCell>
                                    <TableCell className="text-center">{new Date(item.dt_creation).toLocaleString()}</TableCell>
                                    <TableCell className="text-center" >Quantidade de blastos</TableCell>
                                    <TableCell className="flex justify-center">
                                        <img className="w-60 h-60"  />
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
