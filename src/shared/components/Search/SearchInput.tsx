'use client';

import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
  toggleSearchVisibility?: () => void;
  className?: string;
  inputStyle?: string;
}

export default function SearchInput({
  toggleSearchVisibility,
  className,
  inputStyle,
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      if (toggleSearchVisibility) {
        toggleSearchVisibility();
      }
      router.push(`/catalogue`);
    }
  };

  return (
    <div className={`flex w-full items-center px-3 py-2 ${className}`}>
      <button className="text-blue-700" onClick={handleSearchClick}>
        <SpriteSVG name="search" />
      </button>

      <input
        className={`w-full outline-none px-2 bg-transparent text-neutral-800 placeholder-neutral-800 ${inputStyle}`}
        type="text"
        placeholder="Пошук оголошень"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
