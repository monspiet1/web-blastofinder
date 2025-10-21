"use client"

import {ColumnDef} from "@tanstack/react-table"
import { useEffect } from "react"
import Expanded from "./expanded"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


export type typeAnalysis = {
    name: string
    detected_objects: {
      prediction: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        confidence: number;
        class: string;
        class_id: number;
      }>;
      image: {
        url: ""
        width: number;
        height: number;
      };
    };
    dt_creation: Date;
    id_user: string | undefined;
  
}

export const columns: ColumnDef<typeAnalysis>[]= [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="hover:cursor-pointer"
            >
              ID
              <ArrowUpDown className="ml-2 h-4 w-4 hover:cursor-pointer" />
            </Button>
          ),
          cell: ({ row }) => row.index + 1, 
          },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="hover:cursor-pointer"
            >
              Nome
              <ArrowUpDown className="ml-2 h-4 w-4 hover:cursor-pointer" />
            </Button>
          ),
    },
    {
        accessorFn: (row) =>
        new Date(row.dt_creation).toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
        }),
        header: "Data"
    },
    {
        accessorFn: (row) => row.detected_objects.prediction.length,
        header: "Qtd. Blastos"
    },
    {
    header: "Imagem",
    cell: ({ row }) => {
      // apenas um exemplo: usando uma imagem da pasta public
      const firstPrediction = row.original.detected_objects
      const name = row.original.name
      
      const date = new Date(row.original.dt_creation).toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
        })
      
      return firstPrediction ? (
        
        <Expanded src="/blasto.jpg" alt={firstPrediction} name={name} date={date} id={row.index+1}/>

      ) : (
        <span>—</span>
      )
    },
  },
]