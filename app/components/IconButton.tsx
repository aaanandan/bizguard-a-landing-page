import { useState } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  icon: string;
  hoverIcon?: string;
  label?: string;
  darkMode?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  icon,
  hoverIcon,
  label,
  darkMode = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group flex items-center justify-center
        transition-all duration-300 hover:scale-110
        ${className}
      `}
      aria-label={label}
    >
      <i className={`fas ${isHovered && hoverIcon ? hoverIcon : icon}`}></i>
      {label && (
        <span className={`
          absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} 
          shadow-lg whitespace-nowrap
        `}>
          {label}
        </span>
      )}
    </button>
  );
};

export default IconButton; 