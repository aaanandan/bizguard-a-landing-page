interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className={`
        relative 
        w-full 
        max-w-2xl
        p-5
        rounded-lg 
        shadow-xl 
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
      `}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`
            absolute 
            top-3 
            right-3
            p-1 
            rounded-full 
            hover:bg-opacity-80 
            ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}
          `}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Title */}
        {title && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        )}
        
        {/* Content */}
        <div className="pt-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 