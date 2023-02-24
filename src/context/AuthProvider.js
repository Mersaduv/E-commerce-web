import { createContext, useContext, useEffect, useState } from "react";

const AuthState = createContext();
const AuthDispatch = createContext();
const LOCAL_STORAGE_AUTH = "authState";
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH)) || false;
    setState(userData);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(state));
  }, [state]);
  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={setState}>{children}</AuthDispatch.Provider>
    </AuthState.Provider>
  );
};

export default AuthProvider;
export const useAuthState = () => useContext(AuthState);
export const useDispatchAuth = () => useContext(AuthDispatch);
