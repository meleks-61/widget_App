import "./result.css"

const Results = ({result})=>{
    return(
        <div className="ui celled list">

           { result.map((res )=>{
        return <div className="item" key={res.pageid}>
            <div className="content">
                <div className="header cursor">
                    <a href={`https://en.wikipedia.org?curid=${res.pageid}`}>{res.title}</a>

                </div>
                <span dangerouslySetInnerHTML={{__html:res.snippet}}></span>
                
            </div>
        </div>
        })
        }
        </div>
    )
}
export default Results;