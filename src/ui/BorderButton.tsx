// src/components/BorderButton.tsx
type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
  };
  
  const BorderButton: React.FC<ButtonProps> = ({ title, onClick, className }) => (
    <button
      className={`p-3 border border-blue-600 rounded-md bg-grey-100 text-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer transition ${className || ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
  
  export default BorderButton;
  