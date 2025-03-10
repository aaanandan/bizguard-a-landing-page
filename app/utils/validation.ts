export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const regex = /^[\d\s\-\+\(\)]{10,}$/;
  return regex.test(phone);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
}; 