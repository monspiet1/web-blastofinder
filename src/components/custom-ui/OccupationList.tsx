"use client";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getOccupations } from "../../../server/occupation";

type Occupation = {
  id: number
  desc: string
}

export default function OccupationList() {
  const [occupations, setOccupations] = useState<Occupation[]>([]);


  useEffect(() => {
      const fetchData = async () => {
        const res = await getOccupations()
        if (res.success && res.data) {
          setOccupations(res.data)
        } else {
          console.error(res.message)
        }
      }

      fetchData()
  }, [])

  return (
    <Select>
        <SelectTrigger className="w-full text-black hover:bg-accent">
                <SelectValue placeholder="Escolha a ocupação" />
        </SelectTrigger>
        <SelectContent>
            {occupations.map((occ) => (
            <SelectItem key={occ.id} value={occ.desc}>
                {occ.desc} 
            </SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}
