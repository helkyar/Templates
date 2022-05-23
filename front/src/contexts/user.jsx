import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));
  const [user, setUser] = useState(() => window.sessionStorage.getItem("user"));

  useEffect(() => {
    if (typeof user === "string") {
      const userData = ["id", "username", "rol"]
      const userArray = user.split(",");
      const userObj = userArray.map((data, i) => { [userData[i]]: data });
      setUser(userObj);
    }
  }, [user]);

  return (
    <Context.Provider value={{ jwt, setJWT, user, setUser }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
