import { useState } from "react"
import { LOGIN, LOGOUT, NEW_CHAT } from "../tools/constants"

export default function ActionButtons({ isLoged, onAction }){
    const [ nameUser, setNameUser] = useState("")

    const handlerAction = (action) => (event) => {
        if( onAction ) onAction(action, action===LOGIN ? nameUser : null)
        setNameUser("")
    }

    return <div className="flex flex-col gap-2">
        { isLoged && <span className="w-full flex flex-col gap-2">
            <button onClick={handlerAction(NEW_CHAT)}  className="flex items-center gap-2 justify-center py-1 text-2xl border border-white w-full rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-sm">Nuevo Chat</span>
            </button>
            <button className="flex justify-center py-1 items-center gap-2 text-2xl border border-white w-full rounded-lg " onClick={handlerAction(LOGOUT)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <span className="text-sm">Salir</span>
            </button>
        </span>}
        { !isLoged && <span className="w-full flex flex-col gap-2">
            <input placeholder="Usuario" value={nameUser} onChange={event=>setNameUser(event.target.value)} type="text" className="pl-8 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"/>
            <button className="flex justify-center items-center gap-2 py-1 text-2xl border border-white w-full rounded-lg " onClick={handlerAction(LOGIN)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span className="text-sm">Entrar</span>
            </button>
        </span>}
    </div>
}