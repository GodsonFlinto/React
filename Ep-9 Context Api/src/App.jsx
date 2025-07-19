import React, { createContext, useContext, useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

export let Context = createContext()


const App = () => {
  let [user, setUser] = useState({ name: "Godson", age: 21, Location: "Tuty" });
  console.log(Context)
  return (
    <>
      <Context.Provider value={{ user }}>
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
