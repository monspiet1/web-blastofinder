"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signIn, signUp } from "../../../server/users"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"
import { Spinner } from "../ui/spinner"
import { Birth } from "./Birth"

import { createAuthClient } from "better-auth/client";
import { occupation } from "../../../db/schema"
import OccupationList from "./OccupationList"
 
const formSchema = z.object({ // verifica se os valores inseridos batem para fazer a autenticação correta
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  occupation: z.string().min(3),
  birth: z.string()
})


type SignUpFormProps = React.ComponentProps<"form"> & {switchTab: () => void}


export function SignUpForm({
  className,
  switchTab,
  ...props 
} : SignUpFormProps) {

  const authClient = createAuthClient();

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  
  const form = useForm<z.infer<typeof formSchema>>({ // captura os valores inseridos no formulario
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      occupation: "Pesquisador",
      birth: ""
    },
  })

  const signInWithGoogle = async () => { // faz autenticação com a conta google e envia para a proxima pagina
  await authClient.signIn.social({
      provider: "google",
      callbackURL: "/analysis"
    });
    };
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true) // quando o botao for clicado o icone de loading aparece
    console.log("Data: ",values.birth)
    const {success, message} = await signUp(values.email, values.password, values.name, values.birth , values.occupation)

    if(success){
       
      toast.success(message as string)
      router.push('/analysis')
      
    }
    else{
      toast.error(message as string)
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="register">
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Cadastre seu dados</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Insira seus dados abaixo para criar sua conta
            </p>
          </div>
          <Field>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: José da Silva" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </Field>
          <Field>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: jose@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FormField
                control={form.control}
                name="birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nascimento</FormLabel>
                    <FormControl>
                      <Birth value={field.value} onChange={field.onChange}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Field>
            <Field>
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ocupação</FormLabel>
                    <FormControl>
                      <OccupationList/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Field>
          </div>
          <div className="grid gap-3">
            <Field>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Field>
          </div>
          <Field>
            <Button variant="outline" type="submit" className="bg-purple-950 text-white cursor-pointer">
              {isLoading ? (
                <Spinner className="size-4"/> 
              ) : (
                "Cadastrar"
              )}
            </Button>
          </Field>
          <FieldSeparator>Ou continue com</FieldSeparator>
          <Field>
            <Button variant="outline" onClick={signInWithGoogle} type="button" className="bg-purple-950 text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 533.5 544.3">
                  <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.4H272v95.4h146.9c-6.3 34-25.2 62.9-53.8 82.1l86.9 67c50.7-46.8 81.5-115.6 81.5-194.1z"/>
                  <path fill="#34A853" d="M272 544.3c72.9 0 134-24.1 178.7-65.6l-86.9-67c-24.1 16.2-55 25.8-91.8 25.8-70.7 0-130.6-47.7-152-111.5l-89.7 69.2c44.7 88.1 136.4 149.1 241.7 149.1z"/>
                  <path fill="#FBBC05" d="M120 326c-5.6-16.6-8.8-34.2-8.8-52s3.2-35.4 8.8-52L30.3 152.8C10.9 190.2 0 236.5 0 274s10.9 83.8 30.3 121.2L120 326z"/>
                  <path fill="#EA4335" d="M272 107.7c39.6 0 75.2 13.6 103.2 40.3l77.1-77.1C406 24.1 344.9 0 272 0 166.7 0 74.9 61 30.3 152.8L120 222c21.4-63.8 81.3-111.5 152-111.5z"/>
                </svg>
              Entre com Google
            </Button>
            <FieldDescription className="text-center">
              Possui conta?{" "}
              <a href="#" className="underline underline-offset-4" onClick={switchTab}>
                Entre
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </Form>
  )
}
