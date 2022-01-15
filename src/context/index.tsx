import React, { 
  createContext, 
  useState, 
  useContext, 
  ReactNode
} from 'react';

type Context = {
  resultApi: any;
  setResultApi: any;
}

type ContextProps = {
  children: ReactNode;
}

export const UpdateContext = createContext({} as Context);
export default function UpdateProvider({ children }: ContextProps) {

  const [resultApi, setResultApi] = useState([]);

  return (
    <UpdateContext.Provider value={{
      resultApi,
      setResultApi
    }}>
      {children}
    </UpdateContext.Provider>
  );
}

export function userApi() {
  const context = useContext(UpdateContext);
  const { resultApi, setResultApi } = context;
  return { resultApi, setResultApi }
}