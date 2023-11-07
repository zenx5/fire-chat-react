import { useChatContext } from "../tools/FireContext"

export default function Search() {
    const {search, setSearch} = useChatContext()

    const handlerSearch = (event) => {
        setSearch( event.target.value )
    }

    return <div className="relative">
        <svg
            className=" absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
        <input className="pl-8 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search conversations..." type="search" value={search} onChange={handlerSearch}/>
    </div>
}