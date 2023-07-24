import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Dark mode Textutils";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Light mode Textutils";
    }
  };
  return (
    <Router>
      <div>
        <Navbar
          title={"Yusra"}
          mode={mode}
          setMode={setMode}
          handleMode={handleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              Component={() => (
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  heading={"Enter Text"}
                />
              )}
              // Component={TextForm}
            />
            <Route path="/about" Component={() => <About mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
