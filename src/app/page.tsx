import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {Birth} from "@/components/custom-ui/Birth"

export default function Home(){
    return(
        <div className="w-full h-auto flex items-center justify-center flex-row">
            <div className="w-1/3 h-screen justify-center flex items-center">
                <div className="w-full h-160  flex items-center justify-center flex-col rounded-md pl-35 pr-10">
                    <Tabs className="w-full h-full flex items-center justify-center p-20" defaultValue="login">
                        <TabsList>
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Cadastro</TabsTrigger>
                                </TabsList>
                                    <TabsContent value="login">
                                        <Card className=" w-100 h-120 flex justify-center items-center">
                                            <div className="pb-10 text-2xl font-bold">
                                                <h1>Insira suas credenciais</h1>
                                            </div>
                                            <CardContent className="grid gap-6 pb-10">
                                            <div className="grid gap-3 w-80">
                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">E-mail</Label>
                                                <Input id="tabs-demo-login" className="rounded-4xl" />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="tabs-demo-password" className="pl-2 text-md">Senha</Label>
                                                <Input id="tabs-demo-password" type="password" className="rounded-4xl" />
                                            </div>
                                            </CardContent>
                                            <CardFooter>
                                            <Button className="bg-purple-800 rounded-4xl w-80 text-xl flex items-center justify-center hover:bg-purple-900 cursor-pointer">Logar-se</Button>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="register">
                                        <Card className=" w-160 h-120 flex justify-center items-center">
                                                <div className=" text-2xl font-bold">
                                                    <h1>Insira suas informações</h1>
                                                </div>
                                                <div className="w-full h-auto flex flex-row justify-center">
                                                    <div className="w-full h-auto ">
                                                        <CardContent className="grid gap-6">
                                                            <div className="grid gap-3 w-full">
                                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">Nome completo</Label>
                                                                <Input id="tabs-demo-login" className="rounded-4xl" />
                                                            </div>       
                                                        </CardContent>
                                                    </div>
                                                </div>
                                                <div className="w-full h-auto 0 justify-center flex">
                                                        <CardContent className="grid grid-cols-2 gap-6 w-full">
                                                            <div className="grid gap-3 w-full">
                                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">E-mail</Label>
                                                                <Input id="tabs-demo-login" className="rounded-4xl" />
                                                            </div>

                                                            <div className="grid gap-3 w-full">
                                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">Senha</Label>
                                                                <Input id="tabs-demo-login" className="rounded-4xl" type="password"/>
                                                            </div>
                                                    
                                                        </CardContent>
                                                    </div>
                                                    <div className="w-full h-auto 0 justify-center flex">
                                                        <CardContent className="grid grid-cols-2 gap-6 w-full">
                                                            <div className="grid gap-3 w-full">
                                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">Data de nascimento</Label>
                                                                <Birth/>
                                                            </div>

                                                            <div className="grid gap-3 w-full">
                                                                <Label htmlFor="tabs-demo-login" className="text-md pl-2">Ocupação</Label>
                                                                <Select>
                                                                    <SelectTrigger className="w-full rounded-4xl text-black hover:bg-accent">
                                                                        <SelectValue placeholder="Escolha a ocupação" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="light">Hematologista</SelectItem>
                                                                        <SelectItem value="dark">Biomédico</SelectItem>
                                                                        <SelectItem value="system">Pesquisador</SelectItem>
                                                                        <SelectItem value="system">Outro</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                    
                                                        </CardContent>
                                                    </div>
                                                
                                                <CardFooter className="w-full py-5">
                                                    <Button className="bg-purple-800 w-full rounded-4xl text-xl flex items-center justify-center hover:bg-purple-900 cursor-pointer">Logar-se</Button>
                                                </CardFooter>
                                                
                                        </Card>
                                </TabsContent>
                        </Tabs>

                </div>
                </div>
                   <div className="w-2/3">
                    <div className="w-full h-screen flex items-start justify-start flex-col py-20 rounded-md pl-20 pr-5 overflow-auto">
                        <div className="px-5">
                            <h1 className="text-3xl">O que é o Blastofinder?</h1>
                        </div>
                        <div className="py-2 px-5 text-justify text-lg">
                            <p>
                                O BlastoFinder é uma ferramenta que visa auxiliar todos os microscopistas na identificação 
                                de blastos em exames de sangue de diversos pacientes, um blasto é uma célula em estágio inicial 
                                de maturação que quando encontrada na corrente sanguínea pode ser um indício de Leucemia.
                                A ferramenta é desenvolvida por meio de um projeto de extensão por alunos da Universidade 
                                Federal de Rondônia em parceria com profissionais da Fundação Oswaldo Cruz e utiliza de algoritmos 
                                de inteligência artificial e visão computacional para fazer a detecção e classificação dos blastos 
                                em imagens retiradas de microscópios.
                        
                            </p>
                        </div>
                        <div className="px-5 pt-5">
                            <h1 className="text-3xl">Universidade Federal de Rondônia</h1>
                        </div>
                        <div className="py-2 px-5 text-justify text-lg">
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
                            <h1 className="text-3xl">Fundação Oswaldo Cruz</h1>
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