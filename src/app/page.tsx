"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { LoginForm } from "@/components/custom-ui/LoginForm"
import { SignUpForm } from "@/components/custom-ui/SignUpForm"
import { useEffect, useState } from "react"
import { signOut } from "../../lib/auth_client"



export default function Home() {
  useEffect(() => {
    // Força logout ao abrir o site
    signOut()
  }, [])

  const [isRegistred, setIsRegistred] = useState("login")

  return (
    <div className=" grid min-h-screen lg:grid-cols-2 overflow-auto">
      <div className="min-h-screen flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">

          </a>
        </div>
        <div className="flex flex-1 w-full flex-col gap-6 items-center justify-center pl-10">
            <Tabs  value={isRegistred} onValueChange={setIsRegistred} className="w-[400px]">
              <div className="flex items-center justify-center">
                <TabsList>
                <TabsTrigger value="login" className="cursor-pointer">Login</TabsTrigger>
                <TabsTrigger value="register" className="cursor-pointer">Cadastro</TabsTrigger>
              </TabsList>
              </div>
              <TabsContent value="login" className="pt-5">
                <LoginForm switchTab={() => setIsRegistred("register")}/>
              </TabsContent>
              <TabsContent value="register" className="pt-5">
                <SignUpForm switchTab={() => setIsRegistred("login")}/>
              </TabsContent>
            </Tabs>
          
        </div>
      </div>
      
      
      <div className=" min-h-screen h-auto">
            <div className="w-full min-h-screen flex items-start justify-start flex-col rounded-md pt-5 pb-10 px-5 lg:pt-10 lg:px-0 lg:pr-10 relative lg:overflow-auto">
                    <div className="px-5">
                            <h1 className="text-3xl font-bold">O que é o Blastofinder?</h1>
                    </div>
                    <div className="py-2 px-5 text-justify text-lg">
                            <p>
                                O Blastofinder é uma ferramenta que visa auxiliar todos os microscopistas na identificação 
                                de blastos em exames de sangue de diversos pacientes, um blasto é uma célula em estágio inicial 
                                de maturação que quando encontrada na corrente sanguínea pode ser um indício de Leucemia.
                                A ferramenta é desenvolvida por meio de um projeto de extensão por alunos da Universidade 
                                Federal de Rondônia em parceria com profissionais da Fundação Oswaldo Cruz e utiliza de algoritmos 
                                de inteligência artificial e visão computacional para fazer a detecção e classificação dos blastos 
                                em imagens retiradas de microscópios.
                        
                            </p>
                    </div>
                    <div className="px-5 pt-5">
                            <h1 className="text-3xl font-bold">Universidade Federal de Rondônia</h1>
                    </div>
                    <div className="py-2 px-5 text-justify text-lg ">
                            <p>
                                A Universidade Federal de Rondônia (UNIR) é uma instituição pública de ensino superior localizada em Porto Velho, Rondônia. 
                                Fundada em 1989, a UNIR tem como missão promover a educação, a pesquisa e a extensão em diversas áreas do conhecimento, 
                                contribuindo para o desenvolvimento da região Norte do Brasil e do país como um todo. A UNIR oferece uma ampla gama de 
                                cursos de graduação, pós-graduação e extensão, atendendo às necessidades acadêmicas e profissionais da comunidade local e regional. 
                                A universidade está comprometida com a formação de profissionais qualificados e a produção de conhecimento científico e 
                                tecnológico que possa ser aplicado ao contexto regional e nacional. Além das atividades acadêmicas, a UNIR desenvolve 
                                projetos e programas de extensão que visam fortalecer a relação entre a universidade e a sociedade. Isso inclui iniciativas 
                                em áreas como educação ambiental, desenvolvimento sustentável, e apoio a comunidades locais. Com um campus principal em Porto Velho 
                                e vários polos em cidades do estado de Rondônia, a UNIR desempenha um papel crucial no avanço da educação superior e no desenvolvimento regional.
                            </p>
                    </div>
                    <div className="px-5 pt-5">
                            <h1 className="text-3xl font-bold">Fundação Oswaldo Cruz</h1>
                    </div>
                    <div className="py-2 px-5 text-justify text-lg">
                            <p>
                                A Fundação Oswaldo Cruz (FIOCRUZ) é uma instituição brasileira de referência na área de pesquisa em saúde e produção de conhecimentos científicos e tecnológicos relacionados à saúde pública. 
                                Fundada em 1900, a FIOCRUZ está localizada no Rio de Janeiro e é vinculada ao Ministério da Saúde. A FIOCRUZ é renomada por seu trabalho em pesquisa e desenvolvimento em áreas como imunologia, 
                                virologia, epidemiologia, e saúde pública. Além disso, a instituição desempenha um papel fundamental na produção de vacinas, medicamentos e diagnósticos para doenças infecciosas e outras condições de saúde. 
                                Com um extenso portfólio de pesquisas e uma infraestrutura avançada, a FIOCRUZ também oferece cursos de graduação e pós-graduação, formações técnicas, e treinamento de recursos humanos na área de saúde. 
                                Seu trabalho é essencial para a implementação de políticas de saúde no Brasil e no exterior, refletindo seu compromisso com a promoção da saúde e o enfrentamento de desafios sanitários globais.
                            </p>
                    </div>
                  
                    
        </div>
      </div>
    </div>
  )
}
