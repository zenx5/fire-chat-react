import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ChatContext = createContext({
    chats:[]
})

function useChatContext() {
    return useContext(ChatContext)
}

function ProviderContext({ children }) {
    const [chats, setChats] = useState([])
    const [user, setUser] = useState(null)
    const [search, setSearch] = useState("")

    return <ChatContext.Provider value={{
        chats,
        user,
        search,
        setSearch
    }}>{children}</ChatContext.Provider>
}

export { useChatContext, ProviderContext }