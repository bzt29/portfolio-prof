export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateRequired(value: string, minLength = 1): boolean {
  return typeof value === "string" && value.trim().length >= minLength;
}
