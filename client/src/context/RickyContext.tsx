import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { RickyFetch } from "../services/rickyapi";
import { ContextType } from "../types/RickyFetch/ContextType";
import { Character } from "../types/RickyFetch/Character";

const RickyContext = createContext<ContextType | undefined>(undefined);

export const RickyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    RickyFetch(setCharacters, setIsLoading, page);
  }, [page]);

  const statusColor = (status: string) => {
    switch (status) {
      case "Alive":
        return "bg-green-400";
      case "Dead":
        return "bg-red-400";
      case "unknown":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const handlePrevPage = () => {
    if (page != 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <RickyContext.Provider
      value={{
        characters,
        statusColor,
        isLoading,
        page,
        setPage,
        handlePrevPage,
        handleNextPage,
        setOpen,
        open,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </RickyContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(RickyContext);
  if (!context) {
    throw new Error("Error al utilizar el contexto Ricky Morty");
  }
  return context;
};
