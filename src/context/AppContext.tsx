import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User } from "../models/User";
import { Pixel } from "../models/Pixel";
import { PixelsService } from "../api/PixelsService";

export type AppContextValue = {
  user: User;
  pixels: Pixel[];
  createPixel: (name: string) => Promise<void>;
  deletePixel: (id: string) => Promise<void>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("App Context must be used within Provider.");
  }

  return context;
};

export const useUser = () => useAppContext().user;

export const usePixels = () => {
  const { user, ...context } = useAppContext();
  return context;
};

type WithChildren<T> = T & {
  children: ReactNode;
};

interface Props {
  user: User;
}

export const AppContextProvider = ({ children, user }: WithChildren<Props>) => {
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const pixelsService = useMemo(() => new PixelsService(), []);

  useEffect(() => {
    pixelsService.getAllPixels().then(setPixels).catch();
  }, [user]);

  const createPixel = useCallback(
    async (name: string) => {
      await pixelsService.createPixel(name);
      pixelsService.getAllPixels().then(setPixels).catch();
    },
    [pixelsService]
  );

  const deletePixel = useCallback(
    async (id: string) => {
      await pixelsService.deletePixel(id);
      pixelsService.getAllPixels().then(setPixels).catch();
    },
    [pixelsService]
  );

  const value = useMemo(
    () => ({
      user,
      pixels,
      createPixel,
      deletePixel,
    }),
    [user, pixels, createPixel, deletePixel]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
