import { useChatContext } from "../tools/FireContext"
import ChatItem from "./ChatItem"

export default function ListChat(){
    const { user, chats, search } = useChatContext()


    return <div className="mt-4 space-y-4">
        {user && chats.filter( chat => chat.name[user.id].toLowerCase().includes(search.toLowerCase()) ).map( chat => <ChatItem key={chat.id} href={`/chat/${chat.id}`} name={ chat.name[ user.id ] } message={chat.lastMessage.content} />)}
    </div>
}