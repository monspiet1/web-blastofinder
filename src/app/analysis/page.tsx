"use client"

import { useSession } from "@lib/auth_client"
import { error } from "console"
import { use, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getUserId } from "../../../server/users"
import { selectAnalysisByName, selectAnalysisByUser } from "../../../server/analysis"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { Search } from "lucide-react"
import {columns, typeAnalysis} from "./columns"
import { DataTable } from "./data-table"

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

async function getData(): Promise<typeAnalysis[]> {

  // fazer as consultas aqui

  return[]
}


export default function Analysis(){
  const {data:session, isPending} = useSession()
  const [analyses, setAnalyses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const [name, setName] = useState("")
 
  
  /*
  const handleInsertAnalysis1 = async () =>{
   
    if (!session?.user?.id) return;


    const analise1: a = {
    name: "Amostra da marcia",
    detected_objects: {
      prediction: [
        {x: 873, y:827, width:100, height: 300, confidence:0.92, class:"Blasto", class_id:0}
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

      if(name.trim() == ""){
        const res = await selectAnalysisByUser(session.user.id, limit)
        setAnalyses(res)
      } else {
         const res = await selectAnalysisByName(session.user.id, name)
         setAnalyses(res)
      }

      setIsLoading(false)
      
    }

    const delayDebounce = setTimeout(() => {
      fetchAnalysis()
    }, 500)

    return () => clearTimeout(delayDebounce)
  },[session, limit, name])

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
                {isLoading ? (
                        <Spinner className="size-8"/>
                      ):(   
                        <DataTable columns={columns} data={analyses}/>
                      )}   
              </div>
    )
  }
}
