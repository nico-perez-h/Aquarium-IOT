import { SetState } from "@/types/setState";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: string;
  name: string;
}
type loginState = "unlogged" | "loading" | "logged";

interface Ctx {
  user: User | null;
  setUser: SetState<User | null>;
  state: loginState;
  setState: SetState<loginState>;
}

const userContext = createContext<Ctx | null>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [state, setState] = useState<loginState>("loading");

  useEffect(() => {
    const getUser = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        const user = {
          id: "a",
          name: "Mau",
        };
        setUser(user);
        setState("logged");
      } else {
        setState("unlogged");
      }
    };
    getUser();
  }, []);

  if (state === "loading") {
    return <Text>Cargando</Text>;
  }
  return (
    <userContext.Provider value={{ user, setUser, state, setState }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const ctx = useContext(userContext);
  if (!ctx) {
    throw new Error("this contexts must be used whitin a UserContextProvider");
  }
  return ctx;
};
