import { Link} from "react-router-dom";

const Navbar =  ()=>{
    return(
        <div className="ui secondary pointing menu">
 
  <Link to="/search" className="item">
  Search
  </Link>
  <Link to="/accordion" className="item">
   Accordion
  </Link>
  <div className="right menu">
    <Link to="/" className="ui active item">
      Translate
    </Link>
  </div>
</div>

    )
}
export default Navbar;