import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />          
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
