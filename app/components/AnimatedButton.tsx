import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  darkMode?: boolean;
  icon?: string; // Optional icon class for hover state
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  darkMode = false,
  icon = 'fa-hand-pointer' // Changed default icon to hand pointer
}) => {
  const [ref, isInView] = useInView<HTMLButtonElement>();
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = "rounded-lg px-7 py-3 text-base font-medium transition-all duration-300 relative overflow-hidden group cursor-pointer";
  const primaryStyles = "bg-orange-500 text-white hover:bg-orange-600";
  const secondaryStyles = `border border-gray-300 ${darkMode ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`;
  
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${baseStyles}
        ${variant === 'primary' ? primaryStyles : secondaryStyles}
        ${className}
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      whileHover={{ 
        scale: 1.05,
        y: -4
      }}
      whileTap={{ 
        scale: 0.95 
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{children}</span>
        <motion.i
          className={`fas ${icon} text-sm`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10,
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            duration: 0.3,
            rotate: {
              duration: 0.5
            }
          }}
        />
      </div>
      
      {/* Ripple effect on hover */}
      <div
        className={`
          absolute inset-0 pointer-events-none
          ${variant === 'primary' ? 'bg-white' : darkMode ? 'bg-gray-600' : 'bg-gray-200'}
          opacity-10 scale-0 group-hover:scale-100 rounded-full
          transition-transform duration-500 ease-out
          origin-center
        `}
        style={{
          transform: isHovered ? 'scale(2)' : 'scale(0)'
        }}
      />
    </motion.button>
  );
};

export default AnimatedButton; 