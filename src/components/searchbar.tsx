import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex gap-2 py-[0.875rem] px-5 bg-gray-800 border-gray-500 border-[1px] rounded flex-1 min-w-[39rem] focus-within:border-2 focus-within:border-gray-400 mb-8">
      <input
        placeholder="Buscar livro avaliado"
        className="placeholder-gray-400 bg-transparent flex-1 outline-0"
      />
      <Search className="h-5 w-5 text-gray-500" />
    </div>
  )
}