import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000",
    pages: {
    signOutRedirect: "/", // ou outra página que você queira que seja a “login page”
    // signOutRedirect: "/", // algumas versões usam essa opção
    },
})

export const { signIn, signUp, signOut , useSession } = authClient

