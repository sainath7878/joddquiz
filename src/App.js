import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { LandingPage, PrivateRoute, Quiz, RestrictAuth, RulesPage, ResultPage } from "pages/index";
import { Footer, Header, SignIn, SignUp } from "components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useAuth } from "context";

function App() {
  const token = localStorage.getItem("token");
  const { authDispatch } = useAuth();
  useEffect(() => {
    if (token) {
      authDispatch({ type: "SET_USER", payload: { encodedToken: token } })
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ToastContainer theme="colored" autoClose={2000} position="top-right" className="fs-s" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
          <Route element={<PrivateRoute />}>
            <Route path="/rules" >
              <Route path=":quizid" element={<RulesPage />} />
            </Route>
            <Route path="/questions">
              <Route path=":quizid" >
                <Route path=":questionNumber" element={<Quiz />} />
              </Route>
            </Route>
            <Route path="/result" element={<ResultPage />} />
          </Route>

          <Route element={<RestrictAuth />} >
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
