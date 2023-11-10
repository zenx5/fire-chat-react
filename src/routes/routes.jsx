import { Navigate } from "react-router-dom";
import ChatContent from "../components/ChatContent";
import ChatEmpty from "../components/ChatEmpty";
import ChatLayout from "./ChatLayout";


const routes = [
    {
        path: '/',
        element: <Navigate to="/chat" replace />
    },
    {
        path: '/chat',
        element: <ChatLayout>
            <ChatEmpty />
        </ChatLayout>

    },
    {
        path: '/chat/:id',
        element: <ChatLayout>
            <ChatContent />
        </ChatLayout>
    }
]

export default routes;