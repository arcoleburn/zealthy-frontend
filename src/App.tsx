import "./App.css";
import Login from "./scenes/Login";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./scenes/Home";
import Data from "./scenes/Data";
import Admin from "./scenes/Admin";
import PageTwo from "./pages/PageTwo";
import { useAppContext } from "./shared/AppContext/AppContextProvider";
import Layout from "./shared/Layout";
import ErrorBoundary from "./shared/ErrorBoundary";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route element={<Layout />}>
              ≈
              <Route
                path="/"
                element={
                  isLoggedIn ? <Home /> : <Navigate to="/login" replace />
                }
              />
              <Route path="/page2" element={<PageTwo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/data" element={<Data />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
