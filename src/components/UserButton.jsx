import { useState, useEffect } from "react"
import Conversation from "../services/models/Conversation"

export default function UserButton({ currentUserId, user, onClick }) {
    const [ exist, setExist ] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect( ()=>{
        (async ()=>{
            const response = await Conversation.get()
            setConversations( prev => response )
        })()
    },[])

    useEffect(()=>{
        (async ()=>{
            const conversationId = await existChat(user.id)
            setExist( conversationId )
        })()
    },[conversations, user.id])

    const existChat =  async (id) => {
        const conversation = conversations.map( conversation => ({
            id: conversation.id,
            ids: conversation.members.map( (member) => member.id )
        }) ).filter( item => item.ids.includes(currentUserId) && item.ids.includes(user.id) )
        return conversation.length > 0 ? conversation[0].id : false
    }

    const handlerGo = async () => {
        if( onClick ) onClick( exist, user.id, user.email )
    }

    return <button  className="flex flex-row gap-2 justify-between w-full px-5 hover:bg-gray-600 py-1 rounded-full" onClick={handlerGo}>
        <span className="flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{user.firstname} {user.lastname} </span>
        </span>
        <span className="border rounded-full px-4 text-sm border-gray-50 border-opacity-20">{ exist ? "Ir" : "Nuevo" }</span>
    </button>
}