import { useState } from "react";
import Flower from "../svg/flower";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import options from "./options";

const Translate = ({ label }) => {

  const [text, setText] = useState("");
  const[lang,setLang]= useState(options[0])

  return (
    <div>
    <div className="ui form">
      <div className="field">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
        <label>{label}</label>
        <input
          value={text}
          className="input"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>

    <Dropdown options={options} select={lang} setSelect={setLang} label="Select a Language"/>
    <div >
        <h1>Output</h1>
        <Convert lang={lang} text={text}/>
    </div>
    </div>
  );
};
export default Translate;
