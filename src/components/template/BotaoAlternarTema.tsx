import { IconeLua, IconeSol } from "../icons";

interface BotaoAlternarTemaProps {
    tema: string;
    alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === "dark" ? (
        <div onClick={props.alternarTema} className={`hidden cursor-pointer p-1 rounded-full bg-yellow-400 w-14 lg:w-24 h-8 sm:flex items-center`}>
            <div className={`flex justify-center items-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
                {IconeSol}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-white`}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`hidden cursor-pointer p-1 justify-end rounded-full bg-gray-500 w-14 lg:w-24 h-8 sm:flex items-center`}>
            <div className={`hidden lg:flex items-center mr-4 text-gray-300`}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`flex justify-center items-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
                {IconeLua}
            </div>
        </div>
    )
}