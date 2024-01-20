import { SearchArea, SearchCategories, SearchInput } from "./components";

export default function SearchProducts ({ display }: { display: String }) {
  return (
    <div className={`${display} absolute z-10 w-full h-full left-0 backdrop-brightness-50`}>
      <div className="block w-full px-4 py-6 left-0 border-t-2 rounded-b-default bg-white">
        <div className="flex border-2 border-blue-700 rounded-default">
          <SearchArea />
          <SearchCategories />
          <SearchInput />
        </div>
      </div>
    </div>
  )
}