import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Book from './components/Book/Book';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Book/Book';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Header name={loggedInUser.name} ></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:transport">
            <Book></Book>
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>



    // <div>
    //   <Router>
    //     <Header />
    //     <Switch>
    //       <Route path="/home">
    //         <Home />
    //       </Route>
    //       <Route path="/login">
    //         {/* <Login /> */}
    //       </Route>
    //       {/* <PrivateRoute path="/book/:bedType">
    //           <Book />
    //         </PrivateRoute> */}
    //       <Route exact path="/">
    //         <Home></Home>
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>
  );
}

export default App;
