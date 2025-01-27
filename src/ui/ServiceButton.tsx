// src/components/BorderButton.tsx
type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
  };
  
  const ServiceButton: React.FC<ButtonProps> = ({ title, onClick, className }) => (
    <button
      className={`w-full p-3 rounded-md bg-black text-white hover:bg-blue-500 hover:text-white hover:border-none cursor-pointer transition ${className || ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
  
  export default ServiceButton;
  