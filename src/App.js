import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

import Home from "./pages/home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./authentication/Login/Login";
import AddService from "./pages/AddService/AddService";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import MyOrder from "./pages/MyOrder/MyOrder";
import PrivateRoute from "./authentication/PriveRoute/PrivateRoute";
import JoinTeam from "./pages/JoinTeam/JoinTeam";
import ContactUs from "./pages/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/addservice">
              <AddService></AddService>
            </Route>
            <Route exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <Route exact path="/join">
              <JoinTeam></JoinTeam>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/placeorder/:servicename">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
