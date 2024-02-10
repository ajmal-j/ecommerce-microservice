export const setLocalStorage = (token: string) => {
  const data = JSON.stringify(token);
  localStorage.setItem("userCredentials", data);
};

export const getLocalStorage = () => {
  const token = localStorage.getItem("userCredentials");
  if (!token) throw new Error("Not authorized");
  return token ? JSON.parse(token) : null;
};
export const removeLocalStorage = () => {
  localStorage.removeItem("userCredentials");
};
