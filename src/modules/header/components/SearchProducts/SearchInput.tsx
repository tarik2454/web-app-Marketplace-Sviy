'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
  toggleSearchVisibility?: () => void;
}

export default function SearchInput({
  toggleSearchVisibility,
}: SearchInputProps) {
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const handleSearchClick = () => {
    console.log('message');
    if (toggleSearchVisibility) {
      toggleSearchVisibility();
    }

    // route.push(`/search?q=${searchText}`);
    router.push(`/catalogue`);
  };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     if (setShowSearch) {
  //       setShowSearch(false);
  //     }
  //     if (toggleSearchVisibility) {
  //       toggleSearchVisibility();
  //     }
  //     router.push(`/catalogue`);
  //   }
  // };

  return (
    <div className="flex w-full items-center px-3 py-2">
      <button className="text-blue-700" onClick={handleSearchClick}>
        <SpriteSVG name="search" />
      </button>

      <input
        className="w-full outline-none px-2 bg-neutral-50 text-neutral-800 placeholder-neutral-800"
        type="text"
        placeholder="Я шукаю"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        // onKeyDown={handleKeyPress}
      />
    </div>
  );
}
