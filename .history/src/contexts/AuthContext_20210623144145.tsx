import { createContext } from "vm";

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user : User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType); // Colocando as rotas dentro do contexto tudo que for compartilhado nesse contexto sera de conhecimento das rotas


export function AuthContextProvider(){
	return (
	  <AuthContext.Provider value={{ user, signInWithGoogle }}> 
	  </AuthContext.Provider>
	);
}