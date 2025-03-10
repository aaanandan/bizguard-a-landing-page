// Define all TypeScript interfaces and types
export interface ThemeProps {
  theme: string;
  darkMode: boolean;
}

export interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  ageGroup: string;
  profession: string;
  customProfession?: string;
  currentAccounting: string[];
  customSoftware?: string;
  employeeRange: string;
  businessDescription?: string;
  isBusinessOwner: boolean;
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'; 