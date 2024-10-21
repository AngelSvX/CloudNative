import React, { ReactNode, createContext, useContext, useState } from "react";
import { RegisterType } from "../types/RegisterContext/RegisterType";
import axios from "axios";

const RegisterContext = createContext<RegisterType | undefined>(undefined);

export const RegisterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clearUser = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const addUser = () => {
    axios
      .post("http://localhost:2103/users/createUser", {
        username: username,
        email: email,
        password: password,
      })
      .then(() => {
        console.log("Usuario registrado como: ", username);
      })
      .catch((err: Error) => {
        console.log("Ocurrió un error al registrarse: ", err);
      });
  };

  return (
    <RegisterContext.Provider
      value={{
        setUsername,
        setEmail,
        setPassword,
        addUser,
        clearUser,
        username,
        email,
        password,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("Error al usar el contexto de Registro");
  }
  return context;
};
