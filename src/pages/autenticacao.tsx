import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";
import useAuthData from "../data/hook/useAuthData";

export default function Autenticacao() {
    const {loginGoogle, usuario} = useAuthData()

    const [modo, setModo] = useState<"login" | "cadastro">("login")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState(null)

    function submeter() {
        if (modo == "login") {
            console.log("login")
            exibirErro("Ocorreu um erro no login")
        } else {
            console.log("cadastrar");
            exibirErro("Ocorreu um erro no cadastro")
        }
    }

    function exibirErro(msg: string, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => {
            setErro(null)
        }, tempoEmSegundos * 1000)
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="md:w-1/2 lg:w-2/3">
                <img src="https://picsum.photos/200/300"
                    alt="Image da tela de autenticação"
                    className="hidden md:block h-screen w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 m-10">
                <h1 className="text-3xl font-bold mb-5">
                    {modo == "login" ? "Entra com a sua conta" : "Cadastre-se na plataforma"}
                </h1>
                {erro ?
                    <div className="bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg flex items-center gap-2">
                        {IconeAtencao}
                        <span>{erro}</span>
                    </div>
                    : false}
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />

                <button onClick={submeter} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 border-none`}>
                    {modo == "login" ? "Entrar" : "Cadastrar"}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 border-none`}>
                    Entrar com o Google
                </button>

                {modo == "login" ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo("cadastro")} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa communidade?
                        <a onClick={() => setModo("login")} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Entre com a suas credenciais</a>
                    </p>
                )
                }
            </div>
        </div>
    )
}