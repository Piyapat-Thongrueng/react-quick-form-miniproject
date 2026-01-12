export const isValidEmail = (inputEmail: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
};
