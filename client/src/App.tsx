import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LayoutProp } from "./types/LayoutProps";
import Main_page from "./pages/Main_page";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { CharacterPage } from "./pages/CharactersPage";
import { RickyProvider } from "./context/RickyContext";
import { RegisterProvider } from "./context/RegisterContext";
import PermanentDrawerLeft from "./components/Drawer";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  const location = useLocation();
  const noNavRoutes = ["/register", "/login"];

  return (
    <div>
      {!noNavRoutes.includes(location.pathname) && <NavBar />}
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <RegisterProvider>
                <Register />
              </RegisterProvider>
            }
          />
          <Route
            path="/projects"
            element={
              <RickyProvider>
                <CharacterPage />
              </RickyProvider>
            }
          />
          <Route path="/drawer" element={<PermanentDrawerLeft/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
