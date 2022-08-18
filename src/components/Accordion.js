import React, { useState } from "react";
import './accordion.css'

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState();
  const [open, setOpen] = useState(false);

  const changeIndex = (index) => {
    setActiveIndex(index);
    setOpen(!open);
  };

  const renderedData = data.map((item, index) => {
    const active = index === activeIndex && open ? "active" : "";

    return (
      <div  key={item.title}>
        <div className={`title ${active}`} onClick={() => changeIndex(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion container ">{renderedData}</div>;
};

export default Accordion;
