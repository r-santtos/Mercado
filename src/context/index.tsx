import React, { 
  createContext, 
  useState, 
  useContext, 
  ReactNode
} from 'react';

type Context = {
  api: {};
  setApi: Function;
}

type ContextProps = {
  children: ReactNode;
}

export const UpdateContext = createContext({} as Context);
export default function UpdateProvider({ children }: ContextProps) {

  const [api, setApi] = useState({});

  return (
    <UpdateContext.Provider value={{
      api,
      setApi
    }}>
      {children}
    </UpdateContext.Provider>
  );
}

export function userApi() {
  const context = useContext(UpdateContext);
  const { api, setApi } = context;
  return { api, setApi }
}