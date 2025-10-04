"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type BirthProps = {
  value: string; // agora é string
  onChange: (dateString: string) => void;
};

export function Birth({ value, onChange }: BirthProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
   const selectedDate = value ? new Date(value) : null;

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`w-full justify-between font-normal ${
              date ? "text-black" : "text-muted-foreground"
            }`}
          >
            {date ? date.toLocaleDateString() : "Escolha a data"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate ?? undefined}
            captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date)              // mantém o estado local para exibir no botão
            onChange(date ? date.toISOString() : "") // atualiza o form com string ISO
            setOpen(false)             // fecha o popover
          }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
