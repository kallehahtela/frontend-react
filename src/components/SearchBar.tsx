// src/components/SearchBar.tsx
type SearchBarProps = {
    placeholder?: string;
    onSearch?: (query: string) => void;
  };
  
  const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch?.(e.target.value);
    };
  
    return (
      <div className="flex w-full px-4 py-2 bg-white shadow-md">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder={placeholder}
          onChange={handleInput}
        />
      </div>
    );
  };
  
  export default SearchBar;
  