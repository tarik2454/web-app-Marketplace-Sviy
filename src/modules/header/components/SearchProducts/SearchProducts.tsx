import Container from '@/shared/components/Container/Container';
import { SearchArea, SearchCategories, SearchInput } from '.';

type SearchProductsProps = {
  toggleSearchVisibility?: () => void;
};

export default function SearchProducts({
  toggleSearchVisibility,
}: SearchProductsProps) {
  return (
    <div className="rounded-b-default bg-neutral-50 absolute z-20 w-full left-0 top-[80px] md:top-[113px]">
      <Container>
        <div className="block w-full py-6 bg-neutral-50">
          <div className="flex items-center border-2 border-blue-700 rounded-default">
            <SearchArea />
            <SearchCategories />
            <div className="flex grow md:hidden xl:block">
              <SearchInput />
            </div>
          </div>
          <div className="hidden mt-2  py-1 border-2 border-blue-700 rounded-default md:block xl:hidden">
            <SearchInput toggleSearchVisibility={toggleSearchVisibility} />
          </div>
        </div>
      </Container>
    </div>
  );
}
