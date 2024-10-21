type setVoid = () => void;

export interface RegisterType {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  addUser: setVoid;
  clearUser: setVoid;
  username: string;
  email: string;
  password: string;
}
