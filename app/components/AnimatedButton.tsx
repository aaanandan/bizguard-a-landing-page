import { useInView } from '../hooks/useInView';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const [ref, isInView] = useInView();
  
  const baseStyles = "rounded-lg px-7 py-3 text-base font-medium transition-all duration-300";
  const primaryStyles = "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg";
  const secondaryStyles = "border border-gray-300 hover:bg-gray-100";
  
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variant === 'primary' ? primaryStyles : secondaryStyles}
        ${className}
        transform hover:scale-105 hover:-translate-y-1
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        transition-all duration-500 ease-out
      `}
    >
      {children}
    </button>
  );
};

export default AnimatedButton; 