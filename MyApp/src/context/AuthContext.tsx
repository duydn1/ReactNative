import React, {PropsWithChildren, useMemo, useState} from 'react';

export type AuthContextValue = {
  isAuth: boolean;
  setAuth?: (value: boolean) => void;
  userName?: string;
  setUserName?: (value?: string) => void;
  orgCode?: string;
  setOrgCode?: (value?: string) => void;
  tokenCode?: string;
  setTokenCode?: (value?: string) => void;
};

export const AuthContext = React.createContext<AuthContextValue>({
  isAuth: true,
});

export const AuthContextProvider = ({children}: PropsWithChildren<any>) => {
  const [isAuth, setAuth] = useState(false);
  const [userName, setUserName] = useState<string>();
  const [orgCode, setOrgCode] = useState('');
  const [tokenCode, setTokenCode] = useState('');
  
  const value: AuthContextValue = useMemo(() => {
    return {isAuth, setAuth, userName, setUserName, orgCode, setOrgCode, tokenCode, setTokenCode};
  }, [isAuth, setAuth, userName, setUserName, orgCode, setOrgCode, tokenCode, setTokenCode]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
