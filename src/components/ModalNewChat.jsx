import { ROUTER_PATH } from "../tools/constants"
import Conversation from "../services/models/Conversation"
import User from "../services/models/User"
import { useEffect, useState } from "react"
import UserButton from "./UserButton"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function ModalNewChat({ user }) {
    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    
    useEffect( ()=>{
        (async ()=>{
            const response = await User.get()
            setUsers( prev => response )
        })()
    },[])

    useEffect(()=>{
        setOpen( searchParams.get('modal')==='new' )
    },[searchParams])

    const handlerGotoChat = async (conversationId, id, email) => {
        if( conversationId ) navigate(`${ROUTER_PATH.APP}/${conversationId} `)
        else {
            const data = {
                name: {
                    [id]: user.email,
                    [user.id]: email
                },
                members:[
                    { id, email },
                    { id:user.id, email:user.email }
                ],
                messages: [],
                lastMessage : { email:'', id:'', content:'' }
            }
            const response = await Conversation.post( data )
            if( response && response?.id ) navigate(`${ROUTER_PATH.APP}/${response?.id} `)
        }
    }

    return open && <div className="absolute z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-white bg-opacity-0 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-700 border border-gray-800 shadow-lg shadow-gray-800 w-1/3 h-1/2 mx-auto my-auto px-5 rounded-lg">
            <span className="flex flex-row items-center text-gray-400 justify-between pt-4">
                <p className="text-xl">Nueva conversación</p>
                <a href="?" className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </span>
            <span className="text-gray-400 flex flex-col gap-3 items-start">
                { users.filter( _user => _user.id!==user.id ).map( _user => <UserButton key={_user.id} currentUserId={user.id} user={_user} onClick={handlerGotoChat}  /> )}
            </span>
        </div>
    </div>
}