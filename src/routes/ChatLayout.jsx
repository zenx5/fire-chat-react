import ActionButtons from "../components/ActionButtons";
import ChatContent from "../components/ChatContent";
import ListChat from "../components/ListChat";
import Search from "../components/Search";



export default function ChatLayout(){

    return <div className="bg-gray-800 text-gray-100 h-screen">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 h-screen">
            <div className="flex gap-4 h-full">
              <div className="flex-grow-0 flex-shrink w-64 bg-gray-700 rounded-lg p-4 justify-between flex flex-col">
                <div className="">
                  <Search />
                  <ListChat />
                </div>
                <ActionButtons />
              </div>
              <div className="flex-grow flex flex-col bg-gray-700 rounded-lg p-4 gap-2">
                <ChatContent />
              </div>
            </div>
          </div>
        </div>
}