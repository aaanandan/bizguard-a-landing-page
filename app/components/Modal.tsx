interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`
        relative 
        w-full 
        max-w-2xl 
        max-h-[90vh] 
        overflow-y-auto 
        rounded-lg 
        p-6 
        ${darkMode ? "bg-gray-800" : "bg-white"}
        shadow-xl
      `}>
        {/* Close button */}
        <button
          onClick={onClose}
          className={`
            absolute 
            top-4 
            right-4 
            p-2 
            rounded-full 
            hover:bg-gray-100 
            ${darkMode ? "text-white hover:bg-gray-700" : "text-gray-600"}
            z-50
          `}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        {title && (
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 