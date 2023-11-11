import ActionButtons from "../components/ActionButtons";
import ListChat from "../components/ListChat";
import Search from "../components/Search";
import { LOGIN, LOGOUT, NEW_CHAT } from "../tools/constants";
import User from "../services/models/User";
import { useCookies } from "react-cookie";
import { useChatContext } from "../tools/FireContext";
import { useEffect, useState } from "react";
import ModalNewChat from "../components/ModalNewChat";
import { useNavigate } from "react-router-dom";




export default function ChatLayout({ children }){
    const [isLoged, setIsLoged] = useState(false)
    const { user, setUser } = useChatContext()
    const [ cookies, setCookie, removeCookie ] = useCookies([process.env.REACT_APP_COOKIE_NAME_USER])
    const navigate = useNavigate()

    const handleAction = async (action, user = null) => {
      if( action===LOGIN ) {
        const [ responseUser ] = await User.search('firstname', user)
        if( responseUser ) {
          setCookie(
            process.env.REACT_APP_COOKIE_NAME_USER,
            JSON.stringify(responseUser)
          )
          setUser( responseUser )
        } else {
          const data = {
            email: `${user}@mail.com`,
            firstname: user,
            lastname: '',
            name: user,
            password: '123456'
          }
          const response = await User.post(data)
          setCookie(
            process.env.REACT_APP_COOKIE_NAME_USER,
            JSON.stringify({
              id:response.id,
              ...data
            })
          )
          setUser( {
            id:response.id,
            ...data
          } )
        }
      } else if( action===LOGOUT ){
        removeCookie(process.env.REACT_APP_COOKIE_NAME_USER)
        setUser(null)
      } else if( action===NEW_CHAT ) {
        navigate("?modal=new")
      }
    }

    useEffect(()=>{
        setIsLoged( !!cookies[process.env.REACT_APP_COOKIE_NAME_USER] )
    },[cookies])

    return <div className="bg-gray-800 text-gray-100 h-screen">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 h-screen">
            <div className="flex gap-4 h-full">
              <div className="flex-grow-0 flex-shrink w-64 bg-gray-700 rounded-lg p-4 justify-between flex flex-col">
                <div className="">
                  <Search />
                  <ListChat />
                </div>
                <ActionButtons onAction={handleAction} isLoged={isLoged}/>
              </div>
              <div className="flex-grow flex flex-col bg-gray-700 rounded-lg p-4 gap-2">
                { children }
              </div>
              <ModalNewChat user={user} />
            </div>
          </div>
        </div>
}