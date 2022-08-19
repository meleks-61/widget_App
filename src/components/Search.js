import { useEffect, useState } from "react";
import axios from "axios";
import { queryAllByAltText } from "@testing-library/react";
import Results from "./Results";
const Search=()=>{

    const[term,setTerm]=useState("")
    const[result,setResult]=useState([])

    useEffect(()=>{
        const getRes= async ()=>{
        const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                action:"query",
                list:"search",
                format:"json",
                origin:"*",
                srsearch:term
            }
        })
        // console.log(data)
        setResult(data.query.search)
    }

    if(term && !result.length){
        getRes()
    }else{

        const timerId= setTimeout(() => {
            if(term) {
                getRes()
            }
            
        }, 1000);
        return ()=>{
            clearTimeout(timerId)
    
        }

    }


  
  


    },[term])




    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Area</label>
                    <input
                    value={term} 
                    className="input"
                    onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>

            <Results result={result}/>
        </div>
    )
}
export default Search;