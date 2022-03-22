import React, { 
  createContext, 
  useState, 
  useContext, 
  ReactNode
} from 'react';

type Context = {
  resultApi: any;
  setResultApi: any;

  isLoading: boolean; 
  setIsLoading: Function;
}

type ContextProps = {
  children: ReactNode;
}

export const UpdateContext = createContext({} as Context);
export default function UpdateProvider({ children }: ContextProps) {

  const [resultApi, setResultApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UpdateContext.Provider value={{
      resultApi,
      setResultApi,

      isLoading, 
      setIsLoading,
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

export function userIsLoading() {
  const context = useContext(UpdateContext);
  const { isLoading, setIsLoading } = context;
  return { isLoading, setIsLoading }
}