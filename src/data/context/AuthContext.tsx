import Usuario from "@/src/model/Usuario";
import firebase from "firebase";
import { createContext, useState } from "react";

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()

    return {
        uid: usuarioFirebase.uid,
        nome: `${usuarioFirebase.displayName}`,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

export function AuthProvider(props: any) {
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle() {
        console.log("login google")
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext