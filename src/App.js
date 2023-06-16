import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/User/UserPage";
import UserCreate from "./pages/User/UserCreate";
import UserEdit from "./pages/User/UserEdit";
import ReportPage from "./pages/Reports/ReportPage";
import SignInCreate from "./pages/Auth/SignInCreate";
import SignUpCreate from "./pages/Auth/SignUpCreate";
import { PageRoutes } from "./routes";
const App = () => {
  return (
    // <div style={{ marginTop: "80px" }}>
    <div>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route exact path={PageRoutes.Homepage.path} Component={HomePage} />
        <Route exact path={PageRoutes.User.Page.path} Component={UserPage} />
        <Route exact path={PageRoutes.User.Create.path} Component={UserCreate} />
        <Route exact path={PageRoutes.User.Edit.path} Component={UserEdit} />
        <Route exact path={PageRoutes.Reports.path} Component={ReportPage} />
        <Route exact path={PageRoutes.Auth.SignIn.path} Component={SignInCreate} />
        <Route exact path={PageRoutes.Auth.SignUp.path} Component={SignUpCreate} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
