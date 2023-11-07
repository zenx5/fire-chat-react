import ChatLayout from "./ChatLayout";
import Home from "./Home";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/chat',
        element: <ChatLayout />
    }
]

export default routes;