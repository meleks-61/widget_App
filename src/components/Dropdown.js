import { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, select, setSelect }) => {
  const [open, setOpen] = useState(false);
  //dropdown dışında herhangi bir yere tıkladıgında da dropdown kapansın ama alt divlerdeki işlevi etkilemesin bu tıklama
const ref=useRef()


  useEffect(()=>{
    const onBodyClick=(event)=>{
        if(ref.current.contains(event.target)){
            
            return;
        }
        setOpen(false)
    }

    document.body.addEventListener("click",onBodyClick,{
        capture:true,
    })

    return ()=>{
        document.body.removeEventListener("click",onBodyClick,{
            capture:true,
        })
    }




  },[])

// const onChangeColor=()=>{
//     // 
//     document.body.display.style.color="red"


// }




  const renderList = options.map((op) => {


    
    if (op.value === select.value) {
        
      return;
    }

    return (
      <div className="item" key={op.value} style={{backgroundColor:op.value}} onClick={()=>setSelect(op)}>
        {op.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select Color</label>
        <div className={`ui selection dropdown ${open ? "visible active":""}`} style={{backgroundColor:select.value}} onClick={()=>setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text" >{select.label}</div>
          <div className={`menu ${open ? "visible transition":""}`}  >{renderList}</div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
