"use client"

import {ColumnDef} from "@tanstack/react-table"

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
        cell: ({row}) => row.index + 1,
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "Nome"
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
        header: "N. Blastos"
    },
    {
    header: "Imagem",
    cell: ({ row }) => {
      // apenas um exemplo: usando uma imagem da pasta public
      const firstPrediction = row.original.detected_objects.prediction[0]
      return firstPrediction ? (
        <img
          src={`../../assets/image_example.jpg`} 
          alt={firstPrediction.class}
          className="w-20 h-20 object-cover rounded"
        />
      ) : (
        <span>—</span>
      )
    },
  },
]