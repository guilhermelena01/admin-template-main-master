import { createContext, useState } from "react";

type Tema = "dark" | "" | null

interface AppContextProps {
    tema: Tema
    alternarTema: () => void;
}

const AppContext = createContext<AppContextProps>({
    tema: null,
    alternarTema: null
})

export function AppProvider(props: any) {
    const [tema, setTema] = useState<Tema>("")

    function alternarTema() {
        setTema(tema === "" ? "dark" : "")
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;