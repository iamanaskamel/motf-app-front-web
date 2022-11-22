import { Routes, Route } from "react-router-dom";
import { ProfilePage, RegisterPage, LoginPage } from "../src/pages";
import { AuthLayout, HomeLayout } from "../src/layouts";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
