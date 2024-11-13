import { IconHome, IconLogout, IconNotifications, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <>
            <aside className="w-fit flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700">
                <div className="flex flex-col justify-center items-center h-20 w-20 bg-purple-800">
                    <Logo />
                </div>
                <div className="flex-grow">
                    <MenuItem url="/" texto="Inicio" icone={IconHome} />
                    <MenuItem url="/ajustes" texto="Ajustes" icone={IconSettings} />
                    <MenuItem url="/notificacoes" texto="Notificações" icone={IconNotifications} />
                </div>
                <div>
                    <MenuItem
                        onClick={() => console.log("logout")}
                        texto="Logout"
                        icone={IconLogout} 
                        className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
                        />
                </div>
            </aside>
        </>
    )
}