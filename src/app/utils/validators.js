export const validateEmail = email => {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Invalid e-mail';
  return errors;
};