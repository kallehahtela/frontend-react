import '../index.css';

function SearchBar() {
    const hoverStyle = "transition duration-500 hover:scale-110 transform";

    return (
        <div className="mx-auto flex items-center justify-center bg-white border-none p-4 shadow-lg w-96">
            <div className="relative w-full">
                {/* Search Icon */}
                <svg
                    fill='grey-700'
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Explore here..."
                    className="w-full pl-10 p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button className={`cursor-pointer ${hoverStyle}`}>
                <svg
                    className='w-6 m-2'
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>

            </button>
        </div>
    );
}

export default SearchBar;
