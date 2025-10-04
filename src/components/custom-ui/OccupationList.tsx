"use client";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function OccupationList() {
  const [occupations, setOccupations] = useState<{id:number, description: string}[]>([]);

  useEffect(() => {
    fetch("/api/occupation") // se atentar ao nome das pastas, devem estar de acordo
      .then(res => res.json())
      .then(data => {
        setOccupations(data)
      });
  }, []);

  return (
    <Select>
        <SelectTrigger className="w-full rounded-4xl text-black hover:bg-accent">
                <SelectValue placeholder="Escolha a ocupação" />
        </SelectTrigger>
        <SelectContent>
            {occupations.map((occ, i) => (
            <SelectItem key={occ.id} value={occ.description}>
                {occ.description} 
            </SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}
