import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MultiStepFormProps {
  darkMode: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
}

interface FormData {
  name: string;
  ageGroup: string;
  profession: string;
  customProfession?: string;
  isBusinessOwner: boolean;
  phone: string;
  businessDescription: string;
  employeeRange: string;
  interestedInCustomization: boolean;
  currentAccounting: string[];
  email: string;
  company: string;
  businessName?: string;
  customSoftware?: string;
}

const professionCategories = [
  { id: 'accountant', label: 'Accountant/CPA', icon: 'fa-calculator' },
  { id: 'business', label: 'Business Executive', icon: 'fa-briefcase' },
  { id: 'finance', label: 'Finance Professional', icon: 'fa-chart-line' },
  { id: 'tech', label: 'Technology Professional', icon: 'fa-laptop-code' },
  { id: 'consultant', label: 'Consultant', icon: 'fa-handshake' },
  { id: 'other', label: 'Other', icon: 'fa-user-tie' },
];

const employeeRanges = [
  { id: 'solo', label: 'Just Me', icon: 'fa-user' },
  { id: 'small', label: '1-25', icon: 'fa-users' },
  { id: 'large', label: '25-500', icon: 'fa-building' },
  { id: 'enterprise', label: '500+', icon: 'fa-city' },
];

const accountingSoftware = [
  { id: 'quickbooks', label: 'QuickBooks', icon: 'fa-book' },
  { id: 'xero', label: 'Xero', icon: 'fa-calculator' },
  { id: 'sage', label: 'Sage', icon: 'fa-abacus' },
  { id: 'zoho', label: 'Zoho Books', icon: 'fa-file-invoice-dollar' },
  { id: 'tally', label: 'Tally', icon: 'fa-chart-bar' },
  { id: 'excel', label: 'Excel/Spreadsheets', icon: 'fa-file-excel' },
  { id: 'other', label: 'Other', icon: 'fa-ellipsis-h' },
  { id: 'none', label: 'None', icon: 'fa-times-circle' },
];

const ageGroups = [
  { id: '18-25', label: '18-25 years' },
  { id: '26-35', label: '26-35 years' },
  { id: '36-45', label: '36-45 years' },
  { id: '46-55', label: '46-55 years' },
  { id: '56+', label: '56+ years' }
];

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const ThankYouMessage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="text-center py-8"
  >
    <div className="mb-4">
      <i className="fas fa-check-circle text-6xl text-green-500"></i>
    </div>
    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
    <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
      We&apos;ve received your information and will be in touch soon.
    </p>
    <div className="animate-bounce">
      <i className="fas fa-envelope text-3xl text-orange-500"></i>
    </div>
  </motion.div>
);

const MultiStepForm: React.FC<MultiStepFormProps> = ({ darkMode, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    ageGroup: '',
    profession: '',
    isBusinessOwner: false,
    phone: '',
    businessDescription: '',
    employeeRange: '',
    interestedInCustomization: false,
    currentAccounting: [],
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Tell us about yourself</h3>
            
            <div>
              <label className={`block mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                Your Name
              </label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => updateFormData({ name: e.target.value })}
                placeholder="Enter your full name"
                className={`w-full p-3 rounded-lg border ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                required
              />
            </div>

            <div>
              <label className={`block mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                Age Group
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ageGroups.map(group => (
                  <button
                    key={group.id}
                    onClick={() => updateFormData({ ageGroup: group.id })}
                    className={`p-3 rounded-lg border transition-all ${
                      formData.ageGroup === group.id
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                        : `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                    }`}
                  >
                    <span className={`text-sm ${
                      formData.ageGroup === group.id 
                        ? 'text-orange-500' 
                        : darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {group.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={`block mb-2 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                Your Profession
              </label>
              <div className="grid grid-cols-2 gap-3">
                {professionCategories.filter(p => p.id !== 'other').map(category => (
                  <button
                    key={category.id}
                    onClick={() => updateFormData({ profession: category.id })}
                    className={`p-3 rounded-lg border transition-all ${
                      formData.profession === category.id
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                        : `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                    }`}
                  >
                    <i className={`fas ${category.icon} text-xl mb-1 ${
                      formData.profession === category.id ? 'text-orange-500' : ''
                    }`}></i>
                    <p className="text-xs">{category.label}</p>
                  </button>
                ))}

                {/* Other Profession Button with Input */}
                <button
                  onClick={() => {
                    if (formData.profession !== 'other') {
                      updateFormData({ profession: 'other', customProfession: '' });
                    }
                  }}
                  className={`p-3 rounded-lg border transition-all relative ${
                    formData.profession === 'other'
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                      : `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                  }`}
                >
                  <i className={`fas fa-user-plus text-xl mb-1 ${
                    formData.profession === 'other' ? 'text-orange-500' : ''
                  }`}></i>
                  {formData.profession === 'other' ? (
                    <input
                      type="text"
                      value={formData.customProfession || ''}
                      onChange={(e) => {
                        e.stopPropagation(); // Prevent button click
                        updateFormData({ customProfession: e.target.value });
                      }}
                      placeholder="Specify profession..."
                      className={`
                        w-full text-center text-xs p-1 rounded
                        ${darkMode 
                          ? "bg-transparent placeholder-gray-400 text-white" 
                          : "bg-transparent placeholder-gray-500 text-gray-900"
                        }
                        focus:outline-none
                      `}
                      onClick={(e) => e.stopPropagation()} // Prevent button click when clicking input
                      autoFocus
                    />
                  ) : (
                    <p className="text-xs">Other</p>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={onClose}
                className={`px-4 py-2 rounded-lg ${
                  darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.name || !formData.ageGroup || !formData.profession}
                className={`px-6 py-2 rounded-lg bg-orange-500 text-white font-medium
                  ${(!formData.name || !formData.ageGroup || !formData.profession) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}
                `}
              >
                Next
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-3">Business Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className={`block mb-1 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName || ''}
                  onChange={(e) => updateFormData({ businessName: e.target.value })}
                  placeholder="Enter your business name"
                  className={`w-full p-2 rounded-lg border ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="inline-flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.isBusinessOwner}
                    onChange={(e) => updateFormData({ isBusinessOwner: e.target.checked })}
                    className="form-checkbox h-4 w-4 text-orange-500"
                  />
                  <span className={darkMode ? "text-gray-200" : "text-gray-700"}>
                    I am a business owner
                  </span>
                </label>
              </div>

              <div>
                <label className={`block mb-1 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Company Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {employeeRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => updateFormData({ employeeRange: range.id })}
                      className={`p-3 rounded-lg border transition-all ${
                        formData.employeeRange === range.id
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                          : `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                      }`}
                    >
                      <i className={`fas ${range.icon} text-xl mb-1 ${
                        formData.employeeRange === range.id ? 'text-orange-500' : ''
                      }`}></i>
                      <p className="text-xs">{range.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block mb-1 text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Brief Business Description
                </label>
                <textarea
                  value={formData.businessDescription || ''}
                  onChange={(e) => updateFormData({ businessDescription: e.target.value })}
                  placeholder="Tell us about your business..."
                  className={`w-full p-2 rounded-lg border ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  rows={2}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className={`px-3 py-1.5 rounded-lg text-sm ${
                  darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.businessName || !formData.employeeRange}
                className={`px-4 py-1.5 rounded-lg bg-orange-500 text-white text-sm font-medium
                  ${(!formData.businessName || !formData.employeeRange) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}
                `}
              >
                Next
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
                  className={`w-full p-3 rounded-lg border ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label className="block mb-4">Current Accounting Software (Select all that apply)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {accountingSoftware.filter(s => s.id !== 'other').map(software => (
                    <button
                      key={software.id}
                      onClick={() => {
                        const currentSoftware = formData.currentAccounting || [];
                        const newSoftware = currentSoftware.includes(software.id)
                          ? currentSoftware.filter(id => id !== software.id)
                          : [...currentSoftware, software.id];
                        updateFormData({ currentAccounting: newSoftware });
                      }}
                      className={`
                        p-3 rounded-lg border transition-all relative
                        ${formData.currentAccounting?.includes(software.id)
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                          : `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                        }
                      `}
                    >
                      <div className="flex flex-col items-center">
                        <i className={`fas ${software.icon} text-xl mb-1 ${
                          formData.currentAccounting?.includes(software.id) ? 'text-orange-500' : ''
                        }`}></i>
                        <p className="text-xs">{software.label}</p>
                      </div>
                      {formData.currentAccounting?.includes(software.id) && (
                        <div className="absolute top-2 right-2">
                          <i className="fas fa-check-circle text-orange-500"></i>
                        </div>
                      )}
                    </button>
                  ))}
                  
                  {/* Other Software Input */}
                  <div className={`
                    p-3 rounded-lg border transition-all relative
                    ${formData.customSoftware ? 'border-orange-500 bg-orange-50 dark:bg-orange-900' : 
                      `${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`
                    }
                  `}>
                    <div className="flex flex-col items-center w-full">
                      <i className={`fas fa-plus text-xl mb-1 ${
                        formData.customSoftware ? 'text-orange-500' : ''
                      }`}></i>
                      <input
                        type="text"
                        value={formData.customSoftware || ''}
                        onChange={(e) => {
                          updateFormData({ 
                            customSoftware: e.target.value,
                            currentAccounting: e.target.value 
                              ? [...(formData.currentAccounting || []).filter(id => id !== 'other'), 'other']
                              : (formData.currentAccounting || []).filter(id => id !== 'other')
                          });
                        }}
                        placeholder="Other software..."
                        className={`
                          w-full text-center text-xs p-1 rounded
                          ${darkMode 
                            ? "bg-transparent placeholder-gray-400 text-white" 
                            : "bg-transparent placeholder-gray-500 text-gray-900"
                          }
                          focus:outline-none
                        `}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">Business Description</label>
                <textarea
                  value={formData.businessDescription}
                  onChange={(e) => updateFormData({ businessDescription: e.target.value })}
                  rows={3}
                  className={`w-full p-3 rounded-lg border ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div className="relative group">
                <label className="inline-flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interestedInCustomization}
                    onChange={(e) => updateFormData({ interestedInCustomization: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-orange-500"
                  />
                  <span>I&apos;m interested in providing suggestions for free BizGuard customization</span>
                </label>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full left-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                  Help shape BizGuard&apos;s features and get early access benefits!
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className={`px-4 py-2 rounded-lg ${
                  darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return <ThankYouMessage darkMode={darkMode} />;
  }

  return (
    <div className={`
      w-full 
      max-h-[calc(90vh-4rem)] 
      overflow-y-auto 
      ${darkMode ? "bg-gray-800" : "bg-white"}
    `}>
      {/* Progress indicator - make it sticky */}
      <div className={`
        sticky 
        top-0 
        z-10 
        p-4 
        ${darkMode ? "bg-gray-800" : "bg-white"}
        border-b 
        ${darkMode ? "border-gray-700" : "border-gray-200"}
      `}>
        {/* Progress indicator content */}
        <div className="flex justify-center mb-4">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`w-2 h-2 mx-1 rounded-full ${
                step >= stepNumber 
                  ? 'bg-orange-500' 
                  : darkMode 
                    ? 'bg-gray-700' 
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form content */}
      <div className="p-4 space-y-4">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      {/* Navigation buttons - make them sticky */}
      <div className={`
        sticky 
        bottom-0 
        z-10 
        p-4 
        ${darkMode ? "bg-gray-800" : "bg-white"}
        border-t 
        ${darkMode ? "border-gray-700" : "border-gray-200"}
        flex 
        justify-between 
        space-x-4
      `}>
        {step > 1 && (
          <button
            onClick={prevStep}
            className={`
              px-4 
              py-2 
              rounded-lg 
              ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"}
              hover:opacity-90
            `}
          >
            Back
          </button>
        )}
        <button
          onClick={step === 3 ? handleSubmit : nextStep}
          disabled={!formData.name || !formData.ageGroup || !formData.profession}
          className={`
            px-4 
            py-2 
            rounded-lg 
            bg-orange-500 
            text-white 
            hover:bg-orange-600
            disabled:opacity-50 
            disabled:cursor-not-allowed
            ml-auto
          `}
        >
          {step === 3 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm; 