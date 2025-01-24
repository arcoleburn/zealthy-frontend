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
import { useToast } from "./shared/ToastContext/ToastContext";

function App() {
  const { isLoggedIn } = useAppContext();
  const { addToast } = useToast();
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            ≈
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
            />
            <Route path="/page2" element={<PageTwo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/data" element={<Data />} />
          </Route>
        </Routes>
      </Router>

      <div className="App">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => addToast("Success message!", "success")}
        >
          Show Success Toast
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded ml-4"
          onClick={() => addToast("Error message!", "error")}
        >
          Show Error Toast
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded ml-4"
          onClick={() => addToast("Info message!", "info")}
        >
          Show Info Toast
        </button>
      </div>
    </>
  );
}

export default App;
