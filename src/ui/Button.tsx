// src/components/Button.tsx
type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
  };
  
  const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => (
    <button
      className={`p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${className || ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
  
  export default Button;
  