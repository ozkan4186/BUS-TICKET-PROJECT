import { createContext, useContext, useState } from "react";


export const AppContext = createContext<any | null>(null);


export const useAppContext = () => useContext(AppContext);

// Context'in sağlayıcısı olarak kullanacağımız bileşen
export const AppContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formmsg, setFrommsg] = useState<{ msg: string }>({ msg: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [formmsgs, setFormmsgs] = useState<{ msg: string }[]>([]);
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showSeats, setShowSeats] = useState<boolean>(false);
  const [totalseats, setTotalSeats] = useState<number>(20);
  const [selectSeat, setSelectSeat] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        username,
        password,
        formmsg,
        setUsername,
        setPassword,
        setFrommsg,
        email,
        setEmail,
        phone,
        setPhone,
        date,
        setDate,
        confirmpassword,
        setConfirmpassword,
        formmsgs,
        setFormmsgs,
        name,
        setName,
        subject,
        setSubject,
        message,
        setMessage,
        showSeats,
        setShowSeats,
        totalseats,
        setTotalSeats,
        selectSeat,
        setSelectSeat,
        modal,
        setModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
