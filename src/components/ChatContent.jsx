import MessageItem from "./MessageItem"
import { ROUTER_PATH } from "../tools/constants"
import { useState } from "react"

export default function ChatContent(){
    const [message, setMessage] = useState()
    const title = {}
    const user = {}
    const messages = []

    const handlerChangeTitle = () => {

    }

    const handlerSend = () => {

    }

    return false ?  <>
            <div className="flex-grow overflow-auto pt-2">
                <div className="flex flex-row justify-between mb-2 px-2">
                    { title && user?.id && <input type="text" value={title[user?.id] ?? ""} onChange={handlerChangeTitle} className="bg-transparent px-2 focus:underline outline-none"/>}
                    <a href={ROUTER_PATH.APP} className="hover:bg-white hover:bg-opacity-20 p-1 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                </div>
                { user && messages.map( (msg, index) => <MessageItem key={index} content={msg.content} sended={msg.sender===user?.id}/>)}
            </div>
            <div className="mt-4 flex gap-2">
                <input className="flex-grow pl-8 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type a message..." type="text" value={message} onChange={event => setMessage(event.target.value)}/>
                <button variant="secondary" onClick={handlerSend}>
                    <svg
                        className=" h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                    </svg>
                    <span className="sr-only">Send</span>
                </button>
            </div>
        </>:
        <main className="flex flex-col justify-center items-center h-full">
            <h1 className="text-gray-500 text-5xl">Zenx5&apos;s Chat</h1>
            <p className="text-gray-500 italic text-xl mt-5">Chat creado con NextJs, Tailwind y Firebase</p>
            <a href="https://zenx5.pro" target="_blank" rel="noreferrer" className="text-gray-300 italic text-xl mt-5">Por Octavio Martinez</a>
        </main>
}