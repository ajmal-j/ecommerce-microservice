export const setLocalStorage = (token: string) => {
  const data = JSON.stringify(token);
  localStorage.setItem("userCredentials", data);
};
