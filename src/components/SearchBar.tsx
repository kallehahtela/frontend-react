import Button from "../ui/Button";

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
      {/* Wrapper with relative positioning */}
      <div className="relative flex w-4/5">
        {/* SVG positioned absolutely */}
        <svg
          fill="grey"
          className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>

        {/* Input with extra left padding */}
        <input
          type="text"
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          onChange={handleInput}
        />
        
      </div>

      {/* Filter icon */}
      <div className="flex item-center justify-center w-1/5">
      <div className="flex items-center justify-center w-10 h-10 border-1 border-gray-400 rounded-full">
        <svg
          fill="black"
          className="w-6"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      </div>
    </div>
  );
};

export default SearchBar;