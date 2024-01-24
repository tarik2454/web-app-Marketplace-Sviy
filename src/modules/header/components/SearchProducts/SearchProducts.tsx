import { SearchArea, SearchCategories, SearchInput } from ".";

export default function SearchProducts ({ display }: { display: String }) {
  return (
    <div className={`${display} absolute z-10 w-full h-full left-0 backdrop-brightness-50`}>
      <div className="block w-full px-4 py-6 left-0 border-t-2 rounded-b-default bg-white">
        <div className="flex items-center border-2 border-blue-700 rounded-default">
          <SearchArea />
          <SearchCategories />
          <div className="flex grow md:hidden xl:block">
            <SearchInput />
          </div>
        </div>
        <div className="hidden mt-2  py-1 border-2 border-blue-700 rounded-default md:block xl:hidden">
          <SearchInput />
        </div>
      </div>
    </div>
  )
}