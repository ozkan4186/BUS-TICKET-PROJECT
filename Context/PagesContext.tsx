import { createContext, useContext, useState } from "react";

export const PagesContext = createContext<any | null>(null);
export const useAppContext = () => useContext(PagesContext);

export const PagesContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [destination, setDestination] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [departureTDate, setDepartureDate] = useState<string>("");
  
  return (
    <PagesContext.Provider
      value={{
        destination,
        setDestination,
        arrival,
        setArrival,
        departureTDate,
        setDepartureDate,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
