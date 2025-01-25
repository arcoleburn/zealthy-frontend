import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getModules } from "../../services/modules";

// TODO: Move these types to shared

export interface Address {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

export interface User {
  userId: string;
  email: string;
  birthday: string;
  address: Address;
  aboutMe: string;
}

interface AppState {
  isLoggedIn: boolean;
  isNewUser: boolean;
  user: User | null;
  setIsLoggedIn: (auth: boolean) => void;
  setIsNewUser: (val: boolean) => void;

  setUser: (user: User | null) => void;
  updateUser: (prop: Partial<User>) => void;
  pageOne: string[];
  pageTwo: string[];
  setPageOne: (modules: string[]) => void;
  setPageTwo: (modules: string[]) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  //admin
  const [pageOne, setPageOne] = useState(["aboutMe", "birthday"]);
  const [pageTwo, setPageTwo] = useState(["address"]);

  const updateUser = (prop: Partial<User>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return {
        ...prevUser,
        ...prop,
      };
    });
  };
  useEffect(() => {
    const fetchModules = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const modules: any = await getModules(); // Await the result
      const newPageOne: string[] = [];
      const newPageTwo: string[] = [];

      // Loop through the modules and assign them to the appropriate pages
      modules.forEach((m: { page: number; name: string }) => {
        if (m.page === 1) {
          newPageOne.push(m.name); // Push to pageOne if the module belongs to page 1
        } else if (m.page === 2) {
          newPageTwo.push(m.name); // Push to pageTwo if the module belongs to page 2
        }
      });

      // Update the state with the new page arrays
      setPageOne(newPageOne);
      setPageTwo(newPageTwo);
    };

    fetchModules();
  }, []);
  return (
    <AppContext.Provider
      value={{
        user,
        isNewUser,
        setIsNewUser,
        isLoggedIn,
        setUser,
        updateUser,
        setIsLoggedIn,
        pageOne,
        pageTwo,
        setPageOne,
        setPageTwo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within provider");
  }
  return context;
};
