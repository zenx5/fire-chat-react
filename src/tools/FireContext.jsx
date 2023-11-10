import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import Conversation from "../services/models/Conversation";

const ChatContext = createContext({
    chats:[]
})

function useChatContext() {
    return useContext(ChatContext)
}

function ProviderContext({ children }) {
    const [cookies] = useCookies([process.env.REACT_APP_COOKIE_NAME_USER])
    const [title, changeTitle] = useState("")
    const [user, setUser] = useState(null)
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState("")
    const [search, setSearch] = useState("")

    useEffect(()=>{
        if( cookies && cookies[process.env.REACT_APP_COOKIE_NAME_USER ] && !user ) {
            setUser( prev => cookies[process.env.REACT_APP_COOKIE_NAME_USER ] )

        }
    },[cookies, user])

    useEffect(()=>{
        if( user ) {
            Conversation.onChange( docs => setChats(docs.filter( doc => doc.members.map( member => member.id ).includes(user.id) )) )
        }
    },[user])


    const setTitle = (value) => {
        changeTitle( value )
    }

    const newMessage = () => {

    }

    return <ChatContext.Provider value={{
            user,
            setUser,
            chats,
            title,
            search,
            setSearch,
            setTitle,
            messages,
            newMessage
        }}>{children}</ChatContext.Provider>
}

export { useChatContext, ProviderContext }