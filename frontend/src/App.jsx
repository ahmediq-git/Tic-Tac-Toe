import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Error/ErrorBoundary";

const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Gamepage = lazy(() => import("./pages/Gamepage"));
const Loading = lazy(() => import("./pages/Loading"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Error404 = lazy(() => import("./Error/Error404"));

export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <UserContext.Provider value={{ user, setUser }}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route
                path="/homepage"
                element={<Homepage />}
              />
              <Route
                path="/game/:id"
                element={<Gamepage />}
              />
              <Route
                path="*"
                element={<Error404 />}
              />
            </Routes>
          </Suspense>
          </UserContext.Provider>
        </Router>

      </ErrorBoundary>
    </div>
  );
}

export default App;
