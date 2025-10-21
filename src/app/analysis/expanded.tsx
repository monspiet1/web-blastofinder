"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function Expanded({ src, alt, name, date, id } : any ) {

 

    const [open, setOpen] = useState(false)
     const canvasRef = useRef<HTMLCanvasElement>(null)

    const predictionData = alt 

    const handleClick = () => {
        setOpen(true)
    }

useEffect(() => {
    if (!open || !canvasRef.current || !predictionData) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Define o tamanho do canvas igual à imagem original
    canvas.width = predictionData.image.width
    canvas.height = predictionData.image.height

    // Cria a imagem base
    const img = new Image()
    img.src = predictionData.image.url || src

    img.onload = () => {
      // Desenha a imagem
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // 🔵 Desenha bounding boxes e labels
      predictionData.prediction.forEach((p: any) => {
        // Retângulo (box)
        ctx.strokeStyle = "blue"
        ctx.lineWidth = 2
        ctx.strokeRect(p.x, p.y, p.width, p.height)

        // Label (classe + confiança)
        ctx.fillStyle = "blue"
        ctx.font = "16px Arial"
        ctx.fillText(`${p.class} (${(p.confidence * 100).toFixed(1)}%)`, p.x, p.y - 5)
      })
    }
  }, [open, predictionData, src])


  return (
    <>
      <Button
        className="relative w-25 h-25 p-0 overflow-hidden group hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Search className="text-white w-10 h-10 font-bold" />
        </div>
      </Button>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
            <div className="bg-white w-auto rounded shadow-lg p-1 flex flex-row">
                <div className="flex items-start flex-col pl-8 pr-10">
                    <div className="pb-5 ">
                        {name ? (
                            <h1 className="text-2xl font-bold text-center pt-5">{name}</h1>
                        ):(
                             <h1 className="text-2xl font-bold text-center pt-5">Amostra sem nome</h1>
                        )
                        }
                    </div>
                    <div>
                        <ul>
                          <li>
                            Data: {date}
                          </li>
                          <li>
                            ID amostra: {id}
                          </li>
                          <li>
                            Número de blastos: {predictionData.prediction?.length || 0}
                          </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <canvas
                    ref={canvasRef}
                    style={{ width: "600px", height: "auto" }}
                    className=" shadow-lg p-1 bg-black"
                    />
                </div>
                
          </div>
          
        </div>
      )}
    </>
  )

}