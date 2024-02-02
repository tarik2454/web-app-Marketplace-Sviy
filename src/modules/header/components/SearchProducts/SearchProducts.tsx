import Container from "@/shared/components/Container/Container";
import { SearchArea, SearchCategories, SearchInput } from ".";
import Section from "@/shared/components/Section/Section";

export default function SearchProducts ({ display }: { display: String }) {
  return (
    <div className={`${display} absolute z-10 w-full left-0 top-[105px] border-t-2 rounded-b-default bg-neutral-50`}>
      <Section className="">
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
              <SearchInput />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}