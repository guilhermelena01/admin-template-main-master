import useAppData from "@/src/data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import MenuLateral from "./MenuLateral"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string,
    subtitulo: string
}

export default function Cabecalho(props:CabecalhoProps) {
    const {alternarTema, tema} = useAppData()

    return (
        <>
            <div className={`flex`}>
                <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
                <div className={`flex flex-grow justify-end`}>
                    <BotaoAlternarTema tema={`${tema}`} alternarTema={alternarTema}/>
                </div>
            </div>
        </>
    )
}