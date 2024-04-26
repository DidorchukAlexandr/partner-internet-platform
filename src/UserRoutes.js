import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
import PublicRoute from "./modules/PublicRoute/PublicRoute.jsx";
import PrivateRoute from "./modules/PrivateRoute/PrivateRoute.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ManagerPage from "./pages/ManagerPage/ManagerPage.jsx";
import UserPage from "./pages/UsersPage/UsersPage.jsx";
import BalancesPage from "./pages/BalancesPage/BalancesPage.jsx";
import SupportPage from "./pages/SupportPage/SupportPage.jsx";
import OfferPage from "./pages/OffersPage/OfferPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function UserRoutes() {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/menedżer" element={<ManagerPage />} />
          <Route path="/użytkownicy" element={<UserPage />} />
          <Route path="/oferuje" element={<OfferPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/balansować" element={<BalancesPage />} />
          <Route path="/pomoc techniczna" element={<SupportPage />} />
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
}

export default UserRoutes;
