import React, { createContext, useContext, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  profession?: string;
  businessName?: string;
  businessDescription?: string;
  // ... add other form fields as needed
}

interface FormContextType {
  submitStatus: 'idle' | 'loading' | 'success' | 'error';
  showWaitlistModal: boolean;
  setShowWaitlistModal: (show: boolean) => void;
  showSubscribeModal: boolean;
  setShowSubscribeModal: (show: boolean) => void;
  handleFormSubmit: (data: FormData) => Promise<void>;
  handleSubscribeSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    try {
      setSubmitStatus('loading');
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setShowWaitlistModal(false);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  const handleSubscribeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    try {
      setSubmitStatus('loading');
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Subscription failed');
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setShowSubscribeModal(false);
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <FormContext.Provider value={{
      submitStatus,
      showWaitlistModal,
      setShowWaitlistModal,
      showSubscribeModal,
      setShowSubscribeModal,
      handleFormSubmit,
      handleSubscribeSubmit
    }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
} 