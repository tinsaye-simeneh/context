import { useState } from "react";
import { LoginContext } from "./Context/LoginContext";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(username, isLoggedIn);

  return (
    <div className="App">
      <LoginContext.Provider
        value={{ username, setUsername, isLoggedIn, setIsLoggedIn }}
      >
        {isLoggedIn ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
