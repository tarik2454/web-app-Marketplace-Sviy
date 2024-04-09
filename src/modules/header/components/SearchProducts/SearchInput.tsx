import { useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

interface SearchInputProps {
  setShowSearch?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchInput({ setShowSearch }: SearchInputProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    console.log('Search button clicked');
    setShowSearch && setShowSearch(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      setShowSearch && setShowSearch(false);
    }
  };

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
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
