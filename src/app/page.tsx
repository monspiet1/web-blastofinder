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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home(){
    return(
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div className="pb-10 pt-10">
                <div className="w-200 h-auto bg-gray-300 flex items-center justify-center flex-col rounded-md ">
                    <div className="p-5">
                        <h1 className="text-3xl">O que é o Blastofinder?</h1>
                    </div>
                    <div className="p-5 text-justify text-xl">
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
                </div>
            </div>
            <div className="pb-10">
                <div className="w-200 h-auto bg-gray-300 flex items-center justify flex-col rounded-md">
                    <Accordion className="w-auto" type="single" collapsible>
                        <AccordionItem className="w-auto" value="item-1">
                            <AccordionTrigger className="text-lg">Login / Cadastro</AccordionTrigger>
                            <AccordionContent className="w-auto">
                                <Tabs className=" flex items-center justify-center" defaultValue="login">
                                    <TabsList>
                                    <TabsTrigger value="login">Login</TabsTrigger>
                                    <TabsTrigger value="password">Cadastro</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="login">
                                        <Card className=" w-100 flex justify-center items-center">
                                            <CardHeader className="w-auto flex items-center justify-center">
                                            <CardDescription className="text-lg text-black font-bold flex justify-center">
                                                Insira suas credenciais
                                            </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-6  w-auto">
                                            <div className="grid gap-3 w-80">
                                                <Label htmlFor="tabs-demo-login" className="text-md">E-mail</Label>
                                                <Input id="tabs-demo-login" className="rounded-4xl" />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="tabs-demo-password">Senha</Label>
                                                <Input id="tabs-demo-password" type="password" className="rounded-4xl" />
                                            </div>
                                            </CardContent>
                                            <CardFooter>
                                            <Button className="bg-purple-800 rounded-4xl w-80 text-xl flex items-center justify-center hover:bg-purple-900 cursor-pointer">Login</Button>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="password">
                                        <Card>
                                            <CardHeader>
                                            <CardTitle>Password</CardTitle>
                                            <CardDescription>
                                                Change your password here. After saving, you&apos;ll be logged
                                                out.
                                            </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="tabs-demo-current">Current password</Label>
                                                <Input id="tabs-demo-current" type="password" />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="tabs-demo-new">New password</Label>
                                                <Input id="tabs-demo-new" type="password" />
                                            </div>
                                            </CardContent>
                                            <CardFooter>
                                            <Button>Save password</Button>
                                            </CardFooter>
                                        </Card>
                                        </TabsContent>
                                    </Tabs>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>

        </div>
    )
}