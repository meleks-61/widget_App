import "./App.css";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  //Acordion
  const data = [
    {
      title: "What is React",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React",
      content: "You use React by creating components",
    },
  ];
  //Dropdown
  const dropData = [
    {
      label: "Red Color",
      value: "red",
    },
    {
      label: "Green Color",
      value: "green",
    },
    {
      label: "Yellow Color",
      value: "yellow",
    },
  ];
  const [select, setSelect] = useState(dropData[0]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Translate  label="Text area"/>}/>
          <Route path="/search"  element={<Search/>}/>
          <Route path="/accordion"  element={<Accordion data={data}/>}/>
          {/* <Accordion data={data}/> */}
          {/* <Search/> */}
          {/* <Dropdown label="Select a Color" options={dropData} select={select} setSelect={setSelect}/> */}
          {/* <Translate label="Text area"/> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
